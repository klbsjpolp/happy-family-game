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
    render(
      <PlayerHand 
        player={mockHumanPlayer}
        families={mockFamilies}
        isCurrentPlayer={true}
      />
    );
    
    // Check player name and status
    expect(screen.getByText('👤 Joueur 1')).toBeInTheDocument();
    expect(screen.getByText('À vous !')).toBeInTheDocument();
    
    // Check card count
    expect(screen.getByText('Cartes: 3')).toBeInTheDocument();
    expect(screen.getByText('Familles: 0')).toBeInTheDocument();
    
    // Check family grouping
    expect(screen.getByText('Bears (2/6)')).toBeInTheDocument();
    expect(screen.getByText('Rabbits (1/6)')).toBeInTheDocument();
    
    // Check individual cards
    expect(screen.getByText('Papa Bear')).toBeInTheDocument();
    expect(screen.getByText('Mama Bear')).toBeInTheDocument();
    expect(screen.getByText('Papa Rabbit')).toBeInTheDocument();
  });
  
  it('renders AI player hand with hidden cards', () => {
    render(
      <PlayerHand 
        player={mockAIPlayer}
        families={mockFamilies}
        isCurrentPlayer={true}
      />
    );
    
    // Check player name and status
    expect(screen.getByText('🤖 IA')).toBeInTheDocument();
    expect(screen.getByText('À son tour !')).toBeInTheDocument();
    
    // Check card count
    expect(screen.getByText('Cartes: 3')).toBeInTheDocument();
    expect(screen.getByText('Familles: 0')).toBeInTheDocument();
    
    // Check that cards are hidden (no specific card names should be visible)
    expect(screen.queryByText('Baby Bear')).not.toBeInTheDocument();
    expect(screen.queryByText('Sister Bear')).not.toBeInTheDocument();
    expect(screen.queryByText('Mama Rabbit')).not.toBeInTheDocument();
    
    // Check that we have 3 card placeholders (🎴)
    const cardPlaceholders = screen.getAllByText('🎴');
    expect(cardPlaceholders).toHaveLength(3);
  });
  
  it('displays "Aucune carte" when player has no cards', () => {
    const emptyHandPlayer = {
      ...mockHumanPlayer,
      cards: []
    };
    
    render(
      <PlayerHand 
        player={emptyHandPlayer}
        families={mockFamilies}
        isCurrentPlayer={false}
      />
    );
    
    expect(screen.getByText('Aucune carte')).toBeInTheDocument();
  });
  
  it('handles card selection when onCardSelect is provided', () => {
    const onCardSelect = vi.fn();
    
    render(
      <PlayerHand 
        player={mockHumanPlayer}
        families={mockFamilies}
        isCurrentPlayer={true}
        onCardSelect={onCardSelect}
        selectedCard="bear-dad"
      />
    );
    
    // Find and click on a card
    const bearDadCard = screen.getByText('Papa Bear');
    fireEvent.click(bearDadCard);
    
    // Check that onCardSelect was called with the right card ID
    expect(onCardSelect).toHaveBeenCalledWith('bear-dad');
    
    // Check that the selected card has the correct data attribute
    const selectedCard = screen.getByTestId('game-card-bear-dad');
    expect(selectedCard.getAttribute('data-selected')).toBe('true');
  });
  
  it('shows "Complète !" badge when a family is complete', () => {
    const playerWithCompleteFamily = {
      ...mockHumanPlayer,
      cards: ['bear-dad', 'bear-mom', 'bear-son', 'bear-daughter', "bear-grandpa", "bear-grandma"],
    };
    
    render(
      <PlayerHand 
        player={playerWithCompleteFamily}
        families={mockFamilies}
        isCurrentPlayer={false}
      />
    );
    
    expect(screen.getByText('Bears (6/6)')).toBeInTheDocument();
    expect(screen.getByText('Complète !')).toBeInTheDocument();
  });
});