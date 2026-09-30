import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { beamer } from "@/data/portfolio";
import { Icon } from "@/lib/icons";
import { Badge } from "./Badge";
import { Card } from "./Card";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function CurrentRole() {
  return (
    <Section id="current-role" labelledBy="current-role-title">
      <div className="relative overflow-hidden rounded-[2rem] border border-line/80 bg-surface/40 p-5 sm:p-8 lg:p-12">
        <div aria-hidden="true" className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-1/20 blur-3xl" />
        <Reveal>
          <div className="flex flex-wrap items-center gap-3">
            <h2 id="current-role-title" className="font-display text-[clamp(1.75rem,4.5vw,2.75rem)] font-bold leading-tight">
              Currently at <span className="gradient-text">{beamer.company}</span>
            </h2>
            <Badge variant="live">Current</Badge>
          </div>
          <p className="mt-3 text-base font-semibold sm:text-lg">{beamer.role}</p>
          <p className="text-sm text-muted">
            {beamer.meta} | {beamer.period}
          </p>
          <p className="mt-5 max-w-3xl text-base text-muted sm:text-lg">{beamer.intro}</p>
        </Reveal>

        <h3 className="mb-5 mt-12 font-display text-xl font-semibold">Roles &amp; responsibilities</h3>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {beamer.responsibilities.map((item, i) => (
            <li key={item.title} className="flex">
              <Reveal delay={(i % 3) * 0.07} className="flex w-full">
                <Card className="w-full">
                  <span className="gradient-bg mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl text-white">
                    <Icon name={item.icon} className="h-5 w-5" />
                  </span>
                  <h4 className="font-display text-lg font-semibold">{item.title}</h4>
                  <p className="mt-2 text-sm text-muted">{item.description}</p>
                </Card>
              </Reveal>
            </li>
          ))}
        </ul>

        <h3 className="mb-5 mt-12 font-display text-xl font-semibold">Key achievements</h3>
        <ul className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 lg:grid-cols-5">
          {beamer.achievements.map((item, i) => (
            <li key={item.label} className="flex">
              <Reveal delay={i * 0.06} className="flex w-full">
                <div className="glass glow-card lift flex w-full flex-col rounded-2xl p-5">
                  <Icon name={item.icon} className="mb-3 h-5 w-5 text-brand-2" />
                  <p className="gradient-text font-display text-3xl font-bold">{item.metric}</p>
                  <p className="mt-1 text-sm text-muted">{item.label}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>

        <h3 className="mb-4 mt-12 font-display text-xl font-semibold">Tech used at Beamer</h3>
        <ul className="flex flex-wrap gap-2">
          {beamer.tech.map((t) => (
            <li key={t} className="rounded-full border border-brand-1/30 bg-brand-1/10 px-3.5 py-1.5 text-sm font-medium">
              {t}
            </li>
          ))}
        </ul>

        <Link href="/experience" className="group mt-10 inline-flex min-h-11 items-center gap-2 font-semibold text-brand-1">
          See full career journey
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </Section>
  );
}
