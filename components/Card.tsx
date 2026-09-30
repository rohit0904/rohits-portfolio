import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  interactive?: boolean;
}

export function Card({ className, interactive = true, ...props }: CardProps) {
  return (
    <div
      className={cn("glass glow-card rounded-2xl p-6", interactive && "lift", className)}
      {...props}
    />
  );
}
