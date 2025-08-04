import { useState, useEffect } from 'react';
import { GameState, FamilyMember } from '@/types/game';
import { PlayerHand } from './PlayerHand';
import { GameCard } from './GameCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

interface GameBoardProps {
  gameState: GameState;
  onAskForCard: (targetPlayer: number, memberId: string) => void;
  onPlayAITurn: () => void;
  onResetGame: () => void;
}

export function GameBoard({ gameState, onAskForCard, onPlayAITurn, onResetGame }: GameBoardProps) {
  const [selectedCard, setSelectedCard] = useState<string>('');
  const [showCardSelection, setShowCardSelection] = useState(false);
  const [selectedFamily, setSelectedFamily] = useState('');

  const currentPlayer = gameState.players[gameState.currentPlayer];
  const otherPlayer = gameState.players[1 - gameState.currentPlayer];
  const isHumanTurn = !currentPlayer.isAI;

  // Auto-play IA turn
  useEffect(() => {
    console.log('GameBoard useEffect triggered:', {
      isAI: currentPlayer.isAI,
      gamePhase: gameState.gamePhase,
      currentPlayerIndex: gameState.currentPlayer,
      playerName: currentPlayer.name
    });
    
    if (currentPlayer.isAI && gameState.gamePhase === 'playing') {
      console.log('Triggering AI turn in 1 second...');
      const timer = setTimeout(() => {
        console.log('Calling onPlayAITurn...');
        onPlayAITurn();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [gameState.currentPlayer, gameState.gamePhase]);

  const handleAskCard = () => {
    if (!selectedCard) return;
    
    onAskForCard(1 - gameState.currentPlayer, selectedCard);
    setSelectedCard('');
    setShowCardSelection(false);
  };

  const getAvailableCardsToAsk = () => {
    const myCards = currentPlayer.cards;
    const availableCards: { member: FamilyMember; family: any }[] = [];

    // Pour chaque famille où j'ai au moins une carte
    gameState.families.forEach(family => {
      const myFamilyCards = myCards.filter(cardId =>
        family.members.some(member => member.id === cardId)
      );

      if (myFamilyCards.length > 0) {
        // Ajouter les cartes manquantes de cette famille
        family.members.forEach(member => {
          if (!myCards.includes(member.id)) {
            availableCards.push({ member, family });
          }
        });
      }
    });

    return availableCards;
  };

  const availableCards = getAvailableCardsToAsk();

  if (gameState.gamePhase === 'ended') {
    const winner = gameState.players.find(p => p.id === gameState.winner);
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-background">
        <Card className="text-center p-8 max-w-md shadow-card border-2 border-primary">
          <CardContent className="space-y-6">
            <div className="text-6xl">🎉</div>
            <CardTitle className="text-3xl text-primary">
              {winner?.name} a gagné !
            </CardTitle>
            <div className="space-y-2">
              <p className="text-muted-foreground">
                Familles complétées : {winner?.families.length}
              </p>
              <div className="flex justify-center gap-2">
                {winner?.families.map(familyId => {
                  const family = gameState.families.find(f => f.id === familyId);
                  return family ? (
                    <Badge key={familyId} style={{ backgroundColor: family.color, color: 'white' }}>
                      {family.name}
                    </Badge>
                  ) : null;
                })}
              </div>
            </div>
            <Button onClick={onResetGame} className="w-full">
              Nouvelle partie
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 bg-gradient-background">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* En-tête de jeu */}
        <Card className="shadow-card border-2 border-primary/20">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl text-primary">
                🎯 Jeu des Familles
              </CardTitle>
              <div className="flex items-center gap-4">
                <Badge variant="secondary">
                  {gameState.config.familyCount} familles
                </Badge>
                <Button variant="outline" onClick={onResetGame}>
                  Nouvelle partie
                </Button>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Zone de jeu principale */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Joueur 1 */}
          <PlayerHand
            player={gameState.players[0]}
            families={gameState.families}
            isCurrentPlayer={gameState.currentPlayer === 0}
            isMyTurn={isHumanTurn && gameState.currentPlayer === 0}
          />

          {/* Joueur 2 */}
          <PlayerHand
            player={gameState.players[1]}
            families={gameState.families}
            isCurrentPlayer={gameState.currentPlayer === 1}
            isMyTurn={isHumanTurn && gameState.currentPlayer === 1}
          />
        </div>

        {/* Actions du joueur actuel */}
        {isHumanTurn && (
          <Card className="shadow-card border-2 border-accent">
            <CardHeader>
              <CardTitle className="text-center text-accent">
                À votre tour, {currentPlayer.name} !
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground">
                Demandez une carte à {otherPlayer.name}
              </p>
              <Button
                onClick={() => setShowCardSelection(true)}
                disabled={availableCards.length === 0}
                className="bg-gradient-primary hover:scale-105 transition-all duration-300"
              >
                {availableCards.length === 0 ? 'Aucune carte à demander' : 'Demander une carte'}
              </Button>
            </CardContent>
          </Card>
        )}

        {/* IA en cours de réflexion */}
        {!isHumanTurn && (
          <Card className="shadow-card border-2 border-muted">
            <CardContent className="text-center py-8">
              <div className="text-4xl mb-4">🤖</div>
              <p className="text-muted-foreground">
                {currentPlayer.name} réfléchit...
              </p>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Dialog de sélection de carte */}
      <Dialog open={showCardSelection} onOpenChange={setShowCardSelection}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Choisissez une carte à demander</DialogTitle>
            <DialogDescription>
              Sélectionnez une carte d'une famille où vous avez déjà au moins une carte
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6">
            {gameState.families.map(family => {
              const myFamilyCards = currentPlayer.cards.filter(cardId =>
                family.members.some(member => member.id === cardId)
              );
              
              if (myFamilyCards.length === 0) return null;

              const missingCards = family.members.filter(member =>
                !currentPlayer.cards.includes(member.id)
              );

              if (missingCards.length === 0) return null;

              return (
                <div key={family.id} className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: family.color }}
                    />
                    <h4 className="font-semibold text-foreground">{family.name}</h4>
                    <Badge variant="secondary">
                      {myFamilyCards.length}/4 cartes
                    </Badge>
                  </div>
                  
                  <Button
                    variant={selectedFamily === family.id ? "default" : "outline"}
                    onClick={() => {
                      setSelectedFamily(family.id);
                      // Sélectionner automatiquement la première carte manquante
                      setSelectedCard(missingCards[0].id);
                    }}
                    className="w-full justify-start"
                  >
                    Demander une carte de cette famille
                  </Button>
                </div>
              );
            })}
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <Button
              variant="outline"
              onClick={() => {
                setShowCardSelection(false);
                setSelectedCard('');
              }}
            >
              Annuler
            </Button>
            <Button
              onClick={handleAskCard}
              disabled={!selectedCard}
              className="bg-gradient-primary"
            >
              Demander cette carte
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}