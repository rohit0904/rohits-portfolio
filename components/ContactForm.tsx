"use client";

import { useState, type FormEvent } from "react";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { profile } from "@/data/portfolio";

type Status = "idle" | "submitting" | "success" | "fallback" | "error";
type Errors = Partial<Record<"name" | "email" | "message", string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: { name: string; email: string; message: string }): Errors {
  const errors: Errors = {};
  if (values.name.trim().length < 2) errors.name = "Enter your name (at least 2 characters).";
  if (!EMAIL_RE.test(values.email.trim())) errors.email = "Enter a valid email address.";
  if (values.message.trim().length < 10) errors.message = "Write a message of at least 10 characters.";
  return errors;
}

const fieldClass =
  "w-full rounded-xl border border-line bg-surface/70 px-4 py-3 text-base outline-none transition-colors placeholder:text-muted/70 focus:border-brand-1 aria-[invalid=true]:border-red-500";

export function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", message: "", website: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  const update = (field: keyof typeof values) => (e: { target: { value: string } }) =>
    setValues((v) => ({ ...v, [field]: e.target.value }));

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (res.ok) {
        setStatus("success");
        return;
      }
      const data = (await res.json().catch(() => ({}))) as { fallback?: string };
      if (data.fallback === "mailto") {
        // No email provider configured: open the visitor's mail app instead.
        const subject = encodeURIComponent(`Portfolio message from ${values.name}`);
        const body = encodeURIComponent(`${values.message}\n\n${values.name}\n${values.email}`);
        window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
        setStatus("fallback");
        return;
      }
      setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success" || status === "fallback") {
    return (
      <div role="status" className="glass rounded-2xl p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-500" aria-hidden="true" />
        <h3 className="mt-4 font-display text-xl font-semibold">{status === "success" ? "Message sent" : "Your email app should be open"}</h3>
        <p className="mt-2 text-muted">
          {status === "success"
            ? "Thanks for reaching out. I will reply soon."
            : `Send the drafted email to finish. You can also write to ${profile.email} directly.`}
        </p>
        <button
          type="button"
          onClick={() => {
            setValues({ name: "", email: "", message: "", website: "" });
            setStatus("idle");
          }}
          className="btn btn-ghost mt-6"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="glass grid gap-5 rounded-2xl p-6 sm:p-8">
      {/* Honeypot: real visitors never see or fill this field */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={update("website")} />
      </div>

      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium">Name</label>
        <input id="name" name="name" autoComplete="name" value={values.name} onChange={update("name")} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} className={fieldClass} placeholder="Your name" />
        {errors.name && <p id="name-error" className="mt-1.5 text-sm text-red-500">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium">Email</label>
        <input id="email" name="email" type="email" autoComplete="email" value={values.email} onChange={update("email")} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} className={fieldClass} placeholder="you@company.com" />
        {errors.email && <p id="email-error" className="mt-1.5 text-sm text-red-500">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">Message</label>
        <textarea id="message" name="message" rows={5} value={values.message} onChange={update("message")} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined} className={`${fieldClass} resize-y`} placeholder="Tell me about the role or project" />
        {errors.message && <p id="message-error" className="mt-1.5 text-sm text-red-500">{errors.message}</p>}
      </div>

      {status === "error" && (
        <p role="alert" className="flex items-start gap-2 rounded-xl border border-red-500/40 bg-red-500/10 p-3 text-sm">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" aria-hidden="true" />
          The message could not be sent. Try again, or email {profile.email} directly.
        </p>
      )}

      <button type="submit" disabled={status === "submitting"} className="btn btn-primary w-full disabled:opacity-70 sm:w-auto sm:justify-self-start">
        {status === "submitting" ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : <Send className="h-4 w-4" aria-hidden="true" />}
        {status === "submitting" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
