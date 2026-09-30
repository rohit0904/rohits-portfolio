import type { Metadata } from "next";
import Link from "next/link";
import { Award, Target } from "lucide-react";
import { Card } from "@/components/Card";
import { ProfileImage } from "@/components/ProfileImage";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { about, profile, seo } from "@/data/portfolio";
import { Icon } from "@/lib/icons";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({ ...seo.about, path: "/about" });

export default function AboutPage() {
  return (
    <>
      <Section>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-16">
          <Reveal className="mx-auto w-full max-w-sm">
            <div className="gradient-bg rounded-[2.1rem] p-1 shadow-2xl shadow-brand-1/20">
              <ProfileImage priority sizes="(max-width: 1024px) 80vw, 352px" />
            </div>
            <p className="mt-4 text-center text-sm text-muted">{profile.location}</p>
          </Reveal>
          <div>
            <SectionHeading as="h1" eyebrow="About me" title="From manual tester to founding QA leader" />
            <div className="grid max-w-2xl gap-5 text-base text-muted sm:text-lg">
              {about.story.map((paragraph, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <p>{paragraph}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section labelledBy="education-title">
        <SectionHeading id="education-title" title="Education & Certifications" />
        <ul className="grid gap-4 md:grid-cols-3">
          {about.education.map((item, i) => (
            <li key={item.title} className="flex">
              <Reveal delay={i * 0.07} className="flex w-full">
                <Card className="w-full">
                  <span className="gradient-bg mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl text-white">
                    <Icon name={item.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted">{item.detail}</p>
                </Card>
              </Reveal>
            </li>
          ))}
        </ul>

        <h2 className="mb-5 mt-14 font-display text-2xl font-bold">Awards</h2>
        <ul className="grid gap-4 md:grid-cols-3">
          {about.awards.map((award) => (
            <li key={award.title}>
              <Card className="flex items-center gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-brand-2/40 bg-brand-2/10 text-brand-2">
                  <Award className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display font-semibold">{award.title}</h3>
                  <p className="text-sm text-muted">{award.detail}</p>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="looking-title">
        <SectionHeading id="looking-title" title="What I'm looking for" />
        <ul className="flex flex-wrap gap-3">
          {about.lookingFor.map((role) => (
            <li key={role} className="glass inline-flex min-h-11 items-center gap-2 rounded-xl px-5 py-2 font-medium">
              <Target className="h-4 w-4 text-brand-1" aria-hidden="true" /> {role}
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="values-title" className="pb-24">
        <SectionHeading id="values-title" title="How I work" />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {about.values.map((value, i) => (
            <li key={value.title} className="flex">
              <Reveal delay={(i % 3) * 0.07} className="flex w-full">
                <Card className="w-full">
                  <Icon name={value.icon} className="mb-3 h-6 w-6 text-brand-2" />
                  <h3 className="font-display text-lg font-semibold">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted">{value.description}</p>
                </Card>
              </Reveal>
            </li>
          ))}
        </ul>
        <Reveal className="mt-12">
          <Link href="/contact" className="btn btn-primary">
            Get in touch
          </Link>
        </Reveal>
      </Section>
    </>
  );
}
