import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "brand" | "live";
}

export function Badge({ children, className, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium",
        variant === "default" && "border-line bg-surface/60 text-muted",
        variant === "brand" && "border-brand-1/40 bg-brand-1/10 text-brand-1",
        variant === "live" && "border-emerald-500/40 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
        className,
      )}
    >
      {variant === "live" && (
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-emerald-500" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
      )}
      {children}
    </span>
  );
}
