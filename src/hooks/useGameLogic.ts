import { useState, useCallback } from 'react';
import { GameState, GameConfig, Player, Family } from '@/types/game';
import {COMPLETE_FAMILY_COUNT, FAMILIES_DATA} from '@/data/families';
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
    const shuffledFamilies = shuffleArray([...themeFamilies]);
    const selectedFamilies = shuffledFamilies.slice(0, config.familyCount);

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

    // Distribuer 6 cartes à chaque joueur
    for (let i = 0; i < 6; i++) {
      players[0].cards.push(shuffledCards[i]);
      players[1].cards.push(shuffledCards[i + 6]);
    }
    
    // Le reste des cartes reste dans le deck
    const deck = shuffledCards.slice(12);

    // Vérifier les familles complètes initiales
    players.forEach(player => {
      checkCompleteFamilies(player, selectedFamilies);
    });

    const newGameState: GameState = {
      config,
      families: selectedFamilies,
      players,
      currentPlayer: 0,
      gamePhase: 'playing',
      deck
    };

    setGameState(newGameState);
    
    toast({
      title: "🎮 Partie commencée !",
      description: `Thème: ${config.theme} | ${config.familyCount} familles`,
    });
  }, [toast]);

  const checkCompleteFamilies = (player: Player, families: Family[]) => {
    const completedFamilies: Family[] = [];
    families.forEach(family => {
      const playerFamilyCards = player.cards.filter(cardId =>
        family.members.some(member => member.id === cardId)
      );
      
      if (playerFamilyCards.length === COMPLETE_FAMILY_COUNT && !player.families.includes(family.id)) {
        // Famille complète trouvée !
        completedFamilies.push(family);
        player.families.push(family.id);
        // Retirer les cartes de la main
        player.cards = player.cards.filter(cardId =>
          !family.members.some(member => member.id === cardId)
        );
      }
    });
    return completedFamilies;
  };

  const askForCard = useCallback((targetPlayer: number, requestedFamily: Family) => {
    if (!gameState) return;

    const currentPlayerObj = gameState.players[gameState.currentPlayer];
    const targetPlayerObj = gameState.players[targetPlayer];

    toast({
      title: "🔍 Demande de carte",
      description: `Vous demandez une carte de la famille ${requestedFamily.name} à ${targetPlayerObj.name}.`,
    });
    
    // Vérifier si le joueur cible des cartes
    const cards = requestedFamily.members.map(m => m.id).filter(id => targetPlayerObj.cards.includes(id));
    
    if (cards.length) {
      // Transférer les cartes
      targetPlayerObj.cards = targetPlayerObj.cards.filter(id => !cards.includes(id));
      currentPlayerObj.cards.push(...cards);
      
      // Vérifier les familles complètes
      checkCompleteFamilies(currentPlayerObj, gameState.families);
      checkCompleteFamilies(targetPlayerObj, gameState.families);
      
      toast({
        title: "✅ Carte obtenue !",
        description: `${targetPlayerObj.name} avait ${cards.length} carte${cards.length > 1 ? 's' : ''} demandée${cards.length > 1 ? 's' : ''}.`,
      });
      
      // Le joueur peut rejouer
    } else {
      // Si le deck n'est pas vide, piger une carte
      if (gameState.deck.length > 0) {
        // Prendre la première carte du deck
        const drawnCard = gameState.deck[0];
        const newDeck = gameState.deck.slice(1);
        
        // Ajouter la carte à la main du joueur
        currentPlayerObj.cards.push(drawnCard);
        
        // Si le joueur humain a pigé et a gardé la carte, vider askedCards de l'IA
        const otherPlayer = gameState.players[1 - gameState.currentPlayer];
        if (!currentPlayerObj.isAI && otherPlayer.isAI && otherPlayer.askedFamilies) {
          otherPlayer.askedFamilies = [];
        }
        
        // Vérifier si cette carte complète une famille
        const completedFamilies = checkCompleteFamilies(currentPlayerObj, gameState.families);
        
        // Mettre à jour le deck
        setGameState(prev => prev ? {
          ...prev,
          deck: newDeck,
          currentPlayer: (prev.currentPlayer + 1) % 2 // Changer de joueur même si une famille est complétée
        } : null);
        
        toast({
          title: "🎴 Carte pigée !",
          description: `Vous avez pigé une carte du deck.${completedFamilies.length ? ` Vous avez complété une famille: ${completedFamilies.map(f=>f.name).join(', ')} !` : ""}`,
        });
      } else {
        toast({
          title: "❌ Pas de chance !",
          description: `${targetPlayerObj.name} n'a pas cette carte et le deck est vide.`,
        });
        
        // Changer de joueur
        setGameState(prev => prev ? {
          ...prev,
          currentPlayer: (prev.currentPlayer + 1) % 2
        } : null);
      }
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
    console.log('playAITurn called, checking conditions...');
    if (!gameState || gameState.players[gameState.currentPlayer].isAI === false) {
      console.log('Early return - no gameState or current player is not AI');
      return;
    }

    const aiPlayer = gameState.players[gameState.currentPlayer];
// Initialiser le tableau des cartes demandées si nécessaire
    if (!aiPlayer.askedFamilies) {
      aiPlayer.askedFamilies = [];
    }
    
    // IA améliorée : demander une carte en tenant compte des cartes déjà demandées
    const incompleteCards: { cardId: string; familySize: number }[] = [];
    
    gameState.families.forEach(family => {
      const aiFamilyCards = aiPlayer.cards.filter(cardId =>
        family.members.some(member => member.id === cardId)
      );
      
      if (aiFamilyCards.length > 0 && aiFamilyCards.length < COMPLETE_FAMILY_COUNT) {
        // Ajouter les cartes manquantes de cette famille
        family.members.forEach(member => {
          if (!aiPlayer.cards.includes(member.id)) {
            incompleteCards.push({ 
              cardId: member.id, 
              familySize: aiFamilyCards.length // Nombre de cartes que l'IA a déjà dans cette famille
            });
          }
        });
      }
    });
    
    if (incompleteCards.length > 0) {
      // Filtrer les cartes déjà demandées sans succès
      const notAskedCards = incompleteCards.filter(card => 
        !aiPlayer.askedFamilies.some(family =>
          family.members.some(member => member.id === card.cardId)
        )
      );
      
      let cardToAsk: string;
      
      if (notAskedCards.length > 0) {
        // Prioriser les familles où l'IA a plus de cartes (plus de chances de compléter)
        // Trier par nombre de cartes dans la famille (décroissant)
        notAskedCards.sort((a, b) => b.familySize - a.familySize);
        
        // Prendre une carte parmi celles des familles les plus complètes
        // (avec une petite part de hasard)
        const topFamilySize = notAskedCards[0].familySize;
        const topCards = notAskedCards.filter(card => card.familySize === topFamilySize);
        cardToAsk = topCards[Math.floor(Math.random() * topCards.length)].cardId;
      } else {
        // Si toutes les cartes ont déjà été demandées, en choisir une au hasard
        // mais avec une probabilité proportionnelle au nombre de cartes dans la famille
        const totalWeight = incompleteCards.reduce((sum, card) => sum + card.familySize, 0);
        let randomWeight = Math.random() * totalWeight;
        
        for (const card of incompleteCards) {
          randomWeight -= card.familySize;
          if (randomWeight <= 0) {
            cardToAsk = card.cardId;
            break;
          }
        }
        
        // Si par hasard on n'a pas choisi de carte (ne devrait pas arriver)
        if (!cardToAsk) {
          cardToAsk = incompleteCards[Math.floor(Math.random() * incompleteCards.length)].cardId;
        }
      }

      const familyToAsk = gameState.families.find(family =>
        family.members.some(member => member.id === cardToAsk)
      );
      // Ajouter la carte à la liste des cartes demandées
      aiPlayer.askedFamilies.push(familyToAsk);
      
      console.log('AI is requesting card:', cardToAsk, 'from family:', familyToAsk.name);
      setTimeout(() => {
        askForCard(1 - gameState.currentPlayer, familyToAsk);
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