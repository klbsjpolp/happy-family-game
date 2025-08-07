import { useState, useCallback } from 'react';
import { HistoryEvent, HistoryEventType, GameHistory } from '@/types/history.tsx';

const MAX_HISTORY_EVENTS = 20; // Keep last 20 events for space efficiency

export function useGameHistory() {
  const [history, setHistory] = useState<GameHistory>({
    events: [],
    maxEvents: MAX_HISTORY_EVENTS
  });

  const addHistoryEvent = useCallback((
    type: HistoryEventType,
    playerName: string,
    options?: {
      targetPlayerName?: string;
      familyName?: string;
      familyColor?: string;
      isPlayerAI?: boolean,
      isTargetPlayerAI?: boolean,
      drawnFamilyName?: string;
      drawnFamilyColor?: string;
      cardCount?: number;
      outcome?: 'success' | 'failed' | 'draw' | 'skip';
      details?: string;
    }
  ) => {
    const event: HistoryEvent = {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      type,
      timestamp: Date.now(),
      playerName,
      ...options
    };

    setHistory(prev => ({
      ...prev,
      events: [event, ...prev.events].slice(0, prev.maxEvents)
    }));

    return event;
  }, []);

  const clearHistory = useCallback(() => {
    setHistory(prev => ({
      ...prev,
      events: []
    }));
  }, []);

  const getRecentEvents = useCallback((count: number = 5) => {
    return history.events.slice(0, count);
  }, [history.events]);

  const getEventsByType = useCallback((type: HistoryEventType) => {
    return history.events.filter(event => event.type === type);
  }, [history.events]);

  const getEventsByPlayer = useCallback((playerName: string) => {
    return history.events.filter(event => 
      event.playerName === playerName || event.targetPlayerName === playerName
    );
  }, [history.events]);

  return {
    history,
    addHistoryEvent,
    clearHistory,
    getRecentEvents,
    getEventsByType,
    getEventsByPlayer
  };
}