"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { ChevronDown, Flag, MapPin } from "lucide-react";
import { domainFilters, experience, profile, type ExperienceItem } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { Badge } from "./Badge";

const COLLAPSED_COUNT = 3;

function ExperienceCard({ item }: { item: ExperienceItem }) {
  const [expanded, setExpanded] = useState(false);
  const collapsible = item.bullets.length > COLLAPSED_COUNT;
  const visible = expanded || !collapsible ? item.bullets : item.bullets.slice(0, COLLAPSED_COUNT);

  return (
    <article className="glass glow-card lift rounded-2xl p-5 sm:p-6">
      <div className="flex flex-wrap items-center gap-2">
        <h3 className="font-display text-xl font-bold">{item.company}</h3>
        {item.current && <Badge variant="live">Current</Badge>}
      </div>
      <p className="mt-1 font-semibold text-brand-1">{item.role}</p>
      <p className="mt-1 text-sm text-muted">
        {item.period} <span aria-hidden="true">|</span> {item.duration}
      </p>
      <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-muted">
        <MapPin className="h-3.5 w-3.5" aria-hidden="true" /> {item.focus}
      </p>
      <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Domains">
        {item.domains.map((d) => (
          <li key={d} className="rounded-full border border-line px-2.5 py-0.5 text-xs text-muted">
            {d}
          </li>
        ))}
      </ul>
      <ul className="mt-4 grid gap-2.5 text-sm">
        {visible.map((bullet) => (
          <li key={bullet} className="flex gap-2.5">
            <span aria-hidden="true" className="gradient-bg mt-2 h-1.5 w-1.5 shrink-0 rounded-full" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
      {collapsible && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className="mt-4 inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-brand-1"
        >
          {expanded ? "Show less" : `Show more (${item.bullets.length - COLLAPSED_COUNT})`}
          <ChevronDown className={cn("h-4 w-4 transition-transform", expanded && "rotate-180")} aria-hidden="true" />
        </button>
      )}
    </article>
  );
}

export function Timeline() {
  const [filter, setFilter] = useState<(typeof domainFilters)[number]>("All");
  const reduce = useReducedMotion();
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 75%", "end 60%"] });
  const drawn = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const items = filter === "All" ? experience : experience.filter((e) => e.domains.includes(filter));

  return (
    <div>
      <div role="group" aria-label="Filter by domain" className="mb-12 flex flex-wrap gap-2">
        {domainFilters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
            className={cn(
              "min-h-11 rounded-full border px-4 text-sm font-medium transition-colors",
              filter === f ? "gradient-bg border-transparent text-white" : "border-line bg-surface/60 text-muted hover:text-fg",
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <ol ref={listRef} className="relative grid gap-8 md:gap-10">
        {/* Base line + scroll-drawn gradient line */}
        <div aria-hidden="true" className="absolute bottom-0 left-[7px] top-0 w-0.5 -translate-x-1/2 bg-line md:left-1/2" />
        <motion.div
          aria-hidden="true"
          style={{ scaleY: reduce ? 1 : drawn }}
          className="gradient-bg absolute bottom-0 left-[7px] top-0 w-0.5 origin-top -translate-x-1/2 md:left-1/2"
        />

        <AnimatePresence mode="popLayout" initial={false}>
          {items.map((item, i) => (
            <motion.li
              key={item.id}
              layout={!reduce}
              initial={reduce ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, scale: 0.96 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative pl-9 md:grid md:grid-cols-2 md:gap-14 md:pl-0"
            >
              <span
                aria-hidden="true"
                className={cn(
                  "absolute left-[7px] top-7 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-[3px] border-bg md:left-1/2",
                  item.current ? "gradient-bg ring-4 ring-brand-1/25" : "bg-brand-1",
                )}
              />
              <div className={cn(i % 2 === 0 ? "md:col-start-1" : "md:col-start-2")}>
                <ExperienceCard item={item} />
              </div>
            </motion.li>
          ))}
        </AnimatePresence>

        {items.length === 0 && <li className="pl-9 text-muted md:pl-0">No roles in this domain yet.</li>}

        <li className="relative pl-9 md:flex md:justify-center md:pl-0">
          <span aria-hidden="true" className="absolute left-[7px] top-1/2 z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-bg bg-brand-2 md:left-1/2" />
          <div className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold md:relative md:z-20 md:bg-bg">
            <Flag className="h-4 w-4 text-brand-2" aria-hidden="true" /> Career started {profile.careerStart}
          </div>
        </li>
      </ol>
    </div>
  );
}
