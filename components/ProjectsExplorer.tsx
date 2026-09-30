"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { projectCategories, projects, type Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { ProjectCard } from "./ProjectCard";

const detailSteps = [
  { key: "problem", label: "Problem" },
  { key: "role", label: "My Role" },
  { key: "approach", label: "Approach" },
  { key: "impact", label: "Impact" },
] as const;

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
      previousFocus?.focus();
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center sm:items-center sm:p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        aria-hidden="true"
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
      />
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative max-h-[90dvh] w-full max-w-2xl overflow-y-auto rounded-t-3xl border border-line bg-bg p-6 sm:rounded-3xl sm:p-8"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-surface"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>
        <p className="text-sm font-medium text-brand-1">
          {project.company} | {project.category}
        </p>
        <h2 id="project-modal-title" className="mt-2 pr-12 font-display text-2xl font-bold leading-snug">
          {project.title}
        </h2>
        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Key results">
          {project.metrics.map((m) => (
            <li key={m} className="rounded-md bg-brand-2/10 px-2 py-1 text-xs font-medium">
              {m}
            </li>
          ))}
        </ul>
        <ol className="mt-6 grid gap-5">
          {detailSteps.map((step, i) => (
            <li key={step.key} className="relative border-l-2 border-brand-1/40 pl-5">
              <span aria-hidden="true" className="gradient-bg absolute -left-[7px] top-1.5 h-3 w-3 rounded-full" />
              <h3 className="font-display font-semibold">
                <span className="sr-only">{i + 1}. </span>
                {step.label}
              </h3>
              <p className="mt-1 text-sm text-muted">{project[step.key]}</p>
            </li>
          ))}
        </ol>
        <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="Tags">
          {project.tags.map((tag) => (
            <li key={tag} className="rounded-full border border-line px-2.5 py-0.5 text-xs text-muted">
              {tag}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

export function ProjectsExplorer() {
  const [category, setCategory] = useState<(typeof projectCategories)[number]>("All");
  const [selected, setSelected] = useState<Project | null>(null);
  const reduce = useReducedMotion();

  const list = category === "All" ? projects : projects.filter((p) => p.category === category);

  return (
    <div>
      <div role="group" aria-label="Filter by category" className="mb-10 flex flex-wrap gap-2">
        {projectCategories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCategory(c)}
            aria-pressed={category === c}
            className={cn(
              "min-h-11 rounded-full border px-4 text-sm font-medium transition-colors",
              category === c ? "gradient-bg border-transparent text-white" : "border-line bg-surface/60 text-muted hover:text-fg",
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout" initial={false}>
          {list.map((project) => (
            <motion.li
              key={project.slug}
              layout={!reduce}
              initial={reduce ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduce ? undefined : { opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className="flex"
            >
              <ProjectCard project={project} onOpen={setSelected} />
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>

      <AnimatePresence>{selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}</AnimatePresence>
    </div>
  );
}
