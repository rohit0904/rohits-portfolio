import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/portfolio";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);
  return (
    <Section id="featured-projects" labelledBy="featured-title">
      <SectionHeading id="featured-title" eyebrow="Selected work" title="Featured projects" description="Launches, migrations and AI frameworks where quality made the difference." />
      <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((project, i) => (
          <li key={project.slug} className="flex">
            <Reveal delay={i * 0.08} className="flex w-full">
              <ProjectCard project={project} />
            </Reveal>
          </li>
        ))}
      </ul>
      <Reveal className="mt-10">
        <Link href="/projects" className="btn btn-primary">
          View all projects <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </Reveal>
    </Section>
  );
}
