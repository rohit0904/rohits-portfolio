import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { experience } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";

export function CareerSnapshot() {
  return (
    <Section id="career" labelledBy="career-title">
      <SectionHeading
        id="career-title"
        eyebrow="Career snapshot"
        title="Eight organisations, one quality mindset"
        description="From government web compliance to AI-first SaaS quality leadership."
      />
      <div className="relative">
        {/* Horizontal line on desktop, vertical on mobile */}
        <div aria-hidden="true" className="absolute bottom-2 left-[7px] top-2 w-px bg-line lg:bottom-auto lg:left-0 lg:right-0 lg:top-[7px] lg:h-px lg:w-auto" />
        <ol className="grid gap-6 lg:grid-cols-8 lg:gap-3">
          {experience.map((item, i) => (
            <li key={item.id} className="relative pl-8 lg:pl-0 lg:pt-8">
              <span
                aria-hidden="true"
                className={`absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-bg lg:top-0 ${item.current ? "gradient-bg ring-4 ring-brand-1/25" : "bg-brand-1/70"}`}
              />
              <Reveal delay={i * 0.05}>
                <p className="inline-block rounded-lg border border-line bg-surface/70 px-2.5 py-1 font-display text-sm font-bold">{item.company}</p>
                <p className="mt-1.5 text-xs text-muted">{item.snapshotLabel}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
      <Link href="/experience" className="group mt-10 inline-flex min-h-11 items-center gap-2 font-semibold text-brand-1">
        View the full timeline
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </Link>
    </Section>
  );
}
