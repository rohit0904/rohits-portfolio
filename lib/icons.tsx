import {
  Activity, Award, BadgeCheck, Bot, Boxes, Brain, Bug, Chrome, ClipboardCheck, Code2, Database,
  FlaskConical, Flame, Gauge, Globe, GraduationCap, HeartHandshake, Layers, LineChart, Network,
  Rocket, Send, ShieldCheck, Shuffle, Smartphone, Sparkles, Target, Terminal, Timer, Users, Workflow,
  type LucideProps,
} from "lucide-react";

// Icons that can be referenced by name from /data/portfolio.ts
export const icons = {
  Activity, Award, BadgeCheck, Bot, Boxes, Brain, Bug, Chrome, ClipboardCheck, Code2, Database,
  FlaskConical, Flame, Gauge, Globe, GraduationCap, HeartHandshake, Layers, LineChart, Network,
  Rocket, Send, ShieldCheck, Shuffle, Smartphone, Sparkles, Target, Terminal, Timer, Users, Workflow,
} as const;

export type IconName = keyof typeof icons;

export function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const Component = icons[name];
  return <Component aria-hidden="true" {...props} />;
}
