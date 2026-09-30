"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import type { Stat } from "@/data/portfolio";

/** Count-up number that starts when scrolled into view. */
export function StatCounter({ value, prefix = "", suffix, label }: Stat) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setDisplay(value);
      return;
    }
    const controls = animate(0, value, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, reduce]);

  return (
    <div ref={ref} className="glass rounded-2xl p-5 text-center sm:p-6" role="group" aria-label={`${prefix}${value}${suffix} ${label}`}>
      <div aria-hidden="true" className="gradient-text font-display text-4xl font-bold tabular-nums sm:text-5xl">
        {prefix}
        {display}
        {suffix}
      </div>
      <div aria-hidden="true" className="mt-1 text-sm text-muted">
        {label}
      </div>
    </div>
  );
}
