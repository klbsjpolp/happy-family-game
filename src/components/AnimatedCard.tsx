import { motion, AnimatePresence } from 'framer-motion';
import { useCardAnimation } from '@/contexts/CardAnimationContext';
import { GameCard } from './GameCard';
import { Family, FamilyMember } from '@/types/game';
import { useEffect } from 'react';
import { animationConfig } from '@/config/animationConfig';
import {GameCardBack} from "@/components/GameCardBack.tsx";

interface AnimatedCardProps {
  member: FamilyMember;
  family: Family;
  size?: 'small' | 'medium' | 'large';
  isRevealed?: boolean;
}

export function AnimatedCard({ member, family, size = 'medium', isRevealed = true }: AnimatedCardProps) {
  const { animationState, endAnimation } = useCardAnimation();
  const isAnimating = animationState.isAnimating && animationState.cardId === member.id;

  useEffect(() => {
    if (isAnimating) {
      // End animation after it completes - use the appropriate duration based on animation type
      const duration = animationState.animationType === 'complete'
        ? animationConfig.cardComplete
        : animationState.animationType === 'draw'
          ? animationConfig.cardReveal
          : animationConfig.cardTransfer;

      const timer = setTimeout(() => {
        endAnimation();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isAnimating, endAnimation, animationState.animationType]);

  if (!isAnimating) {
    return null;
  }

  return (
    <AnimatePresence>
      {isAnimating && (
        <motion.div
          initial={{
            position: 'fixed',
            zIndex: 100,
            x: animationState.sourcePosition?.x,
            y: animationState.sourcePosition?.y,
            opacity: 1
          }}
          animate={{
            x: animationState.targetPosition?.x,
            y: animationState.targetPosition?.y,
            opacity: animationState.animationType === 'complete' ? 0 : 1,
            scale: animationState.animationType === 'complete' ? 0.5 : 1
          }}
          exit={{ opacity: 0 }}
          transition={{
            duration: animationState.animationType === 'complete'
              ? animationConfig.cardComplete / 1000
              : animationState.animationType === 'draw'
                ? animationConfig.cardReveal / 1000
                : animationConfig.cardTransfer / 1000,
            type: 'spring',
            stiffness: 100
          }}
          style={{
            transformOrigin: 'center center',
            pointerEvents: 'none'
          }}
        >
          {isRevealed ? (
            <GameCard
              member={member}
              family={family}
              size={size}
            />
          ) : (
            <GameCardBack id={member.id} />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

