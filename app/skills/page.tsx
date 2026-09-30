import type { Metadata } from "next";
import { Card } from "@/components/Card";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillChip } from "@/components/SkillChip";
import { exploring, seo, skillCategories } from "@/data/portfolio";
import { Icon } from "@/lib/icons";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({ ...seo.skills, path: "/skills" });

export default function SkillsPage() {
  return (
    <Section>
      <SectionHeading
        as="h1"
        eyebrow="Toolbox"
        title="Tools & Technologies"
        description="The AI tools, automation frameworks and practices I use to ship quality."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {skillCategories.map((category, i) => (
          <Reveal key={category.id} delay={(i % 2) * 0.08} className="flex">
            <Card className="w-full" aria-labelledby={`skills-${category.id}`}>
              <div className="mb-5 flex items-center gap-3">
                <span className="gradient-bg inline-flex h-11 w-11 items-center justify-center rounded-xl text-white">
                  <Icon name={category.icon} className="h-5 w-5" />
                </span>
                <h2 id={`skills-${category.id}`} className="font-display text-xl font-semibold">
                  {category.title}
                </h2>
              </div>
              <ul className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <SkillChip key={skill.name} {...skill} />
                ))}
              </ul>
            </Card>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10">
        <div className="relative overflow-hidden rounded-2xl border border-brand-2/30 bg-brand-2/5 p-6 sm:p-8">
          <h2 className="font-display text-xl font-semibold">Currently exploring: AI testing focus</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {exploring.map((item) => (
              <li key={item} className="inline-flex items-center gap-2 rounded-full border border-brand-2/40 bg-surface/70 px-4 py-2 text-sm font-medium">
                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-brand-2" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
