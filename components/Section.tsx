import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  /** Accessible name for the section landmark (use when there is no visible heading id). */
  labelledBy?: string;
}

export function Section({ id, className, children, labelledBy }: SectionProps) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={cn("relative py-16 sm:py-20 lg:py-24", className)}>
      <div className="container-x">{children}</div>
    </section>
  );
}
