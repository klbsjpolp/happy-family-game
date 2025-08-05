import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { GameBoard } from '../components/GameBoard';
import { GameState, Family } from '@/types/game';

// Mock the AnimationOverlay component
vi.mock('../components/AnimationOverlay', () => ({
  AnimationOverlay: () => <div data-testid="animation-overlay" />
}));

// Mock the CardAnimationProvider context
vi.mock('../contexts/CardAnimationContext', () => ({
  CardAnimationProvider: ({ children }: { children: React.ReactNode }) => <div>{children}</div>
}));

describe('GameBoard', () => {
  // Mock handlers
  const onAskForCard = vi.fn();
  const onPlayAITurn = vi.fn();
  const onResetGame = vi.fn();
  
  // Mock game state
  const mockFamily1: Family = {
    id: 'family1',
    name: 'Bears',
    color: '#8B4513',
    members: [
      { id: 'bear-dad', name: 'Papa Bear', emoji: ''},
      { id: 'bear-mom', name: 'Mama Bear', emoji: '' },
      { id: 'bear-son', name: 'Baby Bear', emoji: '' },
      { id: 'bear-daughter', name: 'Sister Bear', emoji: '' }
    ]
  };
  
  const mockFamily2: Family = {
    id: 'family2',
    name: 'Rabbits',
    color: '#FFA500',
    members: [
      { id: 'rabbit-dad', name: 'Papa Rabbit', emoji: '' },
      { id: 'rabbit-mom', name: 'Mama Rabbit', emoji: '' },
      { id: 'rabbit-son', name: 'Baby Rabbit', emoji: '' },
      { id: 'rabbit-daughter', name: 'Sister Rabbit', emoji: '' }
    ]
  };
  
  const mockGameState: GameState = {
    config: {
      theme: 'animals',
      familyCount: 2,
      gameMode: 'human-vs-ai'
    },
    families: [mockFamily1, mockFamily2],
    players: [
      {
        id: 'player1',
        name: 'Joueur 1',
        isAI: false,
        cards: ['bear-dad', 'bear-mom', 'rabbit-dad'],
        families: []
      },
      {
        id: 'player2',
        name: 'IA',
        isAI: true,
        cards: ['bear-son', 'bear-daughter', 'rabbit-mom'],
        families: []
      }
    ],
    currentPlayer: 0,
    gamePhase: 'playing',
    deck: ['rabbit-son', 'rabbit-daughter']
  };
  
  const mockGameStateEnded: GameState = {
    ...mockGameState,
    gamePhase: 'ended',
    winner: 'player1',
    players: [
      {
        ...mockGameState.players[0],
        families: ['family1']
      },
      mockGameState.players[1]
    ]
  };
  
  beforeEach(() => {
    vi.clearAllMocks();
  });
  
  it('renders the game board correctly during gameplay', () => {
    render(
      <GameBoard 
        gameState={mockGameState}
        onAskForCard={onAskForCard}
        onPlayAITurn={onPlayAITurn}
        onResetGame={onResetGame}
      />
    );
    
    // Check for main elements
    expect(screen.getByText('🎯 Jeu des Familles')).toBeInTheDocument();
    expect(screen.getByText('2 familles')).toBeInTheDocument();
    expect(screen.getByText('Nouvelle partie')).toBeInTheDocument();
    expect(screen.getByText('À votre tour, Joueur 1 !')).toBeInTheDocument();
    
    // Check for deck
    expect(screen.getAllByText('🎴')).toHaveLength(4);
    expect(screen.getByText('2')).toBeInTheDocument(); // Deck count
    
    // Check for family selection
    expect(screen.getByRole('radio', { name: 'Bears' })).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: 'Rabbits' })).toBeInTheDocument();
    
    // Check for the ask button
    expect(screen.getByText('Demander')).toBeInTheDocument();
    expect(screen.getByText('Demander')).toBeDisabled(); // Should be disabled initially
  });
  
  it('renders the game over screen when game is ended', () => {
    render(
      <GameBoard 
        gameState={mockGameStateEnded}
        onAskForCard={onAskForCard}
        onPlayAITurn={onPlayAITurn}
        onResetGame={onResetGame}
      />
    );
    
    // Check for game over elements
    expect(screen.getByText('🎉')).toBeInTheDocument();
    expect(screen.getByText('Joueur 1 a gagné !')).toBeInTheDocument();
    expect(screen.getByText('Familles complétées : 1')).toBeInTheDocument();
    expect(screen.getByText('Bears')).toBeInTheDocument(); // The completed family
    
    // Check for new game button
    const newGameButton = screen.getByText('Nouvelle partie');
    expect(newGameButton).toBeInTheDocument();
    
    // Click the new game button
    fireEvent.click(newGameButton);
    expect(onResetGame).toHaveBeenCalledTimes(1);
  });
  
  it('allows selecting a family and asking for a card', () => {
    render(
      <GameBoard 
        gameState={mockGameState}
        onAskForCard={onAskForCard}
        onPlayAITurn={onPlayAITurn}
        onResetGame={onResetGame}
      />
    );
    
    // Find and click on a family
    const bearsFamily = screen.getByRole('radio',  { name: 'Bears'});
    fireEvent.click(bearsFamily);
    
    // The ask button should now be enabled
    const askButton = screen.getByText('Demander');
    expect(askButton).not.toBeDisabled();
    
    // Click the ask button
    fireEvent.click(askButton);
    
    // Check that the onAskForCard function was called with the right parameters
    expect(onAskForCard).toHaveBeenCalledTimes(1);
    expect(onAskForCard).toHaveBeenCalledWith(1, mockFamily1);
  });
  
  it('triggers AI turn when it is AI\'s turn', () => {
    // Create a game state where it's AI's turn
    const aiTurnGameState = {
      ...mockGameState,
      currentPlayer: 1
    };
    
    // Use fake timers
    vi.useFakeTimers();
    
    render(
      <GameBoard 
        gameState={aiTurnGameState}
        onAskForCard={onAskForCard}
        onPlayAITurn={onPlayAITurn}
        onResetGame={onResetGame}
      />
    );
    
    // Check for AI thinking message
    expect(screen.getByText('IA réfléchit...')).toBeInTheDocument();
    
    // Advance timers
    vi.runAllTimers();
    
    // Check that onPlayAITurn was called
    expect(onPlayAITurn).toHaveBeenCalledTimes(1);
    
    // Restore real timers
    vi.useRealTimers();
  });
});