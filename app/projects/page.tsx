import type { Metadata } from "next";
import { ProjectsExplorer } from "@/components/ProjectsExplorer";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { seo } from "@/data/portfolio";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({ ...seo.projects, path: "/projects" });

export default function ProjectsPage() {
  return (
    <Section>
      <SectionHeading
        as="h1"
        eyebrow="Selected work"
        title="Projects"
        description="Select a project to see the problem, my role, the approach and the impact."
      />
      <ProjectsExplorer />
    </Section>
  );
}
