import { useState, useEffect } from 'react';
import { GameSetup } from '@/components/GameSetup';
import { GameBoard } from '@/components/GameBoard';
import { useGameLogic } from '@/hooks/useGameLogic';
import { THEMES } from '@/types/game';

const Index = () => {
  const { gameState, startGame, askForCard, playAITurn, resetGame } = useGameLogic();
  const [currentTheme, setCurrentTheme] = useState('animals');

  // Appliquer le thème à l'élément body
  useEffect(() => {
    if (gameState) {
      setCurrentTheme(gameState.config.theme);
      document.body.className = THEMES[gameState.config.theme].className;
    } else {
      document.body.className = THEMES[currentTheme as keyof typeof THEMES].className;
    }
    
    return () => {
      document.body.className = '';
    };
  }, [gameState, currentTheme]);

  if (!gameState) {
    return <GameSetup onStartGame={startGame} />;
  }

  return (
    <GameBoard
      gameState={gameState}
      onAskForCard={askForCard}
      onPlayAITurn={playAITurn}
      onResetGame={resetGame}
    />
  );
};

export default Index;
