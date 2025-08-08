import { Family, Theme } from '@/types/game';

export const COMPLETE_FAMILY_COUNT = 6; // Number of members in a complete family
export const MAX_FAMILIES = 10; // Maximum number of families in the game

export const FAMILIES_DATA: Record<Theme, Family[]> = {
  original: [
    {
      id: 'family1',
      name: 'Famille Martin',
      color: '#dc2626',
      members: [
        {id: 'grandfather1', name: 'Grand-père', icon: 'user'},
        {id: 'grandmother1', name: 'Grand-mère', icon: 'user'},
        {id: 'father1', name: 'Père', icon: 'user'},
        {id: 'mother1', name: 'Mère', icon: 'user'},
        {id: 'son1', name: 'Fils', icon: 'user'},
        {id: 'daughter1', name: 'Fille', icon: 'user'}
      ]
    },
    {
      id: 'family2',
      name: 'Famille Dubois',
      color: '#22c55e',
      members: [
        {id: 'grandfather2', name: 'Grand-père', icon: 'user'},
        {id: 'grandmother2', name: 'Grand-mère', icon: 'user'},
        {id: 'father2', name: 'Père', icon: 'user'},
        {id: 'mother2', name: 'Mère', icon: 'user'},
        {id: 'son2', name: 'Fils', icon: 'user'},
        {id: 'daughter2', name: 'Fille', icon: 'user'}
      ]
    },
    {
      id: 'family3',
      name: 'Famille Bernard',
      color: '#4f46e5',
      members: [
        {id: 'grandfather3', name: 'Grand-père', icon: 'user'},
        {id: 'grandmother3', name: 'Grand-mère', icon: 'user'},
        {id: 'father3', name: 'Père', icon: 'user'},
        {id: 'mother3', name: 'Mère', icon: 'user'},
        {id: 'son3', name: 'Fils', icon: 'user'},
        {id: 'daughter3', name: 'Fille', icon: 'user'}
      ]
    },
    {
      id: 'family4',
      name: 'Famille Petit',
      color: '#eab308',
      members: [
        {id: 'grandfather4', name: 'Grand-père', icon: 'user'},
        {id: 'grandmother4', name: 'Grand-mère', icon: 'user'},
        {id: 'father4', name: 'Père', icon: 'user'},
        {id: 'mother4', name: 'Mère', icon: 'user'},
        {id: 'son4', name: 'Fils', icon: 'user'},
        {id: 'daughter4', name: 'Fille', icon: 'user'}
      ]
    },
    {
      id: 'family5',
      name: 'Famille Moreau',
      color: '#d946ef',
      members: [
        {id: 'grandfather5', name: 'Grand-père', icon: 'user'},
        {id: 'grandmother5', name: 'Grand-mère', icon: 'user'},
        {id: 'father5', name: 'Père', icon: 'user'},
        {id: 'mother5', name: 'Mère', icon: 'user'},
        {id: 'son5', name: 'Fils', icon: 'user'},
        {id: 'daughter5', name: 'Fille', icon: 'user'}
      ]
    },
    {
      id: 'family6',
      name: 'Famille Leroy',
      color: '#06b6d4',
      members: [
        {id: 'grandfather6', name: 'Grand-père', icon: 'user'},
        {id: 'grandmother6', name: 'Grand-mère', icon: 'user'},
        {id: 'father6', name: 'Père', icon: 'user'},
        {id: 'mother6', name: 'Mère', icon: 'user'},
        {id: 'son6', name: 'Fils', icon: 'user'},
        {id: 'daughter6', name: 'Fille', icon: 'user'}
      ]
    },
    {
      id: 'family7',
      name: 'Famille Fournier',
      color: '#f97316',
      members: [
        {id: 'grandfather7', name: 'Grand-père', icon: 'user'},
        {id: 'grandmother7', name: 'Grand-mère', icon: 'user'},
        {id: 'father7', name: 'Père', icon: 'user'},
        {id: 'mother7', name: 'Mère', icon: 'user'},
        {id: 'son7', name: 'Fils', icon: 'user'},
        {id: 'daughter7', name: 'Fille', icon: 'user'}
      ]
    },
    {
      id: 'family8',
      name: 'Famille Girard',
      color: '#ec4899',
      members: [
        {id: 'grandfather8', name: 'Grand-père', icon: 'user'},
        {id: 'grandmother8', name: 'Grand-mère', icon: 'user'},
        {id: 'father8', name: 'Père', icon: 'user'},
        {id: 'mother8', name: 'Mère', icon: 'user'},
        {id: 'son8', name: 'Fils', icon: 'user'},
        {id: 'daughter8', name: 'Fille', icon: 'user'}
      ]
    },
    {
      id: 'family9',
      name: 'Famille Bonnet',
      color: '#a855f7',
      members: [
        {id: 'grandfather9', name: 'Grand-père', icon: 'user'},
        {id: 'grandmother9', name: 'Grand-mère', icon: 'user'},
        {id: 'father9', name: 'Père', icon: 'user'},
        {id: 'mother9', name: 'Mère', icon: 'user'},
        {id: 'son9', name: 'Fils', icon: 'user'},
        {id: 'daughter9', name: 'Fille', icon: 'user'}
      ]
    },
    {
      id: 'family10',
      name: 'Famille Lambert',
      color: '#84cc16',
      members: [
        {id: 'grandfather10', name: 'Grand-père', icon: 'user'},
        {id: 'grandmother10', name: 'Grand-mère', icon: 'user'},
        {id: 'father10', name: 'Père', icon: 'user'},
        {id: 'mother10', name: 'Mère', icon: 'user'},
        {id: 'son10', name: 'Fils', icon: 'user'},
        {id: 'daughter10', name: 'Fille', icon: 'user'}
      ]
    }
  ],
  animals: [
    {
      id: 'cats',
      name: 'Les Félins',
      color: '#f59e0b',
      members: [
        {id: 'lion', name: 'Lion', icon: 'crown'},
        {id: 'tiger', name: 'Tigre', icon: 'zap'},
        {id: 'leopard', name: 'Léopard', icon: 'sparkles'},
        {id: 'cat', name: 'Chat', icon: 'cat'},
        {id: 'panther', name: 'Panthère', icon: 'moon'},
        {id: 'lynx', name: 'Lynx', icon: 'smile'}
      ]
    },
    {
      id: 'birds',
      name: 'Les Oiseaux',
      color: '#fb923c',
      members: [
        {id: 'eagle', name: 'Aigle', icon: 'bird'},
        {id: 'owl', name: 'Hibou', icon: 'eye'},
        {id: 'parrot', name: 'Perroquet', icon: 'message-circle'},
        {id: 'penguin', name: 'Pingouin', icon: 'snowflake'},
        {id: 'flamingo', name: 'Flamant', icon: 'heart'},
        {id: 'peacock', name: 'Paon', icon: 'palette'}
      ]
    },
    {
      id: 'marine',
      name: 'Les Marins',
      color: '#0ea5e9',
      members: [
        {id: 'whale', name: 'Baleine', icon: 'whale'},
        {id: 'dolphin', name: 'Dauphin', icon: 'fish'},
        {id: 'shark', name: 'Requin', icon: 'shark'},
        {id: 'shrimp', name: 'Crevette', icon: 'shrimp'},
        {id: 'narwhal', name: 'Narval', icon: 'whaleNarwhal'},
        {id: 'crab', name: 'Crabe', icon: 'crab'}
      ]
    },
    {
      id: 'farm',
      name: 'La Ferme',
      color: '#22c55e',
      members: [
        {id: 'cow', name: 'Vache', icon: 'milk'},
        {id: 'pig', name: 'Cochon', icon: 'heart'},
        {id: 'chicken', name: 'Poule', icon: 'egg'},
        {id: 'sheep', name: 'Mouton', icon: 'cloud'},
        {id: 'horse', name: 'Cheval', icon: 'zap'},
        {id: 'goat', name: 'Chèvre', icon: 'mountain'}
      ]
    },
    {
      id: 'wild',
      name: 'Les Sauvages',
      color: '#c026d3',
      members: [
        {id: 'elephant', name: 'Éléphant', icon: 'mountain'},
        {id: 'giraffe', name: 'Girafe', icon: 'arrow-up'},
        {id: 'zebra', name: 'Zèbre', icon: 'bar-chart'},
        {id: 'rhino', name: 'Rhinocéros', icon: 'shield'},
        {id: 'hippo', name: 'Hippopotame', icon: 'waves'},
        {id: 'gorilla', name: 'Gorille', icon: 'grip'}
      ]
    },
    {
      id: 'insects',
      name: 'Les Insectes',
      color: '#eab308',
      members: [
        {id: 'bee', name: 'Abeille', icon: 'hexagon'},
        {id: 'butterfly', name: 'Papillon', icon: 'flower'},
        {id: 'spider', name: 'Araignée', icon: 'grid-3x3'},
        {id: 'ant', name: 'Fourmi', icon: 'dot'},
        {id: 'ladybug', name: 'Coccinelle', icon: 'shield'},
        {id: 'mosquito', name: 'Moustique', icon: 'zap'}
      ]
    },
    {
      id: 'reptiles',
      name: 'Les Reptiles',
      color: '#06b6d4',
      members: [
        {id: 'snake', name: 'Serpent', icon: 'waves'},
        {id: 'crocodile', name: 'Crocodile', icon: 'triangle'},
        {id: 'lizard', name: 'Lézard', icon: 'zap'},
        {id: 'turtle', name: 'Tortue', icon: 'shield'},
        {id: 'chameleon', name: 'Caméléon', icon: 'zap'},
        {id: 'gecko', name: 'Gecko', icon: 'zap'}
      ]
    },
    {
      id: 'amphibians',
      name: 'Les Amphibiens',
      color: '#6366f1',
      members: [
        {id: 'frog', name: 'Grenouille', icon: 'droplets'},
        {id: 'toad', name: 'Crapaud', icon: 'droplets'},
        {id: 'salamander', name: 'Salamandre', icon: 'zap'},
        {id: 'newt', name: 'Triton', icon: 'zap'},
        {id: 'axolotl', name: 'Axolotl', icon: 'fish'},
        {id: 'caecilian', name: 'Cécilien', icon: 'waves'}
      ]
    },
    {
      id: 'rodents',
      name: 'Les Rongeurs',
      color: '#d946ef',
      members: [
        {id: 'mouse', name: 'Souris', icon: 'dot'},
        {id: 'rat', name: 'Rat', icon: 'triangle'},
        {id: 'squirrel', name: 'Écureuil', icon: 'tree-pine'},
        {id: 'hamster', name: 'Hamster', icon: 'heart'},
        {id: 'guinea-pig', name: 'Cobaye', icon: 'smile'},
        {id: 'beaver', name: 'Castor', icon: 'hammer'}
      ]
    },
    {
      id: 'bats',
      name: 'Les Chauves-souris',
      color: '#ec4899',
      members: [
        {id: 'fruit-bat', name: 'Chauve-souris frugivore', icon: 'moon'},
        {id: 'vampire-bat', name: 'Chauve-souris vampire', icon: 'moon'},
        {id: 'little-brown-bat', name: 'Chauve-souris brune', icon: 'moon'},
        {id: 'big-eared-bat', name: 'Chauve-souris aux grandes oreilles', icon: 'moon',},
        {id: 'pipistrelle', name: 'Pipistrelle', icon: 'moon'},
        {id: 'flying-fox', name: 'Renard volant', icon: 'moon'}
      ]
    }
  ],
  vehicles: [
    {
      id: 'cars',
      name: 'Les Voitures',
      color: '#3b82f6',
      members: [
        {id: 'car', name: 'Voiture', icon: 'car'},
        {id: 'taxi', name: 'Taxi', icon: 'car'},
        {id: 'police', name: 'Police', icon: 'shield'},
        {id: 'ambulance', name: 'Ambulance', icon: 'cross'},
        {id: 'sportcar', name: 'Sportive', icon: 'zap'},
        {id: 'suv', name: 'SUV', icon: 'car'}
      ]
    },
    {
      id: 'trucks',
      name: 'Les Camions',
      color: '#38bdf8',
      members: [
        {id: 'truck', name: 'Camion', icon: 'truck'},
        {id: 'fire', name: 'Pompiers', icon: 'flame'},
        {id: 'garbage', name: 'Éboueurs', icon: 'trash-2'},
        {id: 'delivery', name: 'Livraison', icon: 'package'},
        {id: 'cement', name: 'Bétonneuse', icon: 'construction'},
        {id: 'tow', name: 'Dépanneuse', icon: 'alert-triangle'}
      ]
    },
    {
      id: 'air',
      name: 'Les Aériens',
      color: '#06b6d4',
      members: [
        {id: 'plane', name: 'Avion', icon: 'plane'},
        {id: 'helicopter', name: 'Hélicoptère', icon: 'rotate-ccw'},
        {id: 'rocket', name: 'Fusée', icon: 'rocket'},
        {id: 'balloon', name: 'Montgolfière', icon: 'cloud'},
        {id: 'jet', name: 'Jet privé', icon: 'plane'},
        {id: 'drone', name: 'Drone', icon: 'radio'}
      ]
    },
    {
      id: 'water',
      name: 'Les Marins',
      color: '#6366f1',
      members: [
        {id: 'boat', name: 'Bateau', icon: 'sailboat'},
        {id: 'ship', name: 'Navire', icon: 'ship'},
        {id: 'submarine', name: 'Sous-marin', icon: 'shell'},
        {id: 'yacht', name: 'Yacht', icon: 'anchor'},
        {id: 'ferry', name: 'Ferry', icon: 'ship-wheel'},
        {id: 'jetski', name: 'Jet-ski', icon: 'waves'}
      ]
    },
    {
      id: 'bikes',
      name: 'Les Cycles',
      color: '#d946ef',
      members: [
        {id: 'bicycle', name: 'Bicyclette', icon: 'bike'},
        {id: 'motorcycle', name: 'Moto', icon: 'zap'},
        {id: 'scooter', name: 'Trottinette', icon: 'triangle'},
        {id: 'skateboard', name: 'Skateboard', icon: 'rectangle-horizontal'},
        {id: 'rollerblades', name: 'Rollers', icon: 'wind'},
        {id: 'unicycle', name: 'Monocycle', icon: 'target'}
      ]
    },
    {
      id: 'construction',
      name: 'Les Engins de Chantier',
      color: '#eab308',
      members: [
        {id: 'bulldozer', name: 'Bulldozer', icon: 'tractor'},
        {id: 'crane', name: 'Grue', icon: 'construction'},
        {id: 'excavator', name: 'Pelleteuse', icon: 'mountain'},
        {id: 'dump-truck', name: 'Camion-benne', icon: 'truck'},
        {id: 'loader', name: 'Chargeuse', icon: 'wrench'},
        {id: 'grader', name: 'Niveleuse', icon: 'minus'}
      ]
    },
    {
      id: 'public-transport',
      name: 'Les Transports Publics',
      color: '#22c55e',
      members: [
        {id: 'bus', name: 'Bus', icon: 'bus'},
        {id: 'tram', name: 'Tramway', icon: 'minus'},
        {id: 'metro', name: 'Métro', icon: 'train-front-tunnel'},
        {id: 'train', name: 'Train', icon: 'train'},
        {id: 'cable-car', name: 'Téléphérique', icon: 'cable'},
        {id: 'ferry-boat', name: 'Bateau-bus', icon: 'ship-wheel'}
      ]
    },
    {
      id: 'space',
      name: 'Les Explorateurs de l\'Espace',
      color: '#e879f9',
      members: [
        {id: 'spaceship', name: 'Vaisseau spatial', icon: 'rocket'},
        {id: 'satellite', name: 'Satellite', icon: 'satellite'},
        {id: 'space-station', name: 'Station spatiale', icon: 'home'},
        {id: 'rover', name: 'Rover', icon: 'car'},
        {id: 'space-shuttle', name: 'Navette spatiale', icon: 'plane'},
        {id: 'space-probe', name: 'Sonde spatiale', icon: 'search'}
      ]
    },
    {
      id: 'emergency',
      name: 'Les Urgences',
      color: '#b91c1c',
      members: [
        {id: 'fire-truck', name: 'Camion de pompiers', icon: 'flame'},
        {id: 'ambulance', name: 'Ambulance', icon: 'cross'},
        {id: 'police-car', name: 'Voiture de police', icon: 'shield'},
        {id: 'rescue-boat', name: 'Bateau de sauvetage', icon: 'waves'},
        {id: 'rescue-helicopter', name: 'Hélicoptère de sauvetage', icon: 'rotate-ccw'},
        {id: 'rescue-plane', name: 'Avion de sauvetage', icon: 'plane'}
      ]
    },
    {
      id: 'military',
      name: 'Les Militaires',
      color: '#f97316',
      members: [
        {id: 'tank', name: 'Char d\'assaut', icon: 'tractor'},
        {id: 'fighter-jet', name: 'Chasseur', icon: 'plane'},
        {id: 'helicopter-gunship', name: 'Hélicoptère de combat', icon: 'rotate-ccw'},
        {id: 'military-ship', name: 'Navire de guerre', icon: 'ship'},
        {id: 'military-transport', name: 'Transport militaire', icon: 'truck'},
        {id: 'drone-military', name: 'Drone militaire', icon: 'radio'}
      ]
    }
  ],
  jobs: [
    {
      id: 'medical',
      name: 'La Médecine',
      color: '#c026d3',
      members: [
        {id: 'doctor', name: 'Médecin', icon: 'stethoscope'},
        {id: 'nurse', name: 'Infirmière', icon: 'cross'},
        {id: 'dentist', name: 'Dentiste', icon: 'smile'},
        {id: 'pharmacist', name: 'Pharmacien', icon: 'pill'},
        {id: 'surgeon', name: 'Chirurgien', icon: 'scissors'},
        {id: 'paramedic', name: 'Ambulancier', icon: 'ambulance'}
      ]
    },
    {
      id: 'education',
      name: 'L\'Éducation',
      color: '#8b5cf6',
      members: [
        {id: 'teacher', name: 'Professeur', icon: 'school'},
        {id: 'student', name: 'Élève', icon: 'graduation-cap'},
        {id: 'principal', name: 'Directeur', icon: 'user'},
        {id: 'librarian', name: 'Bibliothécaire', icon: 'book'},
        {id: 'researcher', name: 'Chercheur', icon: 'microscope'},
        {id: 'coach', name: 'Coach sportif', icon: 'trophy'}
      ]
    },
    {
      id: 'safety',
      name: 'La Sécurité',
      color: '#e11d48',
      members: [
        {id: 'police', name: 'Policier', icon: 'siren'},
        {id: 'firefighter', name: 'Pompier', icon: 'flame'},
        {id: 'guard', name: 'Garde', icon: 'shield'},
        {id: 'detective', name: 'Détective', icon: 'search'},
        {id: 'lifeguard', name: 'Sauveteur', icon: 'waves'},
        {id: 'soldier', name: 'Soldat', icon: 'sword'}
      ]
    },
    {
      id: 'food',
      name: 'La Cuisine',
      color: '#facc15',
      members: [
        {id: 'chef', name: 'Chef', icon: 'chef-hat'},
        {id: 'waiter', name: 'Serveur', icon: 'utensils'},
        {id: 'baker', name: 'Boulanger', icon: 'wheat'},
        {id: 'barista', name: 'Barista', icon: 'coffee'},
        {id: 'butcher', name: 'Boucher', icon: 'scissors'},
        {id: 'sommelier', name: 'Sommelier', icon: 'wine'}
      ]
    },
    {
      id: 'arts',
      name: 'Les Arts',
      color: '#22c55e',
      members: [
        {id: 'artist', name: 'Artiste', icon: 'palette'},
        {id: 'musician', name: 'Musicien', icon: 'music'},
        {id: 'actor', name: 'Acteur', icon: 'theater'},
        {id: 'writer', name: 'Écrivain', icon: 'pen-tool'},
        {id: 'dancer', name: 'Danseur', icon: 'user'},
        {id: 'photographer', name: 'Photographe', icon: 'camera'}
      ]
    },
    {
      id: 'technology',
      name: 'La Technologie',
      color: '#0ea5e9',
      members: [
        {id: 'developer', name: 'Développeur', icon: 'laptop'},
        {id: 'engineer', name: 'Ingénieur', icon: 'notebook'},
        {id: 'scientist', name: 'Scientifique', icon: 'microscope'},
        {id: 'designer', name: 'Designer', icon: 'palette'},
        {id: 'technician', name: 'Technicien', icon: 'wrench'},
        {id: 'data-analyst', name: 'Analyste de données', icon: 'bar-chart'}
      ]
    },
    {
      id: 'business',
      name: 'Les Affaires',
      color: '#d946ef',
      members: [
        {id: 'entrepreneur', name: 'Entrepreneur', icon: 'briefcase'},
        {id: 'manager', name: 'Manager', icon: 'user'},
        {id: 'accountant', name: 'Comptable', icon: 'dollar-sign'},
        {id: 'marketer', name: 'Marketeur', icon: 'trending-up'},
        {id: 'salesperson', name: 'Vendeur', icon: 'shopping-cart'},
        {id: 'consultant', name: 'Consultant', icon: 'message-circle'}
      ]
    },
    {
      id: 'service',
      name: 'Les Services',
      color: '#4f46e5',
      members: [
        {id: 'hairdresser', name: 'Coiffeur', icon: 'scissors'},
        {id: 'plumber', name: 'Plombier', icon: 'droplets'},
        {id: 'electrician', name: 'Électricien', icon: 'lightbulb'},
        {id: 'car-mechanic', name: 'Mécanicien', icon: 'wrench'},
        {id: 'cleaner', name: 'Agent d\'entretien', icon: 'brush-cleaning'},
        {id: 'gardener', name: 'Jardinier', icon: 'sprout'}
      ]
    },
    {
      id: 'transport',
      name: 'Le Transport',
      color: '#14b8a6',
      members: [
        {id: 'driver', name: 'Chauffeur', icon: 'car'},
        {id: 'pilot', name: 'Pilote', icon: 'plane'},
        {id: 'conductor', name: 'Conducteur de train', icon: 'train'},
        {id: 'ship-captain', name: 'Capitaine de navire', icon: 'ship'},
        {id: 'bus-driver', name: 'Conducteur de bus', icon: 'bus'},
        {id: 'truck-driver', name: 'Conducteur de camion', icon: 'truck'}
      ]
    },
    {
      id: 'hospitality',
      name: 'L\'Hôtellerie',
      color: '#f59e0b',
      members: [
        {id: 'hotel-manager', name: 'Directeur d\'hôtel', icon: 'building'},
        {id: 'receptionist', name: 'Réceptionniste', icon: 'user'},
        {id: 'housekeeper', name: 'Femme de chambre', icon: 'brush-cleaning'},
        {id: 'concierge', name: 'Concierge', icon: 'key'},
        {id: 'bartender', name: 'Barman', icon: 'glass-water'},
        {id: 'waitstaff', name: 'Personnel de salle', icon: 'utensils'}
      ]
    }
  ],
  nature: [
    {
      id: 'trees',
      name: 'Les Arbres',
      color: '#10b981',
      members: [
        {id: 'oak', name: 'Chêne', icon: 'trees'},
        {id: 'pine', name: 'Sapin', icon: 'tree-pine'},
        {id: 'palm', name: 'Palmier', icon: 'palmtree'},
        {id: 'bamboo', name: 'Bambou', icon: 'bar-chart-3'},
        {id: 'maple', name: 'Érable', icon: 'leaf'},
        {id: 'willow', name: 'Saule', icon: 'tree-deciduous'}
      ]
    },
    {
      id: 'flowers',
      name: 'Les Fleurs',
      color: '#84cc16',
      members: [
        {id: 'rose', name: 'Rose', icon: 'flower'},
        {id: 'sunflower', name: 'Tournesol', icon: 'sun'},
        {id: 'tulip', name: 'Tulipe', icon: 'lightbulb'},
        {id: 'daisy', name: 'Marguerite', icon: 'sprout'},
        {id: 'lily', name: 'Lys', icon: 'flower-2'},
        {id: 'orchid', name: 'Orchidée', icon: 'leaf'}
      ]
    },
    {
      id: 'weather',
      name: 'Le Temps',
      color: '#0ea5e9',
      members: [
        {id: 'sun', name: 'Soleil', icon: 'sun'},
        {id: 'cloud', name: 'Nuage', icon: 'cloud'},
        {id: 'rain', name: 'Pluie', icon: 'cloud-rain'},
        {id: 'snow', name: 'Neige', icon: 'snowflake'},
        {id: 'lightning', name: 'Éclair', icon: 'zap'},
        {id: 'rainbow', name: 'Arc-en-ciel', icon: 'rainbow'}
      ]
    },
    {
      id: 'landscapes',
      name: 'Les Paysages',
      color: '#65a30d',
      members: [
        {id: 'mountain', name: 'Montagne', icon: 'mountain'},
        {id: 'volcano', name: 'Volcan', icon: 'flame'},
        {id: 'desert', name: 'Désert', icon: 'thermometer'},
        {id: 'forest', name: 'Forêt', icon: 'tree-pine'},
        {id: 'beach', name: 'Plage', icon: 'waves'},
        {id: 'glacier', name: 'Glacier', icon: 'snowflake'}
      ]
    },
    {
      id: 'animals',
      name: 'Les Animaux',
      color: '#eab308',
      members: [
        {id: 'lion', name: 'Lion', icon: 'crown'},
        {id: 'tiger', name: 'Tigre', icon: 'zap'},
        {id: 'bear', name: 'Ours', icon: 'shield'},
        {id: 'wolf', name: 'Loup', icon: 'moon'},
        {id: 'fox', name: 'Renard', icon: 'flame'},
        {id: 'lynx', name: 'Lynx', icon: 'eye'}
      ]
    },
    {
      id: 'rocks',
      name: 'Les Roches',
      color: '#d946ef',
      members: [
        {id: 'granite', name: 'Granite', icon: 'square'},
        {id: 'limestone', name: 'Calcaire', icon: 'layers'},
        {id: 'sandstone', name: 'Grès', icon: 'grid-3x3'},
        {id: 'basalt', name: 'Basalte', icon: 'hexagon'},
        {id: 'marble', name: 'Marbre', icon: 'sparkles'},
        {id: 'slate', name: 'Ardoise', icon: 'minus'}
      ]
    },
    {
      id: 'water-bodies',
      name: 'Les Plans d\'Eau',
      color: '#06b6d4',
      members: [
        {id: 'river', name: 'Rivière', icon: 'waves'},
        {id: 'lake', name: 'Lac', icon: 'circle'},
        {id: 'ocean', name: 'Océan', icon: 'droplets'},
        {id: 'pond', name: 'Étang', icon: 'droplet'},
        {id: 'waterfall', name: 'Chute d\'eau', icon: 'arrow-down'},
        {id: 'glacier-lake', name: 'Lac glaciaire', icon: 'snowflake'}
      ]
    },
    {
      id: 'sky',
      name: 'Le Ciel',
      color: '#6366f1',
      members: [
        {id: 'cloud', name: 'Nuage', icon: 'cloud'},
        {id: 'rainbow', name: 'Arc-en-ciel', icon: 'rainbow'},
        {id: 'star', name: 'Étoile', icon: 'star'},
        {id: 'moon', name: 'Lune', icon: 'moon'},
        {id: 'sunset', name: 'Coucher de soleil', icon: 'sunrise'},
        {id: 'aurora-borealis', name: 'Aurore boréale', icon: 'stars'}
      ]
    },
    {
      id: 'ecosystems',
      name: 'Les Écosystèmes',
      color: '#d946ef',
      members: [
        {id: 'rainforest', name: 'Forêt tropicale', icon: 'palmtree'},
        {id: 'desert', name: 'Désert', icon: 'wind'},
        {id: 'coral-reef', name: 'Récif corallien', icon: 'fish'},
        {id: 'tundra', name: 'Toundra', icon: 'snowflake'},
        {id: 'grassland', name: 'Prairie', icon: 'wheat'},
        {id: 'wetland', name: 'Zone humide', icon: 'droplets'}
      ]
    },
    {
      id: 'insects',
      name: 'Les Insectes',
      color: '#eab308',
      members: [
        {id: 'butterfly', name: 'Papillon', icon: 'wind'},
        {id: 'bee', name: 'Abeille', icon: 'hexagon'},
        {id: 'ant', name: 'Fourmi', icon: 'dot'},
        {id: 'dragonfly', name: 'Libellule', icon: 'bug'},
        {id: 'grasshopper', name: 'Sauterelle', icon: 'bug-play'},
        {id: 'ladybug', name: 'Coccinelle', icon: 'shield'}
      ]
    }
  ],
  fantasy: [
    {
      id: 'mythical-creatures',
      name: 'Créatures Mythiques',
      color: '#c026d3',
      members: [
        {id: 'dragon', name: 'Dragon', icon: 'flame'},
        {id: 'unicorn', name: 'Licorne', icon: 'unicornHead'},
        {id: 'phoenix', name: 'Phénix', icon: 'egg'},
        {id: 'griffin', name: 'Griffon', icon: 'bird'},
        {id: 'mermaid', name: 'Sirène', icon: 'waves'},
        {id: 'centaur', name: 'Centaure', icon: 'tree-pine'}
      ]
    },
    {
      id: 'magical-beings',
      name: 'Êtres Magiques',
      color: '#8b5cf6',
      members: [
        {id: 'wizard', name: 'Sorcier', icon: 'wand-sparkles'},
        {id: 'witch', name: 'Sorcière', icon: 'sparkles'},
        {id: 'fairy', name: 'Fée', icon: 'wand'},
        {id: 'elf', name: 'Elfe', icon: 'tree-pine'},
        {id: 'gnome', name: 'Gnome', icon: 'person-standing'},
        {id: 'troll', name: 'Troll', icon: 'skull'}
      ]
    },
    {
      id: 'fantasy-places',
      name: 'Lieux Fantastiques',
      color: '#e11d48',
      members: [
        {id: 'castle', name: 'Château', icon: 'castle'},
        {id: 'dungeon', name: 'Donjon', icon: 'grid-3x3'},
        {id: 'enchanted-forest', name: 'Forêt enchantée', icon: 'tree-pine'},
        {id: 'floating-island', name: 'Île flottante', icon: 'cloud'},
        {id: 'crystal-cave', name: 'Grotte de cristal', icon: 'sparkle'},
        {id: 'mystic-mountain', name: 'Montagne mystique', icon: 'mountain'}
      ]
    },
    {
      id: 'magical-items',
      name: 'Objets Magiques',
      color: '#facc15',
      members: [
        {id: 'magic-wand', name: 'Baguette magique', icon: 'wand'},
        {id: 'crystal-ball', name: 'Boule de cristal', icon: 'eye'},
        {id: 'enchanted-sword', name: 'Épée enchantée', icon: 'sword'},
        {id: 'magic-book', name: 'Livre magique', icon: 'book'},
        {id: 'potion', name: 'Potion', icon: 'test-tube'},
        {id: 'amulet', name: 'Amulette', icon: 'star'}
      ]
    },
    {
      id: 'fantasy-animals',
      name: 'Animaux Fantastiques',
      color: '#22c55e',
      members: [
        {id: 'phoenix', name: 'Phénix', icon: 'bird'},
        {id: 'dragon', name: 'Dragon', icon: 'flame'},
        {id: 'unicorn', name: 'Licorne', icon: 'star'},
        {id: 'basilisk', name: 'Basilic', icon: 'waves'},
        {id: 'chimera', name: 'Chimère', icon: 'crown'},
        {id: 'hydra', name: 'Hydre', icon: 'worm'}
      ]
    },
    {
      id: 'dark-creatures',
      name: 'Créatures Sombres',
      color: '#0ea5e9',
      members: [
        {id: 'vampire', name: 'Vampire', icon: 'moon'},
        {id: 'werewolf', name: 'Loup-garou', icon: 'triangle'},
        {id: 'zombie', name: 'Zombie', icon: 'skull'},
        {id: 'ghost', name: 'Fantôme', icon: 'ghost'},
        {id: 'demon', name: 'Démon', icon: 'flame'},
        {id: 'witch', name: 'Sorcière', icon: 'sparkles'}
      ]
    },
    {
      id: 'legendary-heroes',
      name: 'Héros Légendaires',
      color: '#f59e0b',
      members: [
        {id: 'knight', name: 'Chevalier', icon: 'shield-half'},
        {id: 'archer', name: 'Archer', icon: 'bow-arrow'},
        {id: 'paladin', name: 'Paladin', icon: 'shield'},
        {id: 'ranger', name: 'Rôdeur', icon: 'tent'},
        {id: 'bard', name: 'Barde', icon: 'music'},
        {id: 'assassin', name: 'Assassin', icon: 'sword'}
      ]
    },
    {
      id: 'fantasy-lands',
      name: 'Terres Fantastiques',
      color: '#14b8a6',
      members: [
        {id: 'neverland', name: 'Pays Imaginaire', icon: 'sparkles'},
        {id: 'middle-earth', name: 'Terre du Milieu', icon: 'globe'},
        {id: 'narnia', name: 'Narnia', icon: 'snowflake'},
        {id: 'hogwarts', name: 'Poudlard', icon: 'castle'},
        {id: 'atlantis', name: 'Atlantide', icon: 'waves'},
        {id: 'elysium', name: 'Élysée', icon: 'star'}
      ]
    },
    {
      id: 'magical-phenomena',
      name: 'Phénomènes Magiques',
      color: '#6366f1',
      members: [
        {id: 'time-travel', name: 'Voyage dans le temps', icon: 'clock'},
        {id: 'teleportation', name: 'Téléportation', icon: 'rotate-cw'},
        {id: 'shape-shifting', name: 'Métamorphose', icon: 'zap'},
        {id: 'invisibility', name: 'Invisibilité', icon: 'ghost'},
        {id: 'mind-reading', name: 'Lecture de pensée', icon: 'brain'},
        {id: 'elemental-control', name: 'Contrôle des éléments', icon: 'wind'}
      ]
    },
    {
      id: 'fantasy-vehicles',
      name: 'Véhicules Fantastiques',
      color: '#d946ef',
      members: [
        {id: 'flying-carpet', name: 'Tapis volant', icon: 'cloud'},
        {id: 'dragon-rider', name: 'Cavalier de dragon', icon: 'flame'},
        {id: 'magic-boat', name: 'Bateau magique', icon: 'ship'},
        {id: 'enchanted-chariot', name: 'Char enchanté', icon: 'car'},
        {id: 'spellbound-train', name: 'Train ensorcelé', icon: 'train'},
        {id: 'mystic-bicycle', name: 'Vélo mystique', icon: 'bike'}
      ]
    }
  ],
  space: [
    {
      id: 'planets',
      name: 'Les Planètes',
      color: '#4f46e5',
      members: [
        {id: 'mercury', name: 'Mercure', icon: 'zap'},
        {id: 'venus', name: 'Vénus', icon: 'heart'},
        {id: 'earth', name: 'Terre', icon: 'globe'},
        {id: 'mars', name: 'Mars', icon: 'flame'},
        {id: 'jupiter', name: 'Jupiter', icon: 'crown'},
        {id: 'saturn', name: 'Saturne', icon: 'target'}
      ]
    },
    {
      id: 'constellations',
      name: 'Les Constellations',
      color: '#d946ef',
      members: [
        {id: 'orion', name: 'Orion', icon: 'star'},
        {id: 'ursa-major', name: 'Grande Ourse', icon: 'panda'},
        {id: 'cassiopeia', name: 'Cassiopée', icon: 'crown'},
        {id: 'leo', name: 'Lion', icon: 'cat'},
        {id: 'scorpius', name: 'Scorpion', icon: 'bug'},
        {id: 'cygnus', name: 'Cygne', icon: 'bird'}
      ]
    },
    {
      id: 'spacecraft',
      name: 'Les Vaisseaux Spatiaux',
      color: '#a855f7',
      members: [
        {id: 'rocket', name: 'Fusée', icon: 'rocket'},
        {id: 'shuttle', name: 'Navette', icon: 'plane'},
        {id: 'satellite', name: 'Satellite', icon: 'satellite'},
        {id: 'space-station', name: 'Station spatiale', icon: 'telescope'},
        {id: 'rover', name: 'Rover', icon: 'car'},
        {id: 'probe', name: 'Sonde', icon: 'radio'}
      ]
    },
    {
      id: 'astronauts',
      name: 'Les Astronautes',
      color: '#2563eb',
      members: [
        {id: 'commander', name: 'Commandant', icon: 'crown'},
        {id: 'pilot', name: 'Pilote', icon: 'user'},
        {id: 'engineer', name: 'Ingénieur', icon: 'wrench'},
        {id: 'scientist', name: 'Scientifique', icon: 'microscope'},
        {id: 'medic', name: 'Médecin', icon: 'cross'},
        {id: 'specialist', name: 'Spécialiste', icon: 'laptop'}
      ]
    },
    {
      id: 'galaxies',
      name: 'Les Galaxies',
      color: '#d946ef',
      members: [
        {id: 'milky-way', name: 'Voie Lactée', icon: 'stars'},
        {id: 'andromeda', name: 'Andromède', icon: 'star'},
        {id: 'whirlpool', name: 'Tourbillon', icon: 'wind'},
        {id: 'sombrero', name: 'Sombrero', icon: 'mountain'},
        {id: 'cartwheel', name: 'Roue de chariot', icon: 'rotate-cw'},
        {id: 'pinwheel', name: 'Moulinet', icon: 'target'}
      ]
    },
    {
      id: 'space-phenomena',
      name: 'Phénomènes Spatiaux',
      color: '#06b6d4',
      members: [
        {id: 'black-hole', name: 'Trou noir', icon: 'minus'},
        {id: 'supernova', name: 'Supernova', icon: 'bomb'},
        {id: 'nebula', name: 'Nébuleuse', icon: 'cloud'},
        {id: 'pulsar', name: 'Pulsar', icon: 'radio'},
        {id: 'quasar', name: 'Quasar', icon: 'zap'},
        {id: 'asteroid', name: 'Astéroïde', icon: 'orbit'}
      ]
    },
    {
      id: 'space-missions',
      name: 'Missions Spatiales',
      color: '#65a30d',
      members: [
        {id: 'apollo', name: 'Apollo', icon: 'moon'},
        {id: 'voyager', name: 'Voyager', icon: 'satellite'},
        {id: 'hubble', name: 'Hubble', icon: 'search'},
        {id: 'cassini', name: 'Cassini', icon: 'torus'},
        {id: 'curiosity', name: 'Curiosity', icon: 'bot'},
        {id: 'perseverance', name: 'Perseverance', icon: 'car'}
      ]
    },
    {
      id: 'alien-species',
      name: 'Espèces Extraterrestres',
      color: '#14b8a6',
      members: [
        {id: 'martian', name: 'Martien', icon: 'user'},
        {id: 'gray', name: 'Petit Gris', icon: 'person-standing'},
        {id: 'reptilian', name: 'Reptilien', icon: 'turtle'},
        {id: 'nordic', name: 'Nordique', icon: 'snowflake'},
        {id: 'insectoid', name: 'Insectoïde', icon: 'bug'},
        {id: 'energy-being', name: 'Être d\'énergie', icon: 'zap'}
      ]
    },
    {
      id: 'space-tools',
      name: 'Outils Spatiaux',
      color: '#e11d48',
      members: [
        {id: 'telescope', name: 'Télescope', icon: 'search'},
        {id: 'space-suit', name: 'Combinaison', icon: 'user'},
        {id: 'oxygen-tank', name: 'Réservoir d\'oxygène', icon: 'test-tube'},
        {id: 'laser', name: 'Laser', icon: 'flashlight'},
        {id: 'communicator', name: 'Communicateur', icon: 'radio'},
        {id: 'scanner', name: 'Scanner', icon: 'smartphone'}
      ]
    },
    {
      id: 'space-colonies',
      name: 'Colonies Spatiales',
      color: '#eab308',
      members: [
        {id: 'moon-base', name: 'Base lunaire', icon: 'moon'},
        {id: 'mars-colony', name: 'Colonie martienne', icon: 'home'},
        {id: 'space-city', name: 'Cité spatiale', icon: 'building'},
        {id: 'mining-station', name: 'Station minière', icon: 'pickaxe'},
        {id: 'research-outpost', name: 'Avant-poste de recherche', icon: 'microscope'},
        {id: 'trade-hub', name: 'Hub commercial', icon: 'store'}
      ]
    }
  ],
  food: [
    {
      id: 'fruits',
      name: 'Les Fruits',
      color: '#f97316',
      members: [
        {id: 'apple', name: 'Pomme', icon: 'apple'},
        {id: 'banana', name: 'Banane', icon: 'banana'},
        {id: 'orange', name: 'Orange', icon: 'sun'},
        {id: 'strawberry', name: 'Fraise', icon: 'heart'},
        {id: 'grapes', name: 'Raisins', icon: 'droplets'},
        {id: 'watermelon', name: 'Pastèque', icon: 'waves'}
      ]
    },
    {
      id: 'vegetables',
      name: 'Les Légumes',
      color: '#22c55e',
      members: [
        {id: 'carrot', name: 'Carotte', icon: 'carrot'},
        {id: 'broccoli', name: 'Brocoli', icon: 'tree-pine'},
        {id: 'tomato', name: 'Tomate', icon: 'heart'},
        {id: 'corn', name: 'Maïs', icon: 'wheat'},
        {id: 'potato', name: 'Pomme de terre', icon: 'mountain'},
        {id: 'bell-pepper', name: 'Poivron', icon: 'bell'}
      ]
    },
    {
      id: 'desserts',
      name: 'Les Desserts',
      color: '#e879f9',
      members: [
        {id: 'cake', name: 'Gâteau', icon: 'cake'},
        {id: 'ice-cream', name: 'Glace', icon: 'ice-cream'},
        {id: 'cookie', name: 'Cookie', icon: 'cookie'},
        {id: 'donut', name: 'Donut', icon: 'target'},
        {id: 'chocolate', name: 'Chocolat', icon: 'square'},
        {id: 'pie', name: 'Tarte', icon: 'triangle'}
      ]
    },
    {
      id: 'fast-food',
      name: 'Fast Food',
      color: '#dc2626',
      members: [
        {id: 'hamburger', name: 'Hamburger', icon: 'hamburger'},
        {id: 'pizza', name: 'Pizza', icon: 'pizza'},
        {id: 'hot-dog', name: 'Hot-dog', icon: 'hotDog'},
        {id: 'soda', name: 'Soda', icon: 'cup-soda'},
        {id: 'taco', name: 'Taco', icon: 'pepperChilli'},
        {id: 'burrito', name: 'Burrito', icon: 'shell'}
      ]
    },
    {
      id: 'breakfast',
      name: 'Petit Déjeuner',
      color: '#facc15',
      members: [
        {id: 'croissant', name: 'Croissant', icon: 'croissant'},
        {id: 'pancake', name: 'Pancake', icon: 'pancakes'},
        {id: 'bacon', name: 'Bacon', icon: 'bacon'},
        {id: 'egg', name: 'Œuf', icon: 'egg'},
        {id: 'toast', name: 'Toast', icon: 'toast'},
        {id: 'cereal', name: 'Céréales', icon: 'wheat'}
      ]
    },
    {
      id: 'seafood',
      name: 'Fruits de Mer',
      color: '#0ea5e9',
      members: [
        {id: 'fish', name: 'Poisson', icon: 'fish'},
        {id: 'shrimp', name: 'Crevette', icon: 'shrimp'},
        {id: 'crab', name: 'Crabe', icon: 'crab'},
        {id: 'lobster', name: 'Homard', icon: 'scissors'},
        {id: 'oyster', name: 'Huître', icon: 'shell'},
        {id: 'squid', name: 'Calmar', icon: 'grip'}
      ]
    },
    {
      id: 'beverages',
      name: 'Les Boissons',
      color: '#4f46e5',
      members: [
        {id: 'coffee', name: 'Café', icon: 'coffee'},
        {id: 'tea', name: 'Thé', icon: 'mugTeabag'},
        {id: 'juice', name: 'Jus', icon: 'package'},
        {id: 'soda', name: 'Soda', icon: 'cup-soda'},
        {id: 'wine', name: 'Vin', icon: 'wine'},
        {id: 'beer', name: 'Bière', icon: 'beer'}
      ]
    },
    {
      id: 'dairy',
      name: 'Produits Laitiers',
      color: '#fde047',
      members: [
        {id: 'milk', name: 'Lait', icon: 'milk'},
        {id: 'cheese', name: 'Fromage', icon: 'cheese'},
        {id: 'yogurt', name: 'Yaourt', icon: 'milk'},
        {id: 'butter', name: 'Beurre', icon: 'square'},
        {id: 'cream', name: 'Crème', icon: 'milk'},
        {id: 'ice-cream', name: 'Glace', icon: 'ice-cream'}
      ]
    },
    {
      id: 'spices',
      name: 'Les Épices',
      color: '#ea580c',
      members: [
        {id: 'salt', name: 'Sel', icon: 'beaker'},
        {id: 'pepper', name: 'Poivre', icon: 'flask-conical'},
        {id: 'garlic', name: 'Ail', icon: 'garlic'},
        {id: 'ginger', name: 'Gingembre', icon: 'zap'},
        {id: 'basil', name: 'Basilic', icon: 'leafy-green'},
        {id: 'oregano', name: 'Origan', icon: 'sprout'}
      ]
    },
    {
      id: 'grains',
      name: 'Les Céréales',
      color: '#eab308',
      members: [
        {id: 'rice', name: 'Riz', icon: 'bowlChopsticks'},
        {id: 'wheat', name: 'Blé', icon: 'wheat'},
        {id: 'oats', name: 'Avoine', icon: 'soup'},
        {id: 'quinoa', name: 'Quinoa', icon: 'sprout'},
        {id: 'barley', name: 'Orge', icon: 'beer'},
        {id: 'corn', name: 'Maïs', icon: 'popcorn'}
      ]
    }
  ],
  sports: [
    {
      id: 'ball-sports',
      name: 'Sports de Balle',
      color: '#84cc16',
      members: [
        {id: 'soccer', name: 'Football', icon: 'football'},
        {id: 'basketball', name: 'Basketball', icon: 'basketball'},
        {id: 'tennis', name: 'Tennis', icon: 'tennisRacket'},
        {id: 'volleyball', name: 'Volleyball', icon: 'volleyball'},
        {id: 'rugby', name: 'Rugby', icon: 'football'},
        {id: 'ping-pong', name: 'Ping-pong', icon: 'batBall'}
      ]
    },
    {
      id: 'water-sports',
      name: 'Sports Aquatiques',
      color: '#0ea5e9',
      members: [
        {id: 'swimming', name: 'Natation', icon: 'waves'},
        {id: 'surfing', name: 'Surf', icon: 'wind'},
        {id: 'diving', name: 'Plongée', icon: 'arrow-down'},
        {id: 'water-polo', name: 'Water-polo', icon: 'target'},
        {id: 'sailing', name: 'Voile', icon: 'sailboat'},
        {id: 'rowing', name: 'Aviron', icon: 'kayak'}
      ]
    },
    {
      id: 'winter-sports',
      name: 'Sports d\'Hiver',
      color: '#6366f1',
      members: [
        {id: 'skiing', name: 'Ski', icon: 'skis'},
        {id: 'snowboarding', name: 'Snowboard', icon: 'snowboard'},
        {id: 'ice-hockey', name: 'Hockey sur glace', icon: 'hockey'},
        {id: 'figure-skating', name: 'Patinage artistique', icon: 'iceSkate'},
        {id: 'curling', name: 'Curling', icon: 'target'},
        {id: 'bobsled', name: 'Bobsleigh', icon: 'footprints'}
      ]
    },
    {
      id: 'track-field',
      name: 'Athlétisme',
      color: '#facc15',
      members: [
        {id: 'running', name: 'Course', icon: 'footprints'},
        {id: 'jumping', name: 'Saut', icon: 'arrow-up'},
        {id: 'throwing', name: 'Lancer', icon: 'target'},
        {id: 'marathon', name: 'Marathon', icon: 'timer'},
        {id: 'hurdles', name: 'Haies', icon: 'bar-chart'},
        {id: 'pole-vault', name: 'Saut à la perche', icon: 'trending-up'}
      ]
    },
    {
      id: 'combat-sports',
      name: 'Sports de Combat',
      color: '#dc2626',
      members: [
        {id: 'boxing', name: 'Boxe', icon: 'hand'},
        {id: 'karate', name: 'Karaté', icon: 'slash'},
        {id: 'judo', name: 'Judo', icon: 'arrow-down-up'},
        {id: 'wrestling', name: 'Lutte', icon: 'handshake'},
        {id: 'taekwondo', name: 'Taekwondo', icon: 'tornado'},
        {id: 'fencing', name: 'Escrime', icon: 'sword'}
      ]
    },
    {
      id: 'gymnastics',
      name: 'Gymnastique',
      color: '#d946ef',
      members: [
        {id: 'floor-exercise', name: 'Sol', icon: 'square'},
        {id: 'balance-beam', name: 'Poutre', icon: 'minus'},
        {id: 'uneven-bars', name: 'Barres asymétriques', icon: 'bar-chart-2'},
        {id: 'vault', name: 'Saut de cheval', icon: 'arrow-up-right'},
        {id: 'rings', name: 'Anneaux', icon: 'circle'},
        {id: 'parallel-bars', name: 'Barres parallèles', icon: 'equal'}
      ]
    },
    {
      id: 'cycling-sports',
      name: 'Sports Cyclistes',
      color: '#10b981',
      members: [
        {id: 'road-cycling', name: 'Cyclisme sur route', icon: 'bike'},
        {id: 'mountain-biking', name: 'VTT', icon: 'mountain'},
        {id: 'bmx', name: 'BMX', icon: 'zap'},
        {id: 'track-cycling', name: 'Cyclisme sur piste', icon: 'rotate-ccw'},
        {id: 'cyclocross', name: 'Cyclo-cross', icon: 'crosshair'},
        {id: 'triathlon', name: 'Triathlon', icon: 'activity'}
      ]
    },
    {
      id: 'racquet-sports',
      name: 'Sports de Raquette',
      color: '#c026d3',
      members: [
        {id: 'tennis', name: 'Tennis', icon: 'tennisRacket'},
        {id: 'badminton', name: 'Badminton', icon: 'feather'},
        {id: 'squash', name: 'Squash', icon: 'square'},
        {id: 'table-tennis', name: 'Tennis de table', icon: 'batBall'},
        {id: 'racquetball', name: 'Racquetball', icon: 'layout-grid'},
        {id: 'padel', name: 'Padel', icon: 'atom'}
      ]
    },
    {
      id: 'extreme-sports',
      name: 'Sports Extrêmes',
      color: '#f59e0b',
      members: [
        {id: 'skateboarding', name: 'Skateboard', icon: 'zap'},
        {id: 'rock-climbing', name: 'Escalade', icon: 'mountain'},
        {id: 'bungee-jumping', name: 'Saut à l\'élastique', icon: 'arrow-down'},
        {id: 'paragliding', name: 'Parapente', icon: 'wind'},
        {id: 'base-jumping', name: 'Base jump', icon: 'arrow-down-circle'},
        {id: 'wingsuit', name: 'Combinaison ailée', icon: 'plane'}
      ]
    },
    {
      id: 'team-sports',
      name: 'Sports d\'Équipe',
      color: '#14b8a6',
      members: [
        {id: 'soccer-team', name: 'Équipe de football', icon: 'soccerBall'},
        {id: 'basketball-team', name: 'Équipe de basket', icon: 'basketball'},
        {id: 'volleyball-team', name: 'Équipe de volley', icon: 'volleyball'},
        {id: 'rugby-team', name: 'Équipe de rugby', icon: 'football'},
        {id: 'hockey-team', name: 'Équipe de hockey', icon: 'hockey'},
        {id: 'baseball-team', name: 'Équipe de baseball', icon: 'baseball'}
      ]
    }
  ]
};
