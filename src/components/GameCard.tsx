import { FamilyMember, Family } from '@/types/game';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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
  isInHand = false,
  isSelected = false,
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
      className={`
        ${sizeClasses[size]} 
        cursor-pointer card-hover relative overflow-hidden
        ${isSelected ? 'ring-4 ring-primary shadow-glow' : ''}
        ${isInHand ? 'hover:scale-110' : 'hover:scale-105'}
        transition-all duration-300 border-2
      `}
      style={{ borderColor: family.color }}
      onClick={onClick}
    >
      <CardContent className="p-2 h-full flex flex-col items-center justify-between relative">
        {/* Badge famille */}
        <Badge 
          className="absolute -top-1 -right-1 text-xs px-1 py-0 h-5"
          style={{ backgroundColor: family.color, color: 'white' }}
        >
          {family.name.split(' ')[0]}
        </Badge>

        {/* Emoji principal */}
        <div className={`${textSizes[size].emoji} mt-2`}>
          {member.emoji}
        </div>

        {/* Nom */}
        <div className="text-center flex-1 flex items-center">
          <h4 className={`${textSizes[size].name} font-semibold text-foreground leading-tight`}>
            {member.name}
          </h4>
        </div>

        {/* Description (pour les grandes cartes) */}
        {size === 'large' && (
          <p className={`${textSizes[size].desc} text-muted-foreground text-center leading-tight`}>
            {member.description}
          </p>
        )}

        {/* Effet de sélection */}
        {isSelected && (
          <div className="absolute inset-0 bg-primary/20 rounded-lg animate-pulse" />
        )}
      </CardContent>
    </Card>
  );
}