import { renderHook, act } from '@testing-library/react';
import { useGameHistory } from '../useGameHistory';

describe('useGameHistory', () => {
  it('initializes with empty history', () => {
    const { result } = renderHook(() => useGameHistory());
    
    expect(result.current.history.events).toEqual([]);
    expect(result.current.history.maxEvents).toBe(20);
  });

  it('adds ask_outcome events correctly', () => {
    const { result } = renderHook(() => useGameHistory());
    
    act(() => {
      result.current.addHistoryEvent('ask_outcome', 'Player 1', {
        targetPlayerName: 'Player 2',
        familyName: 'Animals',
        cardCount: 2,
        outcome: 'success',
        details: 'Ask for Animals, get 2 cards'
      });
    });

    expect(result.current.history.events).toHaveLength(1);
    expect(result.current.history.events[0]).toMatchObject({
      type: 'ask_outcome',
      playerName: 'Player 1',
      targetPlayerName: 'Player 2',
      familyName: 'Animals',
      cardCount: 2,
      outcome: 'success',
      details: 'Ask for Animals, get 2 cards'
    });
    expect(result.current.history.events[0].id).toBeDefined();
    expect(result.current.history.events[0].timestamp).toBeDefined();
  });

  it('adds failed ask_outcome events with draw', () => {
    const { result } = renderHook(() => useGameHistory());
    
    act(() => {
      result.current.addHistoryEvent('ask_outcome', 'Player 1', {
        targetPlayerName: 'Player 2',
        familyName: 'Vehicles',
        outcome: 'failed',
        details: 'Ask for Vehicles, none, draw from deck, got Nature'
      });
    });

    expect(result.current.history.events).toHaveLength(1);
    expect(result.current.history.events[0]).toMatchObject({
      type: 'ask_outcome',
      playerName: 'Player 1',
      targetPlayerName: 'Player 2',
      familyName: 'Vehicles',
      outcome: 'failed',
      details: 'Ask for Vehicles, none, draw from deck, got Nature'
    });
  });

  it('adds failed ask_outcome events with empty deck', () => {
    const { result } = renderHook(() => useGameHistory());
    
    act(() => {
      result.current.addHistoryEvent('ask_outcome', 'Player 1', {
        targetPlayerName: 'Player 2',
        familyName: 'Jobs',
        outcome: 'failed',
        details: 'Ask for Jobs, none, deck empty'
      });
    });

    expect(result.current.history.events).toHaveLength(1);
    expect(result.current.history.events[0]).toMatchObject({
      type: 'ask_outcome',
      playerName: 'Player 1',
      targetPlayerName: 'Player 2',
      familyName: 'Jobs',
      outcome: 'failed',
      details: 'Ask for Jobs, none, deck empty'
    });
  });

  it('adds other event types correctly', () => {
    const { result } = renderHook(() => useGameHistory());
    
    act(() => {
      result.current.addHistoryEvent('family_completed', 'Player 1', {
        familyName: 'Animals',
        details: 'Player 1 completed Animals!'
      });
    });

    act(() => {
      result.current.addHistoryEvent('empty_hand', 'Player 2', {
        outcome: 'draw',
        details: 'Player 2 drew from deck'
      });
    });

    act(() => {
      result.current.addHistoryEvent('game_ended', 'Player 1', {
        details: 'Player 1 won with 3 families!'
      });
    });

    expect(result.current.history.events).toHaveLength(3);
    expect(result.current.history.events[0].type).toBe('game_ended');
    expect(result.current.history.events[1].type).toBe('empty_hand');
    expect(result.current.history.events[2].type).toBe('family_completed');
  });

  it('maintains events in reverse chronological order (newest first)', () => {
    const { result } = renderHook(() => useGameHistory());
    
    act(() => {
      result.current.addHistoryEvent('ask_outcome', 'Player 1', {
        targetPlayerName: 'Player 2',
        familyName: 'Animals',
        outcome: 'success',
        details: 'First event'
      });
    });

    act(() => {
      result.current.addHistoryEvent('ask_outcome', 'Player 2', {
        targetPlayerName: 'Player 1',
        familyName: 'Vehicles',
        outcome: 'failed',
        details: 'Second event'
      });
    });

    expect(result.current.history.events).toHaveLength(2);
    expect(result.current.history.events[0].details).toBe('Second event');
    expect(result.current.history.events[1].details).toBe('First event');
  });

  it('limits events to maxEvents (20)', () => {
    const { result } = renderHook(() => useGameHistory());
    
    // Add 25 events
    act(() => {
      for (let i = 0; i < 25; i++) {
        result.current.addHistoryEvent('ask_outcome', `Player ${i % 2 + 1}`, {
          targetPlayerName: `Player ${(i + 1) % 2 + 1}`,
          familyName: 'Test',
          outcome: 'success',
          details: `Event ${i}`
        });
      }
    });

    expect(result.current.history.events).toHaveLength(20);
    // Should keep the most recent 20 events
    expect(result.current.history.events[0].details).toBe('Event 24');
    expect(result.current.history.events[19].details).toBe('Event 5');
  });

  it('clears history correctly', () => {
    const { result } = renderHook(() => useGameHistory());
    
    act(() => {
      result.current.addHistoryEvent('ask_outcome', 'Player 1', {
        targetPlayerName: 'Player 2',
        familyName: 'Animals',
        outcome: 'success'
      });
    });

    expect(result.current.history.events).toHaveLength(1);

    act(() => {
      result.current.clearHistory();
    });

    expect(result.current.history.events).toHaveLength(0);
  });

  it('gets recent events correctly', () => {
    const { result } = renderHook(() => useGameHistory());
    
    act(() => {
      for (let i = 0; i < 10; i++) {
        result.current.addHistoryEvent('ask_outcome', 'Player 1', {
          targetPlayerName: 'Player 2',
          familyName: 'Test',
          outcome: 'success',
          details: `Event ${i}`
        });
      }
    });

    const recent3 = result.current.getRecentEvents(3);
    expect(recent3).toHaveLength(3);
    expect(recent3[0].details).toBe('Event 9');
    expect(recent3[1].details).toBe('Event 8');
    expect(recent3[2].details).toBe('Event 7');
  });

  it('gets events by type correctly', () => {
    const { result } = renderHook(() => useGameHistory());
    
    act(() => {
      result.current.addHistoryEvent('ask_outcome', 'Player 1', {
        targetPlayerName: 'Player 2',
        familyName: 'Animals',
        outcome: 'success'
      });
      result.current.addHistoryEvent('family_completed', 'Player 1', {
        familyName: 'Animals'
      });
      result.current.addHistoryEvent('ask_outcome', 'Player 2', {
        targetPlayerName: 'Player 1',
        familyName: 'Vehicles',
        outcome: 'failed'
      });
    });

    const askEvents = result.current.getEventsByType('ask_outcome');
    const familyEvents = result.current.getEventsByType('family_completed');

    expect(askEvents).toHaveLength(2);
    expect(familyEvents).toHaveLength(1);
    expect(askEvents.every(e => e.type === 'ask_outcome')).toBe(true);
    expect(familyEvents.every(e => e.type === 'family_completed')).toBe(true);
  });

  it('gets events by player correctly', () => {
    const { result } = renderHook(() => useGameHistory());
    
    act(() => {
      result.current.addHistoryEvent('ask_outcome', 'Player 1', {
        targetPlayerName: 'Player 2',
        familyName: 'Animals',
        outcome: 'success'
      });
      result.current.addHistoryEvent('ask_outcome', 'Player 2', {
        targetPlayerName: 'Player 1',
        familyName: 'Vehicles',
        outcome: 'failed'
      });
      result.current.addHistoryEvent('family_completed', 'Player 1', {
        familyName: 'Animals'
      });
    });

    const player1Events = result.current.getEventsByPlayer('Player 1');
    const player2Events = result.current.getEventsByPlayer('Player 2');

    expect(player1Events).toHaveLength(3); // 2 as player, 1 as target
    expect(player2Events).toHaveLength(2); // 1 as player, 1 as target
  });
});