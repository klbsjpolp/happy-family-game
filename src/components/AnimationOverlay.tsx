import { useCardAnimation } from '@/contexts/CardAnimationContext';
import { AnimatedCard } from './AnimatedCard';
import {GameState} from "@/types/game.ts";

export function AnimationOverlay({ gameState }:{ gameState: GameState }) {
  const { animationState } = useCardAnimation();

  if (!animationState.isAnimating || !animationState.cardId || !gameState) {
    return null;
  }

  let cardMember;
  let cardFamily;

  for (const family of gameState.families) {
    const member = family.members.find(m => m.id === animationState.cardId);
    if (member) {
      cardMember = member;
      cardFamily = family;
      break;
    }
  }

  if (!cardMember || !cardFamily) {
    return null;
  }

  // Determine if the card should be revealed based on the drawing player
  const isDrawingPlayerAI = animationState.animationType === 'draw' 
    ? gameState.players[gameState.currentPlayer].isAI
    : false;
  
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <AnimatedCard
        member={cardMember}
        family={cardFamily}
        isRevealed={animationState.animationType !== 'draw' || !isDrawingPlayerAI}
      />
    </div>
  );
}

