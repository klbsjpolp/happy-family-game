import { Player, Family, FamilyMember } from '@/types/game';
import { GameCard } from './GameCard';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface PlayerHandProps {
  player: Player;
  families: Family[];
  isCurrentPlayer: boolean;
  isMyTurn?: boolean;
  onCardSelect?: (memberId: string) => void;
  selectedCard?: string;
}

export function PlayerHand({ 
  player, 
  families, 
  isCurrentPlayer, 
  isMyTurn = false,
  onCardSelect,
  selectedCard 
}: PlayerHandProps) {
  // Pour l'IA, ne pas révéler les cartes - juste afficher des cartes face cachée
  if (player.isAI) {
    return (
      <Card className={`
        border-2 transition-all duration-300
        ${isCurrentPlayer ? 'border-primary shadow-glow bg-primary/5' : 'border-border'}
        ${isMyTurn ? 'ring-2 ring-accent' : ''}
      `}>
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2 text-lg">
              {player.isAI ? '🤖' : '👤'} {player.name}
              {isCurrentPlayer && (
                <Badge variant="default" className="bg-primary">À son tour !</Badge>
              )}
            </CardTitle>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Cartes: {player.cards.length}</span>
              <span>Familles: {player.families.length}</span>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          {player.cards.length === 0 ? (
            <div className="text-center text-muted-foreground py-8">
              Aucune carte
            </div>
          ) : (
            <div className="flex gap-1 flex-wrap justify-center">
              {player.cards.map((_, index) => (
                <div
                  key={index}
                  className="w-12 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-lg border-2 border-primary/20 flex items-center justify-center text-white font-bold text-xs shadow-md"
                >
                  🎴
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    );
  }

  // Organiser les cartes par famille pour les joueurs humains
  const cardsByFamily = player.cards.reduce((acc, cardId) => {
    for (const family of families) {
      const member = family.members.find(m => m.id === cardId);
      if (member) {
        if (!acc[family.id]) {
          acc[family.id] = { family, members: [] };
        }
        acc[family.id].members.push(member);
        break;
      }
    }
    return acc;
  }, {} as Record<string, { family: Family; members: FamilyMember[] }>);

  return (
    <Card className={`
      border-2 transition-all duration-300
      ${isCurrentPlayer ? 'border-primary shadow-glow bg-primary/5' : 'border-border'}
      ${isMyTurn ? 'ring-2 ring-accent' : ''}
    `}>
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-lg">
            {player.isAI ? '🤖' : '👤'} {player.name}
            {isCurrentPlayer && (
              <Badge variant="default" className="bg-primary">À vous !</Badge>
            )}
          </CardTitle>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Cartes: {player.cards.length}</span>
            <span>Familles: {player.families.length}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        {Object.keys(cardsByFamily).length === 0 ? (
          <div className="text-center text-muted-foreground py-8">
            Aucune carte
          </div>
        ) : (
          <div className="space-y-4">
            {Object.entries(cardsByFamily).map(([familyId, { family, members }]) => (
              <div key={familyId} className="space-y-2">
                <div className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: family.color }}
                  />
                  <span className="text-sm font-medium text-foreground">
                    {family.name} ({members.length}/4)
                  </span>
                  {members.length === 4 && (
                    <Badge variant="secondary" className="text-xs">Complète !</Badge>
                  )}
                </div>
                <div className="flex gap-2 flex-wrap">
                  {members.map((member) => (
                    <GameCard
                      key={member.id}
                      member={member}
                      family={family}
                      size="small"
                      isInHand
                      isSelected={selectedCard === member.id}
                      onClick={() => onCardSelect?.(member.id)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}