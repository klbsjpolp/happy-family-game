import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { PlayerHand } from '../components/PlayerHand';
import { Player, Family } from '@/types/game';

// Mock the GameCard component
vi.mock('../components/GameCard', () => ({
  GameCard: ({ 
    id: _id,
    member, 
    family, 
    isSelected, 
    onClick 
  }: {
    id: string;
    member: { id: string; name: string; image: string };
    family: { id: string; name: string; color: string };
    isSelected?: boolean;
    onClick?: () => void;
  }) => (
    <div 
      data-testid={`game-card-${member.id}`}
      data-family={family.id}
      data-selected={isSelected}
      onClick={onClick}
    >
      {member.name}
    </div>
  )
}));

describe('PlayerHand', () => {
  // Mock data
  const mockFamily1: Family = {
    id: 'family1',
    name: 'Bears',
    color: '#8B4513',
    members: [
      { id: 'bear-dad', name: 'Papa Bear', emoji: '' },
      { id: 'bear-mom', name: 'Mama Bear', emoji: '' },
      { id: 'bear-son', name: 'Baby Bear', emoji: '' },
      { id: 'bear-daughter', name: 'Sister Bear', emoji: '' },
      { id: 'bear-grandpa', name: 'Grandpa Bear', emoji: '' },
      { id: 'bear-grandma', name: 'Grandma Bear', emoji: '' }
    ]
  };
  
  const mockFamily2: Family = {
    id: 'family2',
    name: 'Rabbits',
    color: '#FFA500',
    members: [
      { id: 'rabbit-mom', name: 'Mama Rabbit', emoji: '' },
      { id: 'rabbit-dad', name: 'Papa Rabbit', emoji: '' },
      { id: 'rabbit-son', name: 'Baby Rabbit', emoji: '' },
      { id: 'rabbit-daughter', name: 'Sister Rabbit', emoji: '' },
      { id: 'rabbit-grandpa', name: 'Grandpa Rabbit', emoji: '' },
      { id: 'rabbit-grandma', name: 'Grandma Rabbit', emoji: '' }
    ]
  };
  
  const mockFamilies = [mockFamily1, mockFamily2];
  
  const mockHumanPlayer: Player = {
    id: 'player1',
    name: 'Joueur 1',
    isAI: false,
    cards: ['bear-dad', 'bear-mom', 'rabbit-dad'],
    families: []
  };
  
  const mockAIPlayer: Player = {
    id: 'player2',
    name: 'IA',
    isAI: true,
    cards: ['bear-son', 'bear-daughter', 'rabbit-mom'],
    families: []
  };
  
  it('renders human player hand with visible cards', () => {
    const mockAskForCard = vi.fn();
    
    render(
      <PlayerHand 
        player={mockHumanPlayer}
        families={mockFamilies}
        isCurrentPlayer={true}
        isMyTurn={true}
        askForCard={mockAskForCard}
      />
    );
    
    // Check player name and status
    expect(screen.getByText('👤 Joueur 1')).toBeInTheDocument();
    expect(screen.getByText('À vous !')).toBeInTheDocument();
    
    // Check family count
    expect(screen.getByText('Familles complétées: 0')).toBeInTheDocument();
    
    // Check family grouping
    expect(screen.getByText('Bears (2/6)')).toBeInTheDocument();
    expect(screen.getByText('Rabbits (1/6)')).toBeInTheDocument();
    
    // Check individual cards
    expect(screen.getByText('Papa Bear')).toBeInTheDocument();
    expect(screen.getByText('Mama Bear')).toBeInTheDocument();
    expect(screen.getByText('Papa Rabbit')).toBeInTheDocument();
  });
  
  it('renders AI player hand with hidden cards', () => {
    const mockAskForCard = vi.fn();
    
    render(
      <PlayerHand 
        player={mockAIPlayer}
        families={mockFamilies}
        isCurrentPlayer={true}
        isMyTurn={false}
        askForCard={mockAskForCard}
      />
    );
    
    // Check player name and status
    expect(screen.getByText('🤖 IA')).toBeInTheDocument();
    expect(screen.getByText('À son tour !')).toBeInTheDocument();
    
    // Check family count
    expect(screen.getByText('Familles complétées: 0')).toBeInTheDocument();
    
    // Check that cards are hidden (no specific card names should be visible)
    expect(screen.queryByText('Baby Bear')).not.toBeInTheDocument();
    expect(screen.queryByText('Sister Bear')).not.toBeInTheDocument();
    expect(screen.queryByText('Mama Rabbit')).not.toBeInTheDocument();
    
    // Check that we have 3 card back components (the AI cards are rendered as GameCardBack)
    // We can't easily test for 🎴 emoji since it's in a component, so we test the structure instead
    const playerHandElement = screen.getByText('🤖 IA').closest('[id^="player-hand-"]');
    expect(playerHandElement).toBeInTheDocument();
  });
  
  it('displays "Aucune carte" when player has no cards', () => {
    const emptyHandPlayer = {
      ...mockHumanPlayer,
      cards: []
    };
    const mockAskForCard = vi.fn();
    
    render(
      <PlayerHand 
        player={emptyHandPlayer}
        families={mockFamilies}
        isCurrentPlayer={false}
        askForCard={mockAskForCard}
      />
    );
    
    expect(screen.getByText('Aucune carte')).toBeInTheDocument();
  });
  
  it('handles ask for card button clicks', () => {
    const mockAskForCard = vi.fn();
    
    render(
      <PlayerHand 
        player={mockHumanPlayer}
        families={mockFamilies}
        isCurrentPlayer={true}
        isMyTurn={true}
        askForCard={mockAskForCard}
      />
    );
    
    // Find and click on a "Demander" button for Bears family
    const demandButtons = screen.getAllByText('Demander');
    expect(demandButtons.length).toBeGreaterThan(0);
    
    // Click the first "Demander" button (should be for Bears family)
    fireEvent.click(demandButtons[0]);
    
    // Check that askForCard was called with the Bears family
    expect(mockAskForCard).toHaveBeenCalledWith(mockFamily1);
  });
  
  it('shows "Complète !" badge when a family is complete', () => {
    const playerWithCompleteFamily = {
      ...mockHumanPlayer,
      cards: ['bear-dad', 'bear-mom', 'bear-son', 'bear-daughter', "bear-grandpa", "bear-grandma"],
    };
    const mockAskForCard = vi.fn();
    
    render(
      <PlayerHand 
        player={playerWithCompleteFamily}
        families={mockFamilies}
        isCurrentPlayer={false}
        askForCard={mockAskForCard}
      />
    );
    
    expect(screen.getByText('Bears (6/6)')).toBeInTheDocument();
    expect(screen.getByText('Complète !')).toBeInTheDocument();
  });
});