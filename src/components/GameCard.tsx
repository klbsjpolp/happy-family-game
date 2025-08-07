import { FamilyMember, Family } from '@/types/game';
import { Card, CardContent } from '@/components/ui/card';

interface GameCardProps {
  id?: string;
  member: FamilyMember;
  family: Family;
  isInHand?: boolean;
  isSelected?: boolean;
  onClick?: () => void;
  size?: 'small' | 'medium' | 'large';
}

export function GameCard({ 
  id,
  member,
  family,
  onClick,
  size = 'medium'
}: GameCardProps) {
  const sizeClasses = {
    small: 'w-16 h-20',
    medium: 'w-24 h-32',
    large: 'w-32 h-44'
  };

  const textSizes = {
    small: { emoji: 'text-lg', name: 'text-xs', desc: 'text-xs' },
    medium: { emoji: 'text-2xl', name: 'text-sm', desc: 'text-xs' },
    large: { emoji: 'text-4xl', name: 'text-base', desc: 'text-sm' }
  };

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
      <CardContent className="p-2 h-full flex flex-col items-center justify-between">
        <div className="text-center">
          <span className={`block ${textSizes[size].emoji}`}>{member.emoji}</span>
          <span className={`block font-medium ${textSizes[size].name}`} style={{ color: family.color }}>
            {member.name}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}