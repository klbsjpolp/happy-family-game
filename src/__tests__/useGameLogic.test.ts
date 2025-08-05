import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useGameLogic } from '../hooks/useGameLogic';
import {GameConfig} from "@/types/game.ts";

// Mock dependencies
vi.mock('../hooks/use-toast', () => ({
  useToast: () => ({
    toast: vi.fn()
  })
}));

vi.mock('../contexts/CardAnimationContext', () => ({
  useCardAnimation: () => ({
    startAnimation: vi.fn()
  })
}));

// Mock setTimeout to make tests run faster
vi.useFakeTimers();

// Mock Math.random to make tests deterministic
const mockRandom = vi.spyOn(Math, 'random');
mockRandom.mockImplementation(() => 0.5);

describe('useGameLogic', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should initialize with null gameState', () => {
    const { result } = renderHook(() => useGameLogic());
    expect(result.current.gameState).toBeNull();
  });

  it('should start a game with the provided configuration', () => {
    const { result } = renderHook(() => useGameLogic());
    
    const gameConfig: GameConfig = {
      theme: 'animals',
      familyCount: 4,
      gameMode: 'human-vs-ai'
    };
    
    act(() => {
      result.current.startGame(gameConfig);
    });
    
    expect(result.current.gameState).not.toBeNull();
    expect(result.current.gameState?.config).toEqual(gameConfig);
    expect(result.current.gameState?.players.length).toBe(2);
    expect(result.current.gameState?.players[0].cards.length).toBe(6);
    expect(result.current.gameState?.players[1].cards.length).toBe(6);
    expect(result.current.gameState?.currentPlayer).toBe(0);
    expect(result.current.gameState?.gamePhase).toBe('playing');
  });

  it('should reset the game state', () => {
    const { result } = renderHook(() => useGameLogic());
    
    act(() => {
      result.current.startGame({
        theme: 'animals',
        familyCount: 4,
        gameMode: 'human-vs-ai'
      });
    });
    
    expect(result.current.gameState).not.toBeNull();
    
    act(() => {
      result.current.resetGame();
    });
    
    expect(result.current.gameState).toBeNull();
  });

  it('should handle asking for a card when target player has the card', () => {
    const { result } = renderHook(() => useGameLogic());
    
    // Start game
    act(() => {
      result.current.startGame({
        theme: 'animals',
        familyCount: 4,
        gameMode: 'human-vs-ai'
      });
    });

    const targetFamily = result.current.gameState?.families[0];
    
    // Setup a controlled scenario
    act(() => {
      // Put one card for the target family in each player hand
      if (result.current.gameState) {
        result.current.gameState.players[0].cards = 
          result.current.gameState.players[0].cards.filter(id => !targetFamily.members.some(member => member.id === id));
        result.current.gameState.players[0].cards.push(targetFamily!.members[0].id);
        result.current.gameState.players[1].cards =
          result.current.gameState.players[1].cards.filter(id => !targetFamily.members.some(member => member.id === id));
        result.current.gameState.players[1].cards.push(targetFamily!.members[1].id);
      }
    });

    const initialPlayer0CardCount = result.current.gameState?.players[0].cards.length || 0;
    const initialPlayer1CardCount = result.current.gameState?.players[1].cards.length || 0;
    
    // Ask for the card
    act(() => {
      if (targetFamily) {
        result.current.askForCard(1, targetFamily);
        vi.runAllTimers(); // Run all timers to process the setTimeout
      }
    });
    
    // Check that the card was transferred
    expect(result.current.gameState?.players[0].cards.length).toBeGreaterThan(initialPlayer0CardCount);
    expect(result.current.gameState?.players[1].cards.length).toBeLessThan(initialPlayer1CardCount);
  });

  it('should handle AI turn', () => {
    const { result } = renderHook(() => useGameLogic());
    
    // Start game with AI
    act(() => {
      result.current.startGame({
        theme: 'animals',
        familyCount: 4,
        gameMode: 'human-vs-ai'
      });
      
      // Set current player to AI
      if (result.current.gameState) {
        result.current.gameState.currentPlayer = 1;
      }
    });
    
    // Trigger AI turn
    act(() => {
      result.current.playAITurn();
      vi.runAllTimers(); // Run all timers to process the setTimeout
    });
    
    // AI should have made a move
    expect(result.current.gameState?.currentPlayer).toBe(0); // Should be back to player 0
  });
});