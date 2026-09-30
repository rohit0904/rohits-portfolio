import { capabilities } from "@/data/portfolio";
import { Icon } from "@/lib/icons";
import { Card } from "./Card";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";

export function AICapabilities() {
  return (
    <Section id="ai-capabilities" labelledBy="ai-title">
      <SectionHeading
        id="ai-title"
        eyebrow="AI-powered QA"
        title="Where AI makes testing faster and sharper"
        description="Practical capabilities I use every day to ship with more confidence."
      />
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((item, i) => (
          <li key={item.title} className="flex">
            <Reveal delay={(i % 3) * 0.07} className="flex w-full">
              <Card className="w-full">
                <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-brand-1/30 bg-brand-1/10 text-brand-1">
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.description}</p>
              </Card>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
