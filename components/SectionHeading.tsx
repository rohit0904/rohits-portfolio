import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  title: string;
  id?: string;
  eyebrow?: string;
  description?: string;
  /** Use "h1" once per page (the page's main heading). */
  as?: "h1" | "h2";
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({ title, id, eyebrow, description, as: Tag = "h2", align = "left", className }: SectionHeadingProps) {
  return (
    <Reveal className={cn("mb-10 max-w-2xl sm:mb-14", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <p className="mb-3 text-sm font-semibold text-brand-1">{eyebrow}</p>}
      <Tag id={id} className="font-display text-[clamp(1.75rem,4.5vw,2.75rem)] font-bold leading-tight tracking-tight">
        {title}
      </Tag>
      {description && <p className="mt-4 text-base text-muted sm:text-lg">{description}</p>}
    </Reveal>
  );
}
