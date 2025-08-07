import {useCallback, useState} from 'react';
import { GameSetup } from '@/components/GameSetup';
import { GameBoard } from '@/components/GameBoard';
import { useGameLogic } from '@/hooks/useGameLogic';
import {GameConfig, Theme} from '@/types/game';

const Index = () => {
  const { gameState, startGame, askForCard, playAITurn, resetGame } = useGameLogic();
  const [theme, setTheme] = useState<Theme>('original');

  const applyTheme = useCallback((theme: Theme) => {
    document.body.setAttribute('data-theme', theme);
  }, [])

  const onStartGame = useCallback((config: GameConfig) => {
    applyTheme(config.theme)
    startGame(config)
  }, [startGame, applyTheme])

  if (!gameState) {
    return <GameSetup onStartGame={onStartGame} theme={theme} setTheme={t => {
      applyTheme(t);
      setTheme(t);
    }} />;
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
