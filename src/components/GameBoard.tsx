import { useState, useEffect } from 'react';
import {Family, GameState} from '@/types/game';
import { PlayerHand } from './PlayerHand';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {ToggleGroup, ToggleGroupItem} from "@/components/ui/toggle-group.tsx";
import { AnimationOverlay } from './AnimationOverlay';
import { animationConfig } from '@/config/animationConfig';
import {GameCardBack} from "@/components/GameCardBack.tsx";

interface GameBoardProps {
  gameState: GameState;
  onAskForCard: (targetPlayer: number, family: Family) => void;
  onPlayAITurn: () => void;
  onResetGame: () => void;
}

export function GameBoard({ gameState, onAskForCard, onPlayAITurn, onResetGame }: GameBoardProps) {
  const [selectedFamily, setSelectedFamily] = useState<Family>();

  const currentPlayer = gameState.players[gameState.currentPlayer];
  const otherPlayer = gameState.players[1 - gameState.currentPlayer];
  const isHumanTurn = !currentPlayer.isAI;

  // Auto-play IA turn
  useEffect(() => {
    if (currentPlayer.isAI && gameState.gamePhase === 'playing') {
      const timer = setTimeout(() => {
        onPlayAITurn();
      }, animationConfig.aiThinkingTime);
      return () => clearTimeout(timer);
    }
  }, [currentPlayer.isAI, currentPlayer.name, gameState.currentPlayer, gameState.gamePhase, onPlayAITurn]);

  const handleAskCard = () => {
    if (!selectedFamily) return;
    console.log(gameState.players[gameState.currentPlayer].cards);
    
    onAskForCard(1 - gameState.currentPlayer, selectedFamily);
    setSelectedFamily(undefined);
  };

  const handleSelectFamily = (newFamilyId: string) => {
    const family = gameState.families.find(f => f.id === newFamilyId);
    setSelectedFamily(family);
  };

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
    <div className="min-h-screen p-4 bg-background">
      <AnimationOverlay gameState={gameState} />
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
        <div className="grid grid-cols-7 gap-6">
          {/* Joueur 1 - 3 colonnes */}
          <div className="col-span-3">
            <PlayerHand
              player={gameState.players[0]}
              families={gameState.families}
              isCurrentPlayer={gameState.currentPlayer === 0}
              isMyTurn={isHumanTurn && gameState.currentPlayer === 0}
            />
          </div>

          {/* Colonne centrale - 1 colonne */}
          <div className="col-span-1 flex flex-col items-center gap-4">
            {/* Deck de cartes */}
            <GameCardBack id="deck">
              <Badge className="absolute -top-2 -right-2">
                {gameState.deck.length}
              </Badge>
            </GameCardBack>
            {/* <div className="relative w-24 h-32 bg-primary/10 rounded-lg border-2 border-primary/20 flex items-center justify-center">
              <span className="text-2xl">🎴</span>
              <Badge className="absolute -top-2 -right-2">
                {gameState.deck.length}
              </Badge>
            </div>*/}
            {/* Sélecteur de familles */}
            <ToggleGroup className="grid space-y-2 w-full" type="single" value={selectedFamily?.id ?? 'none'} onValueChange={handleSelectFamily}>
              {gameState.families.map(family => (
                <ToggleGroupItem
                  key={family.id}
                  value={family.id}
                  className="w-full p-2 rounded-md flex items-center gap-2 hover:bg-primary/10"
                  style={{ backgroundColor: family.color + '20' }}
                  disabled={!isHumanTurn || !currentPlayer.cards.find(c => family.members.find(m => m.id === c))}>
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: family.color }} />
                  <span className="text-xs truncate">{family.name}</span>
                </ToggleGroupItem>
              ))}
              <Button onClick={handleAskCard} disabled={!isHumanTurn || !selectedFamily}>Demander</Button>
            </ToggleGroup>
          </div>

          {/* Joueur 2 - 3 colonnes */}
          <div className="col-span-3">
            <PlayerHand
              player={gameState.players[1]}
              families={gameState.families}
              isCurrentPlayer={gameState.currentPlayer === 1}
              isMyTurn={isHumanTurn && gameState.currentPlayer === 1}
            />
          </div>
        </div>

        {/* Message du tour actuel */}
        {isHumanTurn && (
          <Card className="shadow-card border-2 border-accent">
            <CardHeader>
              <CardTitle className="text-center text-accent">
                À votre tour, {currentPlayer.name} !
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">
                Sélectionnez une famille dans la colonne centrale pour demander une carte à {otherPlayer.name}
              </p>
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
    </div>
  );
}