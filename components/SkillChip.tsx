import { Icon, type IconName } from "@/lib/icons";

export function SkillChip({ name, icon }: { name: string; icon?: IconName }) {
  return (
    <li className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-line bg-surface/60 px-3.5 py-2 text-sm font-medium transition-colors sm:min-h-0">
      {icon && <Icon name={icon} className="h-4 w-4 text-brand-1" />}
      {name}
    </li>
  );
}
