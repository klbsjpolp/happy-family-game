import {Player, Family, FamilyMember} from '@/types/game';
import {GameCard} from './GameCard';
import {Card, CardHeader, CardTitle, CardContent} from '@/components/ui/card';
import {Badge} from '@/components/ui/badge';
import {COMPLETE_FAMILY_COUNT} from "@/data/families.ts";
import {GameCardBack} from "@/components/GameCardBack.tsx";
import {Button} from "@/components/ui/button.tsx";

function Header({ player, isCurrentPlayer, isMyTurn }: { player: Player, isCurrentPlayer: boolean, isMyTurn: boolean }) {
  return <CardHeader className="pb-4">
  <div className="flex items-center justify-between">
    <CardTitle className="flex items-center gap-2 text-lg">
      {player.isAI ? '🤖' : '👤'} {player.name}
      {isCurrentPlayer && (
        <Badge variant="default" className="bg-primary">{isMyTurn ? 'À vous !' : 'À son tour !'}</Badge>
      )}
    </CardTitle>
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <span>Familles complétées: {player.families.length}</span>
    </div>
  </div>
</CardHeader>
}

interface PlayerHandProps {
  player: Player,
  families: Family[],
  isCurrentPlayer: boolean,
  isMyTurn?: boolean,
  askForCard: (f: Family) => void
}

export function PlayerHand({
                             player,
                             families,
                             isCurrentPlayer,
                             isMyTurn = false,
                             askForCard
                           }: PlayerHandProps) {
  // Pour l'IA, ne pas révéler les cartes - juste afficher des cartes face cachée
  if (player.isAI) {
    return (
      <Card id={`player-hand-${player.id === 'player1' ? 0 : 1}`}
            className={`
        border-2 transition-all duration-300
        ${isCurrentPlayer ? 'border-primary shadow-glow bg-primary/5' : 'border-border'}
        ${isMyTurn ? 'ring-2 ring-accent' : ''}
      `}>
        <Header player={player} isCurrentPlayer={isCurrentPlayer} isMyTurn={isMyTurn} />
        <CardContent>
          {player.cards.length === 0 ? (
            <div className="text-center text-muted-foreground py-8">
              Aucune carte
            </div>
          ) : (
            <div className="flex gap-1 flex-wrap justify-center">
              {player.cards.map((id, index) => (
                <GameCardBack key={index} id={id}/>
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
          acc[family.id] = {family, members: []};
        }
        acc[family.id].members.push(member);
        break;
      }
    }
    return acc;
  }, {} as Record<string, { family: Family; members: FamilyMember[] }>);

  return (
    <Card id={`player-hand-${player.id === 'player1' ? 0 : 1}`}
          className={`
      border-2 transition-all duration-300
      ${isCurrentPlayer ? 'border-primary shadow-glow bg-primary/5' : 'border-border'}
      ${isMyTurn ? 'ring-2 ring-accent' : ''}
    `}
    >
      <Header player={player} isCurrentPlayer={isCurrentPlayer} isMyTurn={isMyTurn} />
      <CardContent>
        {Object.keys(cardsByFamily).length === 0 ? (
          <div className="text-center text-muted-foreground py-8">
            Aucune carte
          </div>
        ) : (
          <div className="space-y-4">
            {families
              .map(f => [f.id, cardsByFamily[f.id]] as const)
              .filter(([, value]) => value !== undefined)
              .map(([familyId, {family, members}]) => (
                <div key={familyId} className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{backgroundColor: family.color}}
                    />
                    <span className="text-sm font-medium text-foreground">
                      {family.name} ({members.length}/{COMPLETE_FAMILY_COUNT})
                    </span>
                    {members.length === COMPLETE_FAMILY_COUNT && (
                      <Badge variant="secondary" className="text-xs">Complète !</Badge>
                    )}
                    <Button
                      size="xs"
                      className="ml-auto"
                      disabled={!isCurrentPlayer || members.length === COMPLETE_FAMILY_COUNT}
                      onClick={() => askForCard(family)}
                    >Demander</Button>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {members.map((member) => (
                      <GameCard
                        key={member.id}
                        id={`card-${member.id}`}
                        member={member}
                        family={family}
                        size="small"
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