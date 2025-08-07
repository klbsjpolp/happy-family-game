import { render, screen, fireEvent } from '@testing-library/react';
import { GameHistory } from '../GameHistory';
import { HistoryEvent } from '@/types/history.tsx';
import {describe, it, expect} from "vitest";

const mockEvents: HistoryEvent[] = [
  {
    id: '1',
    type: 'ask_outcome',
    timestamp: Date.now(),
    playerName: 'Player 1',
    targetPlayerName: 'Player 2',
    familyName: 'Animals',
    familyColor: 'hsl(0 85% 55%)',
    familyEmoji: '🦁',
    cardCount: 2,
    outcome: 'success',
    isPlayerAI: false,
    isTargetPlayerAI: true,
    details: 'Ask for Animals, get 2 cards'
  },
  {
    id: '2',
    type: 'ask_outcome',
    timestamp: Date.now() - 1000,
    playerName: 'Player 2',
    targetPlayerName: 'Player 1',
    familyName: 'Vehicles',
    familyColor: 'hsl(120 85% 45%)',
    familyEmoji: '🚗',
    drawnFamilyName: 'Nature',
    drawnFamilyColor: 'hsl(240 85% 55%)',
    drawnFamilyEmoji: '🌳',
    outcome: 'failed',
    isPlayerAI: true,
    isTargetPlayerAI: false,
    details: 'Ask for Vehicles, none, draw from deck, got Nature'
  },
  {
    id: '3',
    type: 'ask_outcome',
    timestamp: Date.now() - 2000,
    playerName: 'Player 1',
    targetPlayerName: 'Player 2',
    familyName: 'Jobs',
    familyColor: 'hsl(60 85% 55%)',
    familyEmoji: '💼',
    outcome: 'failed',
    isPlayerAI: false,
    isTargetPlayerAI: true,
    details: 'Ask for Jobs, none, deck empty'
  },
  {
    id: '4',
    type: 'family_completed',
    timestamp: Date.now() - 3000,
    playerName: 'Player 1',
    familyName: 'Animals',
    familyColor: 'hsl(0 85% 55%)',
    familyEmoji: '🦁',
    isPlayerAI: false,
    details: 'Player 1 completed Animals!'
  }
];

