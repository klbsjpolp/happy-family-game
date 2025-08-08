import { useState, useCallback } from 'react';
import { GameState, GameConfig, Player, Family } from '@/types/game';
import {COMPLETE_FAMILY_COUNT, FAMILIES_DATA} from '@/data/families';
import { useToast } from '@/hooks/use-toast';
import { useGameHistory } from '@/hooks/useGameHistory';
import { useCardAnimation } from '@/contexts/CardAnimationContext';
import { getCardPosition, getHandPosition, getDeckPosition, getFamilyCountPosition } from '@/lib/animationUtils';
import { animationConfig } from '@/config/animationConfig';

export function useGameLogic() {
  const [gameState, setGameState] = useState<GameState | null>(null);
  const { toast } = useToast();
  const { addHistoryEvent, clearHistory, history } = useGameHistory();
  const { startAnimation: startCardAnimation } = useCardAnimation();

  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Comprehensive game end check that considers all scenarios
  const checkGameEnd = useCallback((currentGameState: GameState) => {
    if (!currentGameState || currentGameState.gamePhase === 'ended') return;

    // First, check and register any completed families in players' hands
    let stateChanged = false;
    const updatedPlayers = currentGameState.players.map(player => {
      const completedInHand = currentGameState.families.filter(family => {
        const playerFamilyCards = player.cards.filter(cardId =>
          family.members.some(member => member.id === cardId)
        );
        return playerFamilyCards.length === COMPLETE_FAMILY_COUNT && !player.families.includes(family.id);
      });

      if (completedInHand.length > 0) {
        stateChanged = true;
        const newFamilies = [...player.families, ...completedInHand.map(f => f.id)];
        const newCards = player.cards.filter(cardId =>
          !completedInHand.some(family =>
            family.members.some(member => member.id === cardId)
          )
        );

        // Show toast for completed families
        completedInHand.forEach(family => {
          toast({
            title: "🎉 Famille complétée !",
            description: `${player.name} a complété la famille ${family.name} !`,
          });
          addHistoryEvent('family_completed', player.name, {
            familyName: family.name,
            familyColor: family.color,
            isPlayerAI: player.isAI,
            details: `${player.name} a complété la famille ${family.name} !`
          });
        });

        return { ...player, families: newFamilies, cards: newCards };
      }
      return player;
    });

    // Update state if families were completed
    if (stateChanged) {
      setGameState(prev => prev ? { ...prev, players: updatedPlayers } : null);
      // Recheck game end with updated state
      setTimeout(() => checkGameEnd({ ...currentGameState, players: updatedPlayers }), 100);
      return;
    }

    // Calculate total families for each player (registered + potential in hand)
    const playerTotals = currentGameState.players.map(player => {
      const completedInHand = currentGameState.families.filter(family => {
        const playerFamilyCards = player.cards.filter(cardId =>
          family.members.some(member => member.id === cardId)
        );
        return playerFamilyCards.length === COMPLETE_FAMILY_COUNT && !player.families.includes(family.id);
      });
      return {
        player,
        totalFamilies: player.families.length + completedInHand.length
      };
    });

    const requiredFamiliesToWin = Math.floor(currentGameState.config.familyCount / 2) + 1;

    // Check for immediate winner (has enough families)
    const immediateWinner = playerTotals.find(p => p.totalFamilies >= requiredFamiliesToWin);

    if (immediateWinner) {
      setGameState(prev => prev ? {
        ...prev,
        gamePhase: 'ended',
        winner: immediateWinner.player.id
      } : null);

      toast({
        title: "🎉 Partie terminée !",
        description: `${immediateWinner.player.name} a gagné avec ${immediateWinner.totalFamilies} familles !`,
      });
      addHistoryEvent('game_ended', immediateWinner.player.name, {
        isPlayerAI: immediateWinner.player.isAI,
        details: `${immediateWinner.player.name} a gagné avec ${immediateWinner.totalFamilies} familles !`
      });
      return;
    }

    // Check if deck is empty and no more moves are possible
    if (currentGameState.deck.length === 0) {
      // Find player with most families
      const sortedPlayers = [...playerTotals].sort((a, b) => b.totalFamilies - a.totalFamilies);
      const topPlayer = sortedPlayers[0];

      // Check if there's a clear winner or if it's a tie
      const isTie = sortedPlayers.length > 1 && sortedPlayers[0].totalFamilies === sortedPlayers[1].totalFamilies;

      if (!isTie) {
        setGameState(prev => prev ? {
          ...prev,
          gamePhase: 'ended',
          winner: topPlayer.player.id
        } : null);

        toast({
          title: "🎉 Partie terminée !",
          description: `${topPlayer.player.name} a gagné avec ${topPlayer.totalFamilies} familles ! (Deck vide)`,
        });
        addHistoryEvent('game_ended', topPlayer.player.name, {
          isPlayerAI: topPlayer.player.isAI,
          details: `${topPlayer.player.name} a gagné avec ${topPlayer.totalFamilies} familles ! (Deck vide)`
        });
      } else {
        // Handle tie - could end in tie or continue based on game rules
        setGameState(prev => prev ? {
          ...prev,
          gamePhase: 'ended',
          winner: undefined // No winner in case of tie
        } : null);

        toast({
          title: "🤝 Match nul !",
          description: `Égalité avec ${topPlayer.totalFamilies} familles chacun !`,
        });
        addHistoryEvent('game_ended', 'Égalité', {
          details: `Égalité avec ${topPlayer.totalFamilies} familles chacun !`
        });
      }
    }
  }, [toast, addHistoryEvent]);

  const checkCompleteFamilies = useCallback((player: Player, families: Family[]) => {
    const completedFamilies: Family[] = [];
    
    // Check if we're in a test environment
    const isTestEnvironment = process.env.NODE_ENV === 'test' || typeof window === 'undefined';
    
    families.forEach(family => {
      const playerFamilyCards = player.cards.filter(cardId =>
        family.members.some(member => member.id === cardId)
      );
      if (playerFamilyCards.length === COMPLETE_FAMILY_COUNT && !player.families.includes(family.id)) {
        completedFamilies.push(family);
        
        if (!isTestEnvironment) {
          // Animate cards moving to family count position
          const targetPos = getFamilyCountPosition();
          family.members.forEach(member => {
            if (player.cards.includes(member.id)) {
              const sourcePos = getCardPosition(player.id === 'player1' ? 0 : 1, member.id);
              startCardAnimation(member.id, sourcePos, targetPos, 'complete');
            }
          });
          
          // Update game state after animation completes
          setTimeout(() => {
            setGameState(prev => {
              if (!prev) return null;
              
              const newState = {
                ...prev,
                players: prev.players.map(p => {
                  if (p.id === player.id) {
                    return {
                      ...p,
                      families: [...p.families, family.id],
                      cards: p.cards.filter(cardId =>
                        !family.members.some(member => member.id === cardId)
                      )
                    };
                  }
                  return p;
                })
              };
              
              // Check for game end after family completion
              setTimeout(() => checkGameEnd(newState), 100);
              
              return newState;
            });
            
            // Show completion toast
            toast({
              title: "🎉 Famille complétée !",
              description: `${player.name} a complété la famille ${family.name} !`,
            });
          }, animationConfig.cardComplete + 100);
        } else {
          // In test environment, update immediately without animation
          player.families.push(family.id);
          player.cards = player.cards.filter(cardId =>
            !family.members.some(member => member.id === cardId)
          );
        }
      }
    });
    return completedFamilies;
  }, [checkGameEnd, startCardAnimation, toast]);

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

    // Check if we're in a test environment (vitest sets NODE_ENV to 'test')
    const isTestEnvironment = process.env.NODE_ENV === 'test' || typeof window === 'undefined';
    
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
    
    // Only trigger animations in non-test environment
    if (!isTestEnvironment) {
      // Create initial state with empty hands for animation
      const initialGameState: GameState = {
        config,
        families: selectedFamilies,
        players: players.map(p => ({ ...p, cards: [] })), // Start with empty hands
        currentPlayer: 0,
        gamePhase: 'playing',
        deck: [...deck, ...players[0].cards, ...players[1].cards] // All cards start in deck
      };

      setGameState(initialGameState);
      
      // Trigger initial deal animation with proper state updates
      setTimeout(() => {
        const deckPos = getDeckPosition();
        (async () => {
          // Deal to player 0
          for (let i = 0; i < players[0].cards.length; i++) {
            const cardId = players[0].cards[i];
            const targetPos = getHandPosition(0);
            startCardAnimation(cardId, deckPos, targetPos, 'draw');
            
            // Update state to move card from deck to player hand after animation starts
            setTimeout(() => {
              setGameState(prev => prev ? {
                ...prev,
                players: prev.players.map((p, idx) => idx === 0
                  ? { ...p, cards: [...p.cards, cardId] }
                  : p
                ),
                deck: prev.deck.filter(id => id !== cardId)
              } : null);
            }, animationConfig.cardReveal / 2); // Update halfway through animation
            
            await new Promise(resolve => setTimeout(resolve, animationConfig.initialDealStagger));
          }
          
          // Deal to player 1
          for (let i = 0; i < players[1].cards.length; i++) {
            const cardId = players[1].cards[i];
            const targetPos = getHandPosition(1);
            startCardAnimation(cardId, deckPos, targetPos, 'draw');
            
            // Update state to move card from deck to player hand after animation starts
            setTimeout(() => {
              setGameState(prev => prev ? {
                ...prev,
                players: prev.players.map((p, idx) => idx === 1
                  ? { ...p, cards: [...p.cards, cardId] }
                  : p
                ),
                deck: prev.deck.filter(id => id !== cardId)
              } : null);
            }, animationConfig.cardReveal / 2); // Update halfway through animation
            
            await new Promise(resolve => setTimeout(resolve, animationConfig.initialDealStagger));
          }
        })();
      }, 100);
    }
  }, [toast, checkCompleteFamilies, startCardAnimation]);

  // Helper to handle empty hand rule
  const handleEmptyHandRule = useCallback(() => {
    if (!gameState) return false;
    const currentPlayerObj = gameState.players[gameState.currentPlayer];
    if (currentPlayerObj.cards.length === 0) {
      if (gameState.deck.length > 0) {
        // Draw one card from the deck
        const drawnCard = gameState.deck[0];
        setGameState(prev => {
          if (!prev) return null;
          const newState = {
            ...prev,
            players: prev.players.map((p, idx) => idx === prev.currentPlayer
              ? { ...p, cards: [...p.cards, drawnCard] }
              : p
            ),
            deck: prev.deck.slice(1)
          };
          // Check for game end after drawing card
          setTimeout(() => checkGameEnd(newState), 100);
          return newState;
        });
        toast({
          title: 'Main vide',
          description: `${currentPlayerObj.name} pioche une carte du deck.`
        });
        addHistoryEvent('empty_hand', currentPlayerObj.name, {
          outcome: 'draw',
          isPlayerAI: currentPlayerObj.isAI,
          details: `${currentPlayerObj.name} pioche une carte du deck.`
        });
        return true; // Drew a card
      } else {
        // Deck is empty, skip turn
        setGameState(prev => {
          if (!prev) return null;
          const newState = {
            ...prev,
            currentPlayer: (prev.currentPlayer + 1) % prev.players.length
          };
          // Check for game end when deck is empty and turn is skipped
          setTimeout(() => checkGameEnd(newState), 100);
          return newState;
        });
        toast({
          title: 'Main vide',
          description: `${currentPlayerObj.name} saute son tour (deck vide).`
        });
        addHistoryEvent('empty_hand', currentPlayerObj.name, {
          outcome: 'skip',
          isPlayerAI: currentPlayerObj.isAI,
          details: `${currentPlayerObj.name} saute son tour (deck vide).`
        });
        return true; // Skipped turn
      }
    }
    return false; // No action needed
  }, [gameState, toast, addHistoryEvent, checkGameEnd]);

  const askForCard = useCallback((targetPlayer: number, requestedFamily: Family) => {
    if (!gameState) return;
    const currentPlayerObj = gameState.players[gameState.currentPlayer];
    const targetPlayerObj = gameState.players[targetPlayer];
    toast({
      title: "🔍 Demande de carte",
      description: `Vous demandez une carte de la famille ${requestedFamily.name} à ${targetPlayerObj.name}.`,
    });
    
    const cards = requestedFamily.members.map(m => m.id).filter(id => targetPlayerObj.cards.includes(id));
    if (cards.length) {
      // Use hand position as source since individual card positions may not be reliable
      const sourcePos = getHandPosition(targetPlayer);
      const targetPos = getHandPosition(gameState.currentPlayer);
      startCardAnimation(cards[0], sourcePos, targetPos, 'transfer');
      
      // Update state after animation completes
      setTimeout(() => {
        setGameState(prev => prev ? {
          ...prev,
          players: prev.players.map((p, idx) => {
            if (idx === targetPlayer) {
              return { ...p, cards: p.cards.filter(id => !cards.includes(id)) };
            } else if (idx === gameState.currentPlayer) {
              return { ...p, cards: [...p.cards, ...cards] };
            }
            return p;
          })
        } : null);
        
        // Check for completed families and game end after state update
        setTimeout(() => {
          setGameState(prev => {
            if (prev) {
              // Check for game end with updated state
              setTimeout(() => checkGameEnd(prev), 100);
            }
            return prev;
          });
        }, 50);
        
        toast({
          title: "✅ Carte obtenue !",
          description: `${targetPlayerObj.name} avait ${cards.length} carte${cards.length > 1 ? 's' : ''} demandée${cards.length > 1 ? 's' : ''}.`,
        });
        
        // Single consolidated event for successful ask
        addHistoryEvent('ask_outcome', currentPlayerObj.name, {
          targetPlayerName: targetPlayerObj.name,
          familyName: requestedFamily.name,
          familyColor: requestedFamily.color,
          cardCount: cards.length,
          outcome: 'success',
          isPlayerAI: currentPlayerObj.isAI,
          isTargetPlayerAI: targetPlayerObj.isAI,
          details: `Ask for ${requestedFamily.name}, get ${cards.length} card${cards.length !== 1 ? 's' : ''}`
        });
      }, animationConfig.stateUpdateDelay);
    } else {
      if (gameState.deck.length > 0) {
        const drawnCard = gameState.deck[0];
        const drawnFamily = gameState.families.find(family => 
          family.members.some(member => member.id === drawnCard)
        );
        const sourcePos = getDeckPosition();
        const targetPos = getHandPosition(gameState.currentPlayer);
        startCardAnimation(drawnCard, sourcePos, targetPos, 'draw');
        
        setTimeout(() => {
          setGameState(prev => prev ? {
            ...prev,
            players: prev.players.map((p, idx) => {
              if (idx === gameState.currentPlayer) {
                return { ...p, cards: [...p.cards, drawnCard] };
              } else if (p.isAI && p.askedFamilies && !gameState.players[gameState.currentPlayer].isAI) {
                return { ...p, askedFamilies: [] };
              }
              return p;
            }),
            deck: prev.deck.slice(1),
            currentPlayer: (prev.currentPlayer + 1) % 2
          } : null);
          
          // Check for completed families and game end after state update
          setTimeout(() => {
            setGameState(prev => {
              if (prev) {
                // Check for game end with updated state
                setTimeout(() => checkGameEnd(prev), 100);
              }
              return prev;
            });
            
            toast({
              title: "🎴 Carte pigée !",
              description: `Vous avez pigé une carte du deck.`,
            });
            
            // Single consolidated event for failed ask with draw
            addHistoryEvent('ask_outcome', currentPlayerObj.name, {
              targetPlayerName: targetPlayerObj.name,
              familyName: requestedFamily.name,
              familyColor: requestedFamily.color,
              drawnFamilyName: drawnFamily?.name,
              drawnFamilyColor: drawnFamily?.color,
              outcome: 'failed',
              isPlayerAI: currentPlayerObj.isAI,
              isTargetPlayerAI: targetPlayerObj.isAI,
              details: `Ask for ${requestedFamily.name}, none, draw from deck, got ${drawnFamily?.name || 'card'}`
            });
          }, 50);
        }, animationConfig.stateUpdateDelay);
      } else {
        toast({
          title: "❌ Pas de chance !",
          description: `${targetPlayerObj.name} n'a pas cette carte et le deck est vide.`,
        });
        
        // Single consolidated event for failed ask with empty deck
        addHistoryEvent('ask_outcome', currentPlayerObj.name, {
          targetPlayerName: targetPlayerObj.name,
          familyName: requestedFamily.name,
          familyColor: requestedFamily.color,
          outcome: 'failed',
          isPlayerAI: currentPlayerObj.isAI,
          isTargetPlayerAI: targetPlayerObj.isAI,
          details: `Ask for ${requestedFamily.name}, none, deck empty`
        });
        
        setGameState(prev => {
          if (!prev) return null;
          const newState = {
            ...prev,
            currentPlayer: (prev.currentPlayer + 1) % 2
          };
          // Check for game end after turn change
          setTimeout(() => checkGameEnd(newState), 100);
          return newState;
        });
      }
    }

    // Check for game end after any card exchange
    setTimeout(() => {
      if (gameState) {
        checkGameEnd(gameState);
      }
    }, 100);
  }, [gameState, toast, addHistoryEvent, startCardAnimation, checkGameEnd]);

  // Update AI turn logic to use empty hand rule
  const playAITurn = useCallback(() => {
    if (!gameState || !gameState.players[gameState.currentPlayer].isAI) {
      console.log('Early return - no gameState or current player is not AI');
      return;
    }
    // Check empty hand rule for AI
    if (handleEmptyHandRule()) {
      return;
    }
    const aiPlayer = gameState.players[gameState.currentPlayer];
// Initialiser le tableau des cartes demandées si nécessaire
    if (!aiPlayer.askedFamilies) {
      aiPlayer.askedFamilies = [];
    }

    // IA améliorée : demander une carte en tenant compte des cartes déjà demandées
    const familiesToAsk: Family[] = [];
    
    gameState.families
      .filter(f => !aiPlayer.askedFamilies.includes(f))
      .forEach(family => {
      const aiFamilyCards = aiPlayer.cards.filter(cardId =>
        family.members.some(member => member.id === cardId)
      );
      
      if (aiFamilyCards.length > 0 && aiFamilyCards.length < COMPLETE_FAMILY_COUNT) {
        // Ajouter les cartes manquantes de cette famille
        family.members.forEach(member => {
          if (!aiPlayer.cards.includes(member.id)) {
            familiesToAsk.push(family);
          }
        });
      }
    });

    if (familiesToAsk.length === 0 && aiPlayer.askedFamilies.length > 0) {
      // Si aucune carte n'est disponible, demander une famille déjà demandée
      familiesToAsk.push(aiPlayer.askedFamilies[Math.floor(Math.random() * aiPlayer.askedFamilies.length)]);
    }
    
    if (familiesToAsk.length > 0) {
      const familyToAsk = familiesToAsk[Math.floor(Math.random() * familiesToAsk.length)];

      // Ajouter la carte à la liste des cartes demandées
      aiPlayer.askedFamilies.push(familyToAsk);
      
      console.log('AI is requesting family:', familyToAsk.name);
      setTimeout(() => {
        askForCard(1 - gameState.currentPlayer, familyToAsk);
      }, 1500); // Délai pour simuler la réflexion
    } else {
      // Si l'IA n'a pas de cartes à demander, passer le tour
      console.log('AI has no cards to ask, passing turn');
      setTimeout(() => {
        setGameState(prev => {
          if (!prev) return null;
          const newState = {
            ...prev,
            currentPlayer: (prev.currentPlayer + 1) % 2
          };
          // Check for game end after AI turn
          setTimeout(() => checkGameEnd(newState), 100);
          return newState;
        });
      }, 1500);
    }

  }, [gameState, handleEmptyHandRule, askForCard, checkGameEnd]);

  const resetGame = useCallback(() => {
    setGameState(null);
    clearHistory();
  }, [clearHistory]);

  return {
    gameState,
    startGame,
    askForCard,
    playAITurn,
    resetGame,
    history: history.events,
    clearHistory
  };
}