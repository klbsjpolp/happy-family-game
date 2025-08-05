export type Theme = 'animals' | 'vehicles' | 'jobs' | 'nature' | 'original';

export type GameMode = 'human-vs-human' | 'human-vs-ai';

export interface GameConfig {
  theme: Theme;
  familyCount: number;
  gameMode: GameMode;
}

export interface FamilyMember {
  id: string;
  name: string;
  emoji: string;
  description: string;
}

export interface Family {
  id: string;
  name: string;
  members: FamilyMember[];
  color: string;
}

export interface Player {
  id: string;
  name: string;
  isAI: boolean;
  cards: string[];
  families: string[];
  askedFamilies?: Family[]; // Cartes déjà demandées
}

export interface GameState {
  config: GameConfig;
  families: Family[];
  players: Player[];
  currentPlayer: number;
  gamePhase: 'setup' | 'playing' | 'ended';
  winner?: string;
  deck: string[]; // Cartes restantes dans le deck
}

export const THEMES: Record<Theme, { name: string; emoji: string; className: string }> = {
  animals: { name: 'Animaux', emoji: '🦁', className: 'theme-animals' },
  vehicles: { name: 'Véhicules', emoji: '🚗', className: 'theme-vehicles' },
  jobs: { name: 'Métiers', emoji: '👨‍⚕️', className: 'theme-jobs' },
  nature: { name: 'Nature', emoji: '🌳', className: 'theme-nature' },
  original: { name: 'Classique', emoji: '👪', className: 'theme-original' }
};