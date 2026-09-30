import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { GITHUB_URL, LINKEDIN_URL, navLinks, profile } from "@/data/portfolio";
import { isConfigured } from "@/lib/utils";

const socialClass =
  "inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-surface/60 transition-colors hover:border-brand-1/60";

export function Footer() {
  return (
    <footer className="border-t border-line/60 bg-surface/30">
      <div className="container-x grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-xl font-bold">{profile.name}</p>
          <p className="mt-2 max-w-sm text-sm text-muted">{profile.title}</p>
          <div className="mt-5 flex gap-2">
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className={socialClass}>
              <Linkedin className="h-5 w-5" aria-hidden="true" />
            </a>
            {isConfigured(GITHUB_URL) && (
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className={socialClass}>
                <Github className="h-5 w-5" aria-hidden="true" />
              </a>
            )}
            <a href={`mailto:${profile.email}`} aria-label="Send an email" className={socialClass}>
              <Mail className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>

        <nav aria-label="Footer">
          <p className="mb-3 font-display font-semibold">Explore</p>
          <ul className="grid gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="inline-flex min-h-11 items-center text-sm text-muted transition-colors hover:text-fg md:min-h-0 md:py-1">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="mb-3 font-display font-semibold">Contact</p>
          <ul className="grid gap-1 text-sm text-muted">
            <li>
              <a href={`mailto:${profile.email}`} className="inline-flex min-h-11 items-center break-all hover:text-fg md:min-h-0 md:py-1">
                {profile.email}
              </a>
            </li>
            <li>
              <a href={`tel:${profile.phoneHref}`} className="inline-flex min-h-11 items-center hover:text-fg md:min-h-0 md:py-1">
                {profile.phone}
              </a>
            </li>
            <li className="py-1">{profile.location}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line/60">
        <p className="container-x py-5 text-center text-xs text-muted">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
