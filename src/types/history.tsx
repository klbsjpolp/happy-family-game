export type HistoryEventType =
  | 'ask_outcome'
  | 'empty_hand'
  | 'family_completed'
  | 'game_ended';

export interface HistoryEvent {
  id: string;
  type: HistoryEventType;
  timestamp: number;
  playerName: string;
  targetPlayerName?: string;
  familyName?: string;
  familyColor?: string;
  familyEmoji?: string;
  drawnFamilyName?: string;
  drawnFamilyColor?: string;
  drawnFamilyEmoji?: string;
  cardCount?: number;
  outcome?: 'success' | 'failed' | 'draw' | 'skip';
  isPlayerAI?: boolean;
  isTargetPlayerAI?: boolean;
  details?: string;
}

export interface GameHistory {
  events: HistoryEvent[];
  maxEvents: number;
}

// Helper function to get player icon
const getPlayerIcon = (isAI?: boolean) => isAI ? '🤖' : '👤';

// Helper function to get family display with emoji and dot
const getFamilyDisplay = (familyName?: string, familyEmoji?: string, familyColor?: string) => {
  if (!familyName) return '❓';
  const emoji = familyEmoji || '📋';
  const dot = familyColor ? '●' : '';
  return `${emoji}${dot}`;
};

// Compact display configuration for different event types
export const EVENT_DISPLAY_CONFIG: Record<HistoryEventType, {
  icon: string;
  color: string;
  shortFormat: (event: HistoryEvent) => string;
}> = {
  ask_outcome: {
    icon: '🎯',
    color: 'text-blue-600',
    shortFormat: (e) => {
      const playerIcon = getPlayerIcon(e.isPlayerAI);
      const targetIcon = getPlayerIcon(e.isTargetPlayerAI);
      const familyDisplay = getFamilyDisplay(e.familyName, e.familyEmoji, e.familyColor);
      
      if (e.outcome === 'success' && e.cardCount) {
        const cardText = e.cardCount === 1 ? '1📄' : `${e.cardCount}📄`;
        return `${playerIcon} → ${targetIcon} ${familyDisplay} ✅ ${cardText}`;
      } else if (e.outcome === 'failed' && e.details?.includes('draw from deck')) {
        const drawnFamilyDisplay = getFamilyDisplay(e.drawnFamilyName, e.drawnFamilyEmoji, e.drawnFamilyColor);
        return `${playerIcon} → ${targetIcon} ${familyDisplay} ❌ → 🎴 ${drawnFamilyDisplay}`;
      } else if (e.outcome === 'failed' && e.details?.includes('deck empty')) {
        return `${playerIcon} → ${targetIcon} ${familyDisplay} ❌ 🎴∅`;
      } else if (e.outcome === 'failed') {
        return `${playerIcon} → ${targetIcon} ${familyDisplay} ❌ 🎴∅`;
      }
      return `${playerIcon} → ${targetIcon} ${familyDisplay}`;
    }
  },
  empty_hand: {
    icon: '🔄',
    color: 'text-gray-600',
    shortFormat: (e) => {
      const playerIcon = getPlayerIcon(e.isPlayerAI);
      return e.outcome === 'draw' ? `${playerIcon} ∅ → 🎴` : `${playerIcon} ∅ ⏭️`;
    }
  },
  family_completed: {
    icon: '🎉',
    color: 'text-purple-600',
    shortFormat: (e) => {
      const playerIcon = getPlayerIcon(e.isPlayerAI);
      const familyDisplay = getFamilyDisplay(e.familyName, e.familyEmoji, e.familyColor);
      return `${playerIcon} ${familyDisplay} ✨ Complete!`;
    }
  },
  game_ended: {
    icon: '🏆',
    color: 'text-gold-600',
    shortFormat: (e) => {
      const playerIcon = getPlayerIcon(e.isPlayerAI);
      return e.playerName !== 'Égalité' ? `${playerIcon} 🏆 Winner!` : `🤝 Tie!`;
    }
  }
};