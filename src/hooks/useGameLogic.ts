import { useState, useCallback } from 'react';
import { GameState, GameConfig, Player, Family, FamilyMember } from '@/types/game';
import { FAMILIES_DATA } from '@/data/families';
import { useToast } from '@/hooks/use-toast';

export function useGameLogic() {
  const [gameState, setGameState] = useState<GameState | null>(null);
  const { toast } = useToast();

  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const startGame = useCallback((config: GameConfig) => {
    // Sélectionner les familles selon le thème et le nombre choisi
    const themeFamilies = FAMILIES_DATA[config.theme];
    const selectedFamilies = themeFamilies.slice(0, config.familyCount);

    // Créer le deck de cartes
    const allCards: string[] = [];
    selectedFamilies.forEach(family => {
      family.members.forEach(member => {
        allCards.push(member.id);
      });
    });

    // Mélanger les cartes
    const shuffledCards = shuffleArray(allCards);

    // Créer les joueurs
    const players: Player[] = [
      {
        id: 'player1',
        name: 'Joueur 1',
        isAI: false,
        cards: [],
        families: []
      },
      {
        id: 'player2',
        name: config.gameMode === 'human-vs-ai' ? 'IA' : 'Joueur 2',
        isAI: config.gameMode === 'human-vs-ai',
        cards: [],
        families: []
      }
    ];

    // Distribuer les cartes (alternativement)
    shuffledCards.forEach((card, index) => {
      const playerIndex = index % 2;
      players[playerIndex].cards.push(card);
    });

    // Vérifier les familles complètes initiales
    players.forEach(player => {
      checkCompleteFamilies(player, selectedFamilies);
    });

    const newGameState: GameState = {
      config,
      families: selectedFamilies,
      players,
      currentPlayer: 0,
      gamePhase: 'playing'
    };

    setGameState(newGameState);
    
    toast({
      title: "🎮 Partie commencée !",
      description: `Thème: ${config.theme} | ${config.familyCount} familles`,
    });
  }, [toast]);

  const checkCompleteFamilies = (player: Player, families: Family[]) => {
    families.forEach(family => {
      const playerFamilyCards = player.cards.filter(cardId =>
        family.members.some(member => member.id === cardId)
      );
      
      if (playerFamilyCards.length === 4 && !player.families.includes(family.id)) {
        // Famille complète trouvée !
        player.families.push(family.id);
        // Retirer les cartes de la main
        player.cards = player.cards.filter(cardId =>
          !family.members.some(member => member.id === cardId)
        );
      }
    });
  };

  const askForCard = useCallback((targetPlayer: number, requestedMemberId: string) => {
    if (!gameState) return;

    const currentPlayerObj = gameState.players[gameState.currentPlayer];
    const targetPlayerObj = gameState.players[targetPlayer];
    
    // Vérifier si le joueur cible a la carte
    const hasCard = targetPlayerObj.cards.includes(requestedMemberId);
    
    if (hasCard) {
      // Transférer la carte
      targetPlayerObj.cards = targetPlayerObj.cards.filter(id => id !== requestedMemberId);
      currentPlayerObj.cards.push(requestedMemberId);
      
      // Vérifier les familles complètes
      checkCompleteFamilies(currentPlayerObj, gameState.families);
      checkCompleteFamilies(targetPlayerObj, gameState.families);
      
      toast({
        title: "✅ Carte obtenue !",
        description: `${targetPlayerObj.name} avait la carte demandée.`,
      });
      
      // Le joueur peut rejouer
    } else {
      toast({
        title: "❌ Pas de chance !",
        description: `${targetPlayerObj.name} n'a pas cette carte.`,
      });
      
      // Changer de joueur
      setGameState(prev => prev ? {
        ...prev,
        currentPlayer: (prev.currentPlayer + 1) % 2
      } : null);
    }

    // Vérifier les conditions de victoire
    const winner = gameState.players.find(player => 
      player.families.length >= Math.floor(gameState.config.familyCount / 2) + 1
    );
    
    if (winner) {
      setGameState(prev => prev ? {
        ...prev,
        gamePhase: 'ended',
        winner: winner.id
      } : null);
      
      toast({
        title: "🎉 Partie terminée !",
        description: `${winner.name} a gagné avec ${winner.families.length} familles !`,
      });
    }

    setGameState(prev => prev ? { ...prev } : null);
  }, [gameState, toast]);

  const playAITurn = useCallback(() => {
    if (!gameState || gameState.players[gameState.currentPlayer].isAI === false) return;

    const aiPlayer = gameState.players[gameState.currentPlayer];
    const humanPlayer = gameState.players[1 - gameState.currentPlayer];
    
    // IA simple : demander une carte aléatoire de ses familles incomplètes
    const incompleteCards: string[] = [];
    
    gameState.families.forEach(family => {
      const aiFamilyCards = aiPlayer.cards.filter(cardId =>
        family.members.some(member => member.id === cardId)
      );
      
      if (aiFamilyCards.length > 0 && aiFamilyCards.length < 4) {
        // Ajouter les cartes manquantes de cette famille
        family.members.forEach(member => {
          if (!aiPlayer.cards.includes(member.id)) {
            incompleteCards.push(member.id);
          }
        });
      }
    });
    
    if (incompleteCards.length > 0) {
      const randomCard = incompleteCards[Math.floor(Math.random() * incompleteCards.length)];
      console.log('AI is requesting card:', randomCard);
      setTimeout(() => {
        askForCard(1 - gameState.currentPlayer, randomCard);
      }, 1500); // Délai pour simuler la réflexion
    } else {
      // Si l'IA n'a pas de cartes à demander, passer le tour
      console.log('AI has no cards to ask, passing turn');
      setTimeout(() => {
        setGameState(prev => prev ? {
          ...prev,
          currentPlayer: (prev.currentPlayer + 1) % 2
        } : null);
      }, 1500);
    }
  }, [gameState, askForCard]);

  const resetGame = useCallback(() => {
    setGameState(null);
  }, []);

  return {
    gameState,
    startGame,
    askForCard,
    playAITurn,
    resetGame
  };
}