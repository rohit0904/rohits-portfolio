import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Timeline } from "@/components/Timeline";
import { seo } from "@/data/portfolio";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({ ...seo.experience, path: "/experience" });

export default function ExperiencePage() {
  return (
    <Section>
      <SectionHeading
        as="h1"
        eyebrow="Career journey"
        title="Experience"
        description="Nine years, eight organisations, from manual tester to founding QA leader. Filter by domain to explore."
      />
      <Timeline />
    </Section>
  );
}
