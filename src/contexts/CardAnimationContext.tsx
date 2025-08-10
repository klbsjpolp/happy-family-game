import React, {useState} from 'react';
import { CardAnimationContext } from "./useCardAnimation";

export type AnimationState = {
  sourcePosition: { x: number, y: number } | null;
  targetPosition: { x: number, y: number } | null;
  cardId: string | null;
  animationType: 'transfer' | 'draw' | 'complete' | null;
  animateForAI: boolean;
  isAnimating: boolean;
};

export type CardAnimationContextType = {
  animationState: AnimationState;
  startAnimation: (
    cardId: string,
    animateForAI: boolean,
    sourcePos: { x: number, y: number },
    targetPos: { x: number, y: number },
    type: 'transfer' | 'draw' | 'complete'
  ) => void;
  endAnimation: () => void;
};

const initialState: AnimationState = {
  sourcePosition: null,
  targetPosition: null,
  cardId: null,
  animateForAI: false,
  animationType: null,
  isAnimating: false,
};

export const CardAnimationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [animationState, setAnimationState] = useState<AnimationState>(initialState);

  const startAnimation = (
    cardId: string,
    animateForAI: boolean,
    sourcePos: { x: number, y: number },
    targetPos: { x: number, y: number },
    type: 'transfer' | 'draw' | 'complete'
  ) => {
    setAnimationState({
      sourcePosition: sourcePos,
      targetPosition: targetPos,
      cardId,
      animationType: type,
      isAnimating: true,
      animateForAI,
    });
  };

  const endAnimation = () => {
    setAnimationState(initialState);
  };

  return (
    <CardAnimationContext.Provider value={{ animationState, startAnimation, endAnimation }}>
      {children}
    </CardAnimationContext.Provider>
  );
};

