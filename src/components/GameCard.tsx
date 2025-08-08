import { FamilyMember, Family } from '@/types/game';
import { Card, CardContent } from '@/components/ui/card';
import * as LucideIcons from 'lucide-react';
import {GameIcon} from "@/components/GameIcon.tsx";

interface GameCardProps {
  id?: string;
  member: FamilyMember;
  family: Family;
  isInHand?: boolean;
  isSelected?: boolean;
  onClick?: () => void;
  size?: 'small' | 'medium' | 'large';
}

const sizeClasses = {
  small: 'w-16 h-20',
  medium: 'w-24 h-32',
  large: 'w-32 h-44'
};

const iconSizes = {
  small: { icon: 'w-6 h-6', name: 'text-xxs' },
  medium: { icon: 'w-6 h-6', name: 'text-xs' },
  large: { icon: 'w-8 h-8', name: 'text-base' }
};

export function GameCard({ 
  id,
  member,
  family,
  onClick,
  size = 'medium'
}: GameCardProps) {
  return (
    <Card
      id={id}
      onClick={onClick}
      className={`
        game-card border-2
        relative bg-card-background
        ${sizeClasses[size]}
      `}
      style={{
        borderColor: family.color,
      }}
    >
      <CardContent className="py-2 px-0 h-full flex flex-col items-center justify-start overflow-hidden">
          <div className="flex justify-center mb-1" style={{ color: family.color }}>
            <GameIcon iconName={member.icon} className={`${iconSizes[size].icon}`} />
          </div>
          <span
            /* @ts-expect-error unknown property */
            style={{"--tw-text-shadow-color": family.color}}
            className={`max-w-full break-words text-center font-medium ${iconSizes[size].name} text-shadow-2xs`}>
            {member.name}
          </span>
      </CardContent>
    </Card>
  );
}