import { useState, useCallback } from 'react';
import { GameState, GameConfig, Player, Family } from '@/types/game';
import {COMPLETE_FAMILY_COUNT, FAMILIES_DATA} from '@/data/families';
import { useToast } from '@/hooks/use-toast';
import { useCardAnimation } from '@/contexts/CardAnimationContext';
import { getCardPosition, getHandPosition, getDeckPosition, getFamilyCountPosition } from '@/lib/animationUtils';
import { animationConfig } from '@/config/animationConfig';

export function useGameLogic() {
  const [gameState, setGameState] = useState<GameState | null>(null);
  const { toast } = useToast();
  const { startAnimation: startCardAnimation } = useCardAnimation();

  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

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
              
              return {
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
  }, [startCardAnimation, toast]);

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
        setGameState(prev => prev ? {
          ...prev,
          players: prev.players.map((p, idx) => idx === prev.currentPlayer
            ? { ...p, cards: [...p.cards, drawnCard] }
            : p
          ),
          deck: prev.deck.slice(1)
        } : null);
        toast({
          title: 'Main vide',
          description: `${currentPlayerObj.name} pioche une carte du deck.`
        });
        return true; // Drew a card
      } else {
        // Deck is empty, skip turn
        setGameState(prev => prev ? {
          ...prev,
          currentPlayer: (prev.currentPlayer + 1) % prev.players.length
        } : null);
        toast({
          title: 'Main vide',
          description: `${currentPlayerObj.name} saute son tour (deck vide).`
        });
        return true; // Skipped turn
      }
    }
    return false; // No action needed
  }, [gameState, toast]);

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
        
        // Check for completed families after state update
        setTimeout(() => {
          if (gameState) {
            checkCompleteFamilies(gameState.players[gameState.currentPlayer], gameState.families);
            checkCompleteFamilies(gameState.players[targetPlayer], gameState.families);
          }
        }, 50);
        
        toast({
          title: "✅ Carte obtenue !",
          description: `${targetPlayerObj.name} avait ${cards.length} carte${cards.length > 1 ? 's' : ''} demandée${cards.length > 1 ? 's' : ''}.`,
        });
      }, animationConfig.stateUpdateDelay);
    } else {
      if (gameState.deck.length > 0) {
        const drawnCard = gameState.deck[0];
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
          
          // Check for completed families after state update
          setTimeout(() => {
            if (gameState) {
              const completedFamilies = checkCompleteFamilies(gameState.players[gameState.currentPlayer], gameState.families);
              toast({
                title: "🎴 Carte pigée !",
                description: `Vous avez pigé une carte du deck.${completedFamilies.length ? ` Vous avez complété une famille: ${completedFamilies.map(f=>f.name).join(', ')} !` : ""}`,
              });
            }
          }, 50);
        }, animationConfig.stateUpdateDelay);
      } else {
        toast({
          title: "❌ Pas de chance !",
          description: `${targetPlayerObj.name} n'a pas cette carte et le deck est vide.`,
        });
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
  }, [gameState, toast, startCardAnimation, checkCompleteFamilies]);

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

  }, [gameState, handleEmptyHandRule, askForCard]);

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