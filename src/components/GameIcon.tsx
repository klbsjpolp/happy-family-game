import * as LucideLab from '@lucide/lab';
import * as Lucide from 'lucide-react';
import {DynamicIcon, iconNames} from "lucide-react/dynamic";

type BaseIcons = typeof iconNames[number];
type LabIcons = keyof typeof LucideLab;
export type Icons = BaseIcons | LabIcons;

export function GameIcon({iconName, className}: {iconName: Icons, className?: string}) {
  if (!iconName || typeof iconName !== 'string')
    return <span className="text-destructive-foreground bg-destructive">{String(iconName)}</span>;
  const base = iconName as unknown as BaseIcons;
  if (iconNames.includes(base))
    return <DynamicIcon name={base} className={className} />
  const lowCase = iconName.toLowerCase() as unknown as BaseIcons;
  if (iconNames.includes(lowCase))
    return <DynamicIcon name={lowCase} className={className} />
  const lab = LucideLab[iconName as keyof typeof LucideLab];
  if (lab)
    return <Lucide.Icon iconNode={lab} className={className} />
  return <span className="text-destructive-foreground bg-destructive">{iconName}</span>;
}