describe('GameHistory', () => {
  it('renders empty state when no events', () => {
    render(<GameHistory events={[]} />);
    expect(screen.getByText('Aucun événement pour le moment')).toBeInTheDocument();
    expect(screen.getByText('Historique du jeu')).toBeInTheDocument();
  });

  it('displays events without time information', () => {
    render(<GameHistory events={mockEvents} />);
    
    // Check that visual events are displayed (using partial text matching for complex visual elements)
    expect(screen.getByText(/👤.*→.*🤖.*🦁.*✅.*2📄/)).toBeInTheDocument();
    expect(screen.getByText(/🤖.*→.*👤.*🚗.*❌.*→.*🎴.*🌳/)).toBeInTheDocument();
    expect(screen.getByText(/👤.*→.*🤖.*💼.*❌.*🎴∅/)).toBeInTheDocument();
    expect(screen.getByText(/👤.*🦁.*✨.*Complete!/)).toBeInTheDocument();
    
    // Check that no time information is displayed
    expect(screen.queryByText(/\d{2}:\d{2}:\d{2}/)).not.toBeInTheDocument();
    expect(screen.queryByText(/\d+s/)).not.toBeInTheDocument();
    expect(screen.queryByText(/\d+m/)).not.toBeInTheDocument();
  });

  it('does not display clear button', () => {
    render(<GameHistory events={mockEvents} />);
    
    // Check that clear button is not present
    expect(screen.queryByRole('button', { name: /clear/i })).not.toBeInTheDocument();
    expect(screen.queryByTestId('clear-history')).not.toBeInTheDocument();
  });

  it('shows correct event count in header', () => {
    render(<GameHistory events={mockEvents} />);
    expect(screen.getByText('Historique (4)')).toBeInTheDocument();
  });

  it('toggles between compact and detailed view', () => {
    render(<GameHistory events={mockEvents} />);
    
    const toggleButton = screen.getByText('Détails');
    expect(toggleButton).toBeInTheDocument();
    
    fireEvent.click(toggleButton);
    expect(screen.getByText('Compact')).toBeInTheDocument();
    
    fireEvent.click(screen.getByText('Compact'));
    expect(screen.getByText('Détails')).toBeInTheDocument();
  });

  it('limits visible events based on maxVisibleEvents prop', () => {
    render(<GameHistory events={mockEvents} maxVisibleEvents={2} />);
    
    // Should show "Voir plus" button when there are more events than maxVisibleEvents
    expect(screen.getByText('Voir plus (2)')).toBeInTheDocument();
  });

  it('expands to show all events when "Voir plus" is clicked', () => {
    render(<GameHistory events={mockEvents} maxVisibleEvents={2} />);
    
    const expandButton = screen.getByText('Voir plus (2)');
    fireEvent.click(expandButton);
    
    expect(screen.getByText('Voir moins')).toBeInTheDocument();
    // All visual events should now be visible
    expect(screen.getByText(/👤.*→.*🤖.*🦁.*✅.*2📄/)).toBeInTheDocument();
    expect(screen.getByText(/🤖.*→.*👤.*🚗.*❌.*→.*🎴.*🌳/)).toBeInTheDocument();
    expect(screen.getByText(/👤.*→.*🤖.*💼.*❌.*🎴∅/)).toBeInTheDocument();
    expect(screen.getByText(/👤.*🦁.*✨.*Complete!/)).toBeInTheDocument();
  });

  it('displays events with proper structure', () => {
    render(<GameHistory events={mockEvents} />);
    
    // Check that visual events are rendered with proper structure
    const eventElements = screen.getAllByText(/[👤🤖✅❌✨]/u);
    expect(eventElements.length).toBeGreaterThan(0);
    
    // Check that visual ask_outcome and family_completed events are displayed
    expect(screen.getByText(/👤.*→.*🤖.*🦁.*✅.*2📄/)).toBeInTheDocument();
    expect(screen.getByText(/👤.*🦁.*✨.*Complete!/)).toBeInTheDocument();
  });

  it('formats ask_outcome events correctly', () => {
    const successEvent: HistoryEvent = {
      id: '1',
      type: 'ask_outcome',
      timestamp: Date.now(),
      playerName: 'Player 1',
      targetPlayerName: 'Player 2',
      familyName: 'Animals',
      familyColor: 'hsl(0 85% 55%)',
      familyEmoji: '🦁',
      cardCount: 1,
      outcome: 'success',
      isPlayerAI: false,
      isTargetPlayerAI: true,
      details: 'Ask for Animals, get 1 card'
    };

    const failedWithDrawEvent: HistoryEvent = {
      id: '2',
      type: 'ask_outcome',
      timestamp: Date.now(),
      playerName: 'Player 1',
      targetPlayerName: 'Player 2',
      familyName: 'Vehicles',
      familyColor: 'hsl(120 85% 45%)',
      familyEmoji: '🚗',
      drawnFamilyName: 'Nature',
      drawnFamilyColor: 'hsl(240 85% 55%)',
      drawnFamilyEmoji: '🌳',
      outcome: 'failed',
      isPlayerAI: false,
      isTargetPlayerAI: true,
      details: 'Ask for Vehicles, none, draw from deck, got Nature'
    };

    const failedEmptyDeckEvent: HistoryEvent = {
      id: '3',
      type: 'ask_outcome',
      timestamp: Date.now(),
      playerName: 'Player 1',
      targetPlayerName: 'Player 2',
      familyName: 'Jobs',
      familyColor: 'hsl(60 85% 55%)',
      familyEmoji: '💼',
      outcome: 'failed',
      isPlayerAI: false,
      isTargetPlayerAI: true,
      details: 'Ask for Jobs, none, deck empty'
    };

    render(<GameHistory events={[successEvent, failedWithDrawEvent, failedEmptyDeckEvent]} />);
    
    expect(screen.getByText(/👤.*→.*🤖.*🦁.*✅.*1📄/)).toBeInTheDocument();
    expect(screen.getByText(/👤.*→.*🤖.*🚗.*❌.*→.*🎴.*🌳/)).toBeInTheDocument();
    expect(screen.getByText(/👤.*→.*🤖.*💼.*❌.*🎴∅/)).toBeInTheDocument();
  });
});