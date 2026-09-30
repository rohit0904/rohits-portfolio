import { NextResponse } from "next/server";
import { profile } from "@/data/portfolio";

export const runtime = "nodejs";

interface Payload {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  website?: unknown; // honeypot
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");

/** Appends the message as a new row in your Google Sheet via the Apps Script web app (google-apps-script/Code.gs). */
async function saveToSheet(name: string, email: string, message: string): Promise<boolean> {
  const url = process.env.GOOGLE_SHEET_WEBHOOK_URL;
  if (!url) return false;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" }, // avoids a CORS preflight on Apps Script
    body: JSON.stringify({ secret: process.env.GOOGLE_SHEET_SECRET ?? "", name, email, message, source: "portfolio-contact-form" }),
    redirect: "follow",
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`Sheet responded ${res.status}`);
  const data = (await res.json()) as { ok?: boolean };
  if (!data.ok) throw new Error("Sheet rejected the row");
  return true;
}

/** Optional: also email yourself through Resend. */
async function sendEmail(name: string, email: string, message: string): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return false;
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO_EMAIL ?? profile.email],
      reply_to: email,
      subject: `Portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    }),
  });
  if (!res.ok) throw new Error(`Resend responded ${res.status}`);
  return true;
}

/**
 * CONTACT FORM HANDLER
 * 1. Every valid message is saved to your Google Sheet (set GOOGLE_SHEET_WEBHOOK_URL + GOOGLE_SHEET_SECRET,
 *    see google-apps-script/Code.gs).
 * 2. If RESEND_API_KEY is set, an email is sent as well (EmailJS/Formspree can replace sendEmail() the same way).
 * 3. If neither is configured this route answers 501 { fallback: "mailto" } and the form opens the visitor's mail app.
 * The visitor sees success if at least one channel worked.
 */
export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Bots fill the hidden field: pretend success and drop the message.
  if (str(body.website)) return NextResponse.json({ ok: true });

  const name = str(body.name);
  const email = str(body.email);
  const message = str(body.message);

  if (name.length < 2 || name.length > 100 || !EMAIL_RE.test(email) || message.length < 10 || message.length > 5000) {
    return NextResponse.json({ ok: false, error: "Please check the form fields." }, { status: 422 });
  }

  if (!process.env.GOOGLE_SHEET_WEBHOOK_URL && !process.env.RESEND_API_KEY) {
    return NextResponse.json({ ok: false, fallback: "mailto" }, { status: 501 });
  }

  const results = await Promise.allSettled([saveToSheet(name, email, message), sendEmail(name, email, message)]);
  const delivered = results.some((r) => r.status === "fulfilled" && r.value === true);

  if (!delivered) {
    results.forEach((r) => r.status === "rejected" && console.error("[contact]", r.reason));
    return NextResponse.json({ ok: false, error: "Could not deliver the message." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}