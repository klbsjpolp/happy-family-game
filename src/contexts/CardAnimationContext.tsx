import React, { createContext, useContext, useState } from 'react';

export type AnimationState = {
  sourcePosition: { x: number, y: number } | null;
  targetPosition: { x: number, y: number } | null;
  cardId: string | null;
  animationType: 'transfer' | 'draw' | 'complete' | null;
  isAnimating: boolean;
};

export type CardAnimationContextType = {
  animationState: AnimationState;
  startAnimation: (
    cardId: string,
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
  animationType: null,
  isAnimating: false,
};

const CardAnimationContext = createContext<CardAnimationContextType | undefined>(undefined);

export const CardAnimationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [animationState, setAnimationState] = useState<AnimationState>(initialState);

  const startAnimation = (
    cardId: string,
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

export const useCardAnimation = () => {
  const context = useContext(CardAnimationContext);
  if (context === undefined) {
    throw new Error('useCardAnimation must be used within a CardAnimationProvider');
  }
  return context;
};

