import * as LucideLab from '@lucide/lab';
import * as Lucide from 'lucide-react';
// Import the ESM build directly to avoid CJS/ESM interop issues in Vitest/CI
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import DynamicIconModule from 'lucide-react/dist/esm/DynamicIcon.js';
import {IconNode} from "lucide-react";
// @ts-expect-error use of unknown here is intentional
const DynamicIcon = (DynamicIconModule as unknown).default ?? (DynamicIconModule as unknown);

export type Icons = string;

export function GameIcon({ iconName, className }: { iconName: Icons; className?: string }) {
  if (!iconName || typeof iconName !== 'string') {
    return <span className="text-destructive-foreground bg-destructive">{String(iconName)}</span>;
  }

  // Try Lucide Lab icons first (names are exported from @lucide/lab)
  const lab = (LucideLab as Record<string, IconNode>)[iconName];
  if (lab) {
    return <Lucide.Icon iconNode={lab} className={className} />;
  }

  // Fallback to dynamic Lucide icons (use kebab-case/lowercase name)
  const name = iconName.toLowerCase();
  const Fallback = () => (
    <span className="text-destructive-foreground bg-destructive">{iconName}</span>
  );
  return <DynamicIcon name={name} className={className} fallback={Fallback} />;
}