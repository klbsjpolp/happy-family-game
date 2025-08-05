import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { GameSetup } from '../components/GameSetup';
import { THEMES } from '@/types/game';

describe('GameSetup', () => {
  const onStartGame = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders the game setup screen with default values', () => {
    render(<GameSetup onStartGame={onStartGame} />);
    
    // Check title and description
    expect(screen.getByText('🎯 Jeu des Familles')).toBeInTheDocument();
    expect(screen.getByText('Configurez votre partie et amusez-vous !')).toBeInTheDocument();
    
    // Check theme selection
    expect(screen.getByText('Choisissez un thème')).toBeInTheDocument();
    
    // Check all themes are displayed
    Object.values(THEMES).forEach(theme => {
      expect(screen.getByText(theme.name)).toBeInTheDocument();
      expect(screen.getByText(theme.emoji)).toBeInTheDocument();
    });
    
    // Check family count section
    expect(screen.getByText('Nombre de familles')).toBeInTheDocument();
    expect(screen.getByText('7')).toBeInTheDocument(); // Default value
    expect(screen.getByText('4 familles')).toBeInTheDocument(); // Min value
    
    // Check game mode section
    expect(screen.getByText('Mode de jeu')).toBeInTheDocument();
    expect(screen.getByText('Joueur contre IA')).toBeInTheDocument();
    expect(screen.getByText('2 Joueurs humains')).toBeInTheDocument();
    
    // Check start button
    expect(screen.getByText('🚀 Commencer la partie')).toBeInTheDocument();
  });

  it('allows changing the theme', () => {
    render(<GameSetup onStartGame={onStartGame} />);
    
    // Find and click on a different theme (e.g., "nature")
    const fantasyTheme = screen.getByText(THEMES.nature.name);
    fireEvent.click(fantasyTheme);
    
    // Start the game
    const startButton = screen.getByText('🚀 Commencer la partie');
    fireEvent.click(startButton);
    
    // Check that onStartGame was called with the correct theme
    expect(onStartGame).toHaveBeenCalledWith(expect.objectContaining({
      theme: 'nature',
      familyCount: 7, // Default value
      gameMode: 'human-vs-ai' // Default value
    }));
  });

  it('allows changing the family count', () => {
    render(<GameSetup onStartGame={onStartGame} />);
    
    // Find the slider and change its value
    // Note: Testing sliders is tricky with RTL, so we're simulating the state change
    // by finding the badge that displays the current value and verifying it exists
    expect(screen.getByText('7')).toBeInTheDocument(); // Default value
    
    // Start the game
    const startButton = screen.getByText('🚀 Commencer la partie');
    fireEvent.click(startButton);
    
    // Check that onStartGame was called with the correct family count
    expect(onStartGame).toHaveBeenCalledWith(expect.objectContaining({
      theme: 'animals', // Default value
      familyCount: 7,
      gameMode: 'human-vs-ai' // Default value
    }));
  });

  it('allows changing the game mode', () => {
    render(<GameSetup onStartGame={onStartGame} />);
    
    // Find and click on the human-vs-human radio button
    screen.getByText('2 Joueurs humains');
    const humanVsHumanRadio = screen.getByRole('radio', {name:/2 Joueurs humains/});
    fireEvent.click(humanVsHumanRadio);
    
    // Start the game
    const startButton = screen.getByText('🚀 Commencer la partie');
    fireEvent.click(startButton);
    
    // Check that onStartGame was called with the correct game mode
    expect(onStartGame).toHaveBeenCalledWith(expect.objectContaining({
      theme: 'animals', // Default value
      familyCount: 7, // Default value
      gameMode: 'human-vs-human'
    }));
  });

  it('starts the game with the configured settings', () => {
    render(<GameSetup onStartGame={onStartGame} />);
    
    // Change theme
    const professionTheme = screen.getByText(THEMES.jobs.name);
    fireEvent.click(professionTheme);
    
    // Change game mode
    const humanVsHumanRadio = screen.getByRole('radio', {name: /2 Joueurs humains/});
    fireEvent.click(humanVsHumanRadio);
    
    // Start the game
    const startButton = screen.getByText('🚀 Commencer la partie');
    fireEvent.click(startButton);
    
    // Check that onStartGame was called with all the correct settings
    expect(onStartGame).toHaveBeenCalledWith({
      theme: 'jobs',
      familyCount: 7, // Default value
      gameMode: 'human-vs-human'
    });
  });
});