import type { Metadata } from "next";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Card } from "@/components/Card";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { LINKEDIN_URL, profile, seo } from "@/data/portfolio";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({ ...seo.contact, path: "/contact" });

const cards = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phoneHref}` },
  { icon: Linkedin, label: "LinkedIn", value: "Connect on LinkedIn", href: LINKEDIN_URL, external: true },
  { icon: MapPin, label: "Location", value: profile.location },
];

export default function ContactPage() {
  return (
    <Section>
      <SectionHeading
        as="h1"
        eyebrow="Contact"
        title="Let's talk quality"
        description="For Senior QA, QA Lead, AI Quality and Founding QA roles, write to me using the form or any channel below."
      />
      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-12">
        <ul className="grid content-start gap-4">
          {cards.map((card, i) => {
            const body = (
              <Card className="flex items-center gap-4 p-5">
                <span className="gradient-bg inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white">
                  <card.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm text-muted">{card.label}</span>
                  <span className="block break-words font-semibold">{card.value}</span>
                </span>
              </Card>
            );
            return (
              <li key={card.label}>
                <Reveal delay={i * 0.06}>
                  {card.href ? (
                    <a
                      href={card.href}
                      {...(card.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="block rounded-2xl"
                    >
                      {body}
                    </a>
                  ) : (
                    body
                  )}
                </Reveal>
              </li>
            );
          })}
        </ul>
        <Reveal>
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
}
