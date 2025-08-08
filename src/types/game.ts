import {Icons} from "@/components/GameIcon.tsx";

export type Theme = 'animals' | 'vehicles' | 'jobs' | 'nature' | 'original' | 'fantasy' | 'space' | 'food' | 'sports';

export type GameMode = 'human-vs-human' | 'human-vs-ai';

export interface GameConfig {
  theme: Theme;
  familyCount: number;
  gameMode: GameMode;
}

export interface FamilyMember {
  id: string;
  name: string;
  icon: Icons;
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

export const THEMES: Record<Theme, { name: string; icon: string; }> = {
  original: { name: 'Classique', icon: 'Users' },
  animals: { name: 'Animaux', icon: 'Crown' },
  vehicles: { name: 'Véhicules', icon: 'Car' },
  jobs: { name: 'Métiers', icon: 'Stethoscope' },
  nature: { name: 'Nature', icon: 'TentTree' },
  fantasy: { name: 'Fantaisie', icon: 'Wand' },
  space: { name: 'Espace', icon: 'Rocket' },
  food: { name: 'Cuisine', icon: 'Apple' },
  sports: { name: 'Sports', icon: 'Trophy' },
};