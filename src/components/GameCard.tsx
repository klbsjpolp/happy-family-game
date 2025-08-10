import { FamilyMember, Family } from '@/types/game';
import { Card, CardContent } from '@/components/ui/card';
import {GameIcon} from "@/components/GameIcon.tsx";
import { cn } from '@/lib/utils';
import {CSSProperties} from "react";

interface GameCardProps {
  id?: string;
  member: FamilyMember;
  family: Family;
  isInHand?: boolean;
  isSelected?: boolean;
  size?: 'small' | 'medium' | 'large';
}

const sizeClasses = {
  small: 'w-16 h-20',
  medium: 'w-24 h-32',
  large: 'w-32 h-44'
};

const iconSizes = {
  small: { icon: 'w-8 h-8', name: 'text-xxs' },
  medium: { icon: 'w-10 h-10', name: 'text-xs' },
  large: { icon: 'w-14 h-14', name: 'text-base' }
};

export function GameCard({ 
  id,
  member,
  family,
  size = 'medium'
}: GameCardProps) {
  return (
    <Card
      id={id}
      className={cn(
        'game-card relative overflow-hidden border-2 bg-card-background shadow-card transition-all duration-300 ease-smooth hover:shadow-hover hover:-translate-y-1',
        sizeClasses[size],
      )}
      style={{
        borderColor: family.color,
        '--family-color': family.color,
        '--tw-ring-color': family.color,
      } as CSSProperties}
    >
      <div className="absolute -top-1 -right-1 w-6 h-6 rounded-bl-full bg-(--family-color)"/>
      <CardContent className="py-2 px-0 h-full flex flex-col items-center justify-center text-center gap-1">
        <GameIcon
          iconName={member.icon}
          className={cn('drop-shadow-sm', iconSizes[size].icon, 'text-(--family-color)')}
        />
        <span
          className={cn('font-bold tracking-tight max-w-full break-words', iconSizes[size].name)}
        >
          {member.name}
        </span>
      </CardContent>
    </Card>
  );
}