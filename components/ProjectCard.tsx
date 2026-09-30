import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/portfolio";

interface ProjectCardProps {
  project: Project;
  /** When provided the card is a button that opens the detail modal; otherwise it links to /projects. */
  onOpen?: (project: Project) => void;
}

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const className =
    "glass glow-card lift group flex h-full w-full flex-col rounded-2xl p-6 text-left focus-visible:outline-offset-4";

  const content = (
    <>
      <div className="flex items-start justify-between gap-3">
        <span className="rounded-full border border-brand-1/30 bg-brand-1/10 px-3 py-1 text-xs font-medium text-brand-1">{project.category}</span>
        <ArrowUpRight className="h-5 w-5 shrink-0 text-muted transition-colors group-hover:text-brand-2" aria-hidden="true" />
      </div>
      <h3 className="mt-4 font-display text-lg font-semibold leading-snug">{project.title}</h3>
      <p className="mt-1 text-xs text-muted">{project.company}</p>
      <p className="mt-3 text-sm text-muted">{project.summary}</p>
      <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Key results">
        {project.metrics.map((m) => (
          <li key={m} className="rounded-md bg-brand-2/10 px-2 py-1 text-xs font-medium text-fg">
            {m}
          </li>
        ))}
      </ul>
      <ul className="mt-auto flex flex-wrap gap-1.5 pt-5" aria-label="Tags">
        {project.tags.slice(0, 4).map((tag) => (
          <li key={tag} className="rounded-full border border-line px-2.5 py-0.5 text-xs text-muted">
            {tag}
          </li>
        ))}
      </ul>
    </>
  );

  if (onOpen) {
    return (
      <button type="button" onClick={() => onOpen(project)} aria-haspopup="dialog" className={className}>
        {content}
      </button>
    );
  }
  return (
    <Link href="/projects" className={className}>
      {content}
    </Link>
  );
}
