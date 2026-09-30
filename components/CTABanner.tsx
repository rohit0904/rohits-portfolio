import { Linkedin, Mail } from "lucide-react";
import { LINKEDIN_URL, cta, profile } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function CTABanner() {
  return (
    <Section id="cta" labelledBy="cta-title" className="pb-20">
      <Reveal>
        <div className="gradient-bg relative overflow-hidden rounded-[2rem] p-8 text-center text-white sm:p-12 lg:p-16">
          <div aria-hidden="true" className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/15 blur-3xl" />
          <h2 id="cta-title" className="relative font-display text-[clamp(1.75rem,5vw,3rem)] font-bold leading-tight">
            {cta.title}
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-base text-white/90 sm:text-lg">{cta.description}</p>
          <div className="relative mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <a href={`mailto:${profile.email}`} className="btn bg-white text-slate-900 hover:bg-white/90">
              <Mail className="h-4 w-4" aria-hidden="true" /> {profile.email}
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="btn border border-white/60 text-white hover:bg-white/10">
              <Linkedin className="h-4 w-4" aria-hidden="true" /> Connect on LinkedIn
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
