import {createContext, useContext} from "react";
import {CardAnimationContextType} from "@/contexts/CardAnimationContext.tsx";

export const CardAnimationContext = createContext<CardAnimationContextType | undefined>(undefined);

export const useCardAnimation = () => {
  const context = useContext(CardAnimationContext);
  if (context === undefined) {
    throw new Error('useCardAnimation must be used within a CardAnimationProvider');
  }
  return context;
};