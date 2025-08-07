import { Family, Theme } from '@/types/game';

export const COMPLETE_FAMILY_COUNT = 6; // Number of members in a complete family
export const MAX_FAMILIES = 10; // Maximum number of families in the game

export const FAMILIES_DATA: Record<Theme, Family[]> = {
  original: [
    {
      id: 'family1',
      name: 'Famille Martin',
      color: 'hsl(0 85% 55%)',
      members: [
        {id: 'grandfather1', name: 'Grand-père', emoji: '👴'},
        {id: 'grandmother1', name: 'Grand-mère', emoji: '👵'},
        {id: 'father1', name: 'Père', emoji: '👨'},
        {id: 'mother1', name: 'Mère', emoji: '👩'},
        {id: 'son1', name: 'Fils', emoji: '👦'},
        {id: 'daughter1', name: 'Fille', emoji: '👧'}
      ]
    },
    {
      id: 'family2',
      name: 'Famille Dubois',
      color: 'hsl(120 85% 45%)',
      members: [
        {id: 'grandfather2', name: 'Grand-père', emoji: '👴'},
        {id: 'grandmother2', name: 'Grand-mère', emoji: '👵'},
        {id: 'father2', name: 'Père', emoji: '👨'},
        {id: 'mother2', name: 'Mère', emoji: '👩'},
        {id: 'son2', name: 'Fils', emoji: '👦'},
        {id: 'daughter2', name: 'Fille', emoji: '👧'}
      ]
    },
    {
      id: 'family3',
      name: 'Famille Bernard',
      color: 'hsl(240 85% 55%)',
      members: [
        {id: 'grandfather3', name: 'Grand-père', emoji: '👴'},
        {id: 'grandmother3', name: 'Grand-mère', emoji: '👵'},
        {id: 'father3', name: 'Père', emoji: '👨'},
        {id: 'mother3', name: 'Mère', emoji: '👩'},
        {id: 'son3', name: 'Fils', emoji: '👦'},
        {id: 'daughter3', name: 'Fille', emoji: '👧'}
      ]
    },
    {
      id: 'family4',
      name: 'Famille Petit',
      color: 'hsl(60 85% 55%)',
      members: [
        {id: 'grandfather4', name: 'Grand-père', emoji: '👴'},
        {id: 'grandmother4', name: 'Grand-mère', emoji: '👵'},
        {id: 'father4', name: 'Père', emoji: '👨'},
        {id: 'mother4', name: 'Mère', emoji: '👩'},
        {id: 'son4', name: 'Fils', emoji: '👦'},
        {id: 'daughter4', name: 'Fille', emoji: '👧'}
      ]
    },
    {
      id: 'family5',
      name: 'Famille Moreau',
      color: 'hsl(300 85% 55%)',
      members: [
        {id: 'grandfather5', name: 'Grand-père', emoji: '👴'},
        {id: 'grandmother5', name: 'Grand-mère', emoji: '👵'},
        {id: 'father5', name: 'Père', emoji: '👨'},
        {id: 'mother5', name: 'Mère', emoji: '👩'},
        {id: 'son5', name: 'Fils', emoji: '👦'},
        {id: 'daughter5', name: 'Fille', emoji: '👧'}
      ]
    },
    {
      id: 'family6',
      name: 'Famille Leroy',
      color: 'hsl(180 85% 45%)',
      members: [
        {id: 'grandfather6', name: 'Grand-père', emoji: '👴'},
        {id: 'grandmother6', name: 'Grand-mère', emoji: '👵'},
        {id: 'father6', name: 'Père', emoji: '👨'},
        {id: 'mother6', name: 'Mère', emoji: '👩'},
        {id: 'son6', name: 'Fils', emoji: '👦'},
        {id: 'daughter6', name: 'Fille', emoji: '👧'}
      ]
    },
    {
      id: 'family7',
      name: 'Famille Fournier',
      color: 'hsl(30 85% 55%)',
      members: [
        {id: 'grandfather7', name: 'Grand-père', emoji: '👴'},
        {id: 'grandmother7', name: 'Grand-mère', emoji: '👵'},
        {id: 'father7', name: 'Père', emoji: '👨'},
        {id: 'mother7', name: 'Mère', emoji: '👩'},
        {id: 'son7', name: 'Fils', emoji: '👦'},
        {id: 'daughter7', name: 'Fille', emoji: '👧'}
      ]
    },
    {
      id: 'family8',
      name: 'Famille Girard',
      color: 'hsl(330 85% 55%)',
      members: [
        {id: 'grandfather8', name: 'Grand-père', emoji: '👴'},
        {id: 'grandmother8', name: 'Grand-mère', emoji: '👵'},
        {id: 'father8', name: 'Père', emoji: '👨'},
        {id: 'mother8', name: 'Mère', emoji: '👩'},
        {id: 'son8', name: 'Fils', emoji: '👦'},
        {id: 'daughter8', name: 'Fille', emoji: '👧'}
      ]
    },
    {
      id: 'family9',
      name: 'Famille Bonnet',
      color: 'hsl(270 85% 55%)',
      members: [
        {id: 'grandfather9', name: 'Grand-père', emoji: '👴'},
        {id: 'grandmother9', name: 'Grand-mère', emoji: '👵'},
        {id: 'father9', name: 'Père', emoji: '👨'},
        {id: 'mother9', name: 'Mère', emoji: '👩'},
        {id: 'son9', name: 'Fils', emoji: '👦'},
        {id: 'daughter9', name: 'Fille', emoji: '👧'}
      ]
    },
    {
      id: 'family10',
      name: 'Famille Lambert',
      color: 'hsl(90 85% 45%)',
      members: [
        {id: 'grandfather10', name: 'Grand-père', emoji: '👴'},
        {id: 'grandmother10', name: 'Grand-mère', emoji: '👵'},
        {id: 'father10', name: 'Père', emoji: '👨'},
        {id: 'mother10', name: 'Mère', emoji: '👩'},
        {id: 'son10', name: 'Fils', emoji: '👦'},
        {id: 'daughter10', name: 'Fille', emoji: '👧'}
      ]
    }
  ],
  animals: [
    {
      id: 'cats',
      name: 'Les Félins',
      color: 'hsl(35 85% 55%)',
      members: [
        {id: 'lion', name: 'Lion', emoji: '🦁'},
        {id: 'tiger', name: 'Tigre', emoji: '🐅'},
        {id: 'leopard', name: 'Léopard', emoji: '🐆'},
        {id: 'cat', name: 'Chat', emoji: '🐱'},
        {id: 'panther', name: 'Panthère', emoji: '🐈‍⬛'},
        {id: 'lynx', name: 'Lynx', emoji: '😺'}
      ]
    },
    {
      id: 'birds',
      name: 'Les Oiseaux',
      color: 'hsl(15 85% 65%)',
      members: [
        {id: 'eagle', name: 'Aigle', emoji: '🦅'},
        {id: 'owl', name: 'Hibou', emoji: '🦉'},
        {id: 'parrot', name: 'Perroquet', emoji: '🦜'},
        {id: 'penguin', name: 'Pingouin', emoji: '🐧'},
        {id: 'flamingo', name: 'Flamant', emoji: '🦩'},
        {id: 'peacock', name: 'Paon', emoji: '🦚'}
      ]
    },
    {
      id: 'marine',
      name: 'Les Marins',
      color: 'hsl(200 85% 55%)',
      members: [
        {id: 'whale', name: 'Baleine', emoji: '🐋'},
        {id: 'dolphin', name: 'Dauphin', emoji: '🐬'},
        {id: 'shark', name: 'Requin', emoji: '🦈'},
        {id: 'octopus', name: 'Pieuvre', emoji: '🐙'},
        {id: 'seal', name: 'Phoque', emoji: '🦭'},
        {id: 'crab', name: 'Crabe', emoji: '🦀'}
      ]
    },
    {
      id: 'farm',
      name: 'La Ferme',
      color: 'hsl(120 85% 45%)',
      members: [
        {id: 'cow', name: 'Vache', emoji: '🐄'},
        {id: 'pig', name: 'Cochon', emoji: '🐷'},
        {id: 'chicken', name: 'Poule', emoji: '🐔'},
        {id: 'sheep', name: 'Mouton', emoji: '🐑'},
        {id: 'horse', name: 'Cheval', emoji: '🐎'},
        {id: 'goat', name: 'Chèvre', emoji: '🐐'}
      ]
    },
    {
      id: 'wild',
      name: 'Les Sauvages',
      color: 'hsl(280 85% 55%)',
      members: [
        {id: 'elephant', name: 'Éléphant', emoji: '🐘'},
        {id: 'giraffe', name: 'Girafe', emoji: '🦒'},
        {id: 'zebra', name: 'Zèbre', emoji: '🦓'},
        {id: 'rhino', name: 'Rhinocéros', emoji: '🦏'},
        {id: 'hippo', name: 'Hippopotame', emoji: '🦛'},
        {id: 'gorilla', name: 'Gorille', emoji: '🦍'}
      ]
    },
    {
      id: 'insects',
      name: 'Les Insectes',
      color: 'hsl(60 85% 55%)',
      members: [
        {id: 'bee', name: 'Abeille', emoji: '🐝'},
        {id: 'butterfly', name: 'Papillon', emoji: '🦋'},
        {id: 'spider', name: 'Araignée', emoji: '🕷️'},
        {id: 'ant', name: 'Fourmi', emoji: '🐜'},
        {id: 'ladybug', name: 'Coccinelle', emoji: '🐞'},
        {id: 'mosquito', name: 'Moustique', emoji: '🦟'}
      ]
    },
    {
      id: 'reptiles',
      name: 'Les Reptiles',
      color: 'hsl(180 85% 55%)',
      members: [
        {id: 'snake', name: 'Serpent', emoji: '🐍'},
        {id: 'crocodile', name: 'Crocodile', emoji: '🐊'},
        {id: 'lizard', name: 'Lézard', emoji: '🦎'},
        {id: 'turtle', name: 'Tortue', emoji: '🐢'},
        {id: 'chameleon', name: 'Caméléon', emoji: '🦎'},
        {id: 'gecko', name: 'Gecko', emoji: '🦎'}
      ]
    },
    {
      id: 'amphibians',
      name: 'Les Amphibiens',
      color: 'hsl(240 85% 65%)',
      members: [
        {id: 'frog', name: 'Grenouille', emoji: '🐸'},
        {id: 'toad', name: 'Crapaud', emoji: '🐸'},
        {id: 'salamander', name: 'Salamandre', emoji: '🦎'},
        {id: 'newt', name: 'Triton', emoji: '🦎'},
        {id: 'axolotl', name: 'Axolotl', emoji: '🐠'},
        {id: 'caecilian', name: 'Cécilien', emoji: '🐍'}
      ]
    },
    {
      id: 'rodents',
      name: 'Les Rongeurs',
      color: 'hsl(300 85% 55%)',
      members: [
        {id: 'mouse', name: 'Souris', emoji: '🐭'},
        {id: 'rat', name: 'Rat', emoji: '🐀'},
        {id: 'squirrel', name: 'Écureuil', emoji: '🐿️'},
        {id: 'hamster', name: 'Hamster', emoji: '🐹'},
        {id: 'guinea-pig', name: 'Cobaye', emoji: '🐹'},
        {id: 'beaver', name: 'Castor', emoji: '🦫'}
      ]
    },
    {
      id: 'bats',
      name: 'Les Chauves-souris',
      color: 'hsl(330 85% 55%)',
      members: [
        {id: 'fruit-bat', name: 'Chauve-souris frugivore', emoji: '🦇'},
        {id: 'vampire-bat', name: 'Chauve-souris vampire', emoji: '🦇'},
        {id: 'little-brown-bat', name: 'Chauve-souris brune', emoji: '🦇'},
        {id: 'big-eared-bat', name: 'Chauve-souris aux grandes oreilles', emoji: '🦇',},
        {id: 'pipistrelle', name: 'Pipistrelle', emoji: '🦇'},
        {id: 'flying-fox', name: 'Renard volant', emoji: '🦇'}
      ]
    }
  ],
  vehicles: [
    {
      id: 'cars',
      name: 'Les Voitures',
      color: 'hsl(220 85% 55%)',
      members: [
        {id: 'car', name: 'Voiture', emoji: '🚗'},
        {id: 'taxi', name: 'Taxi', emoji: '🚕'},
        {id: 'police', name: 'Police', emoji: '🚓'},
        {id: 'ambulance', name: 'Ambulance', emoji: '🚑'},
        {id: 'sportcar', name: 'Sportive', emoji: '🏎️'},
        {id: 'suv', name: 'SUV', emoji: '🚙'}
      ]
    },
    {
      id: 'trucks',
      name: 'Les Camions',
      color: 'hsl(200 85% 65%)',
      members: [
        {id: 'truck', name: 'Camion', emoji: '🚚'},
        {id: 'fire', name: 'Pompiers', emoji: '🚒'},
        {id: 'garbage', name: 'Éboueurs', emoji: '🗑️'},
        {id: 'delivery', name: 'Livraison', emoji: '📦'},
        {id: 'cement', name: 'Bétonneuse', emoji: '🏗️'},
        {id: 'tow', name: 'Dépanneuse', emoji: '🚨'}
      ]
    },
    {
      id: 'air',
      name: 'Les Aériens',
      color: 'hsl(180 85% 55%)',
      members: [
        {id: 'plane', name: 'Avion', emoji: '✈️'},
        {id: 'helicopter', name: 'Hélicoptère', emoji: '🚁'},
        {id: 'rocket', name: 'Fusée', emoji: '🚀'},
        {id: 'balloon', name: 'Montgolfière', emoji: '🎈'},
        {id: 'jet', name: 'Jet privé', emoji: '🛩️'},
        {id: 'drone', name: 'Drone', emoji: '📡'}
      ]
    },
    {
      id: 'water',
      name: 'Les Marins',
      color: 'hsl(240 85% 65%)',
      members: [
        {id: 'boat', name: 'Bateau', emoji: '⛵'},
        {id: 'ship', name: 'Navire', emoji: '🚢'},
        {id: 'submarine', name: 'Sous-marin', emoji: '🏊'},
        {id: 'yacht', name: 'Yacht', emoji: '🛥️'},
        {id: 'ferry', name: 'Ferry', emoji: '⛴️'},
        {id: 'jetski', name: 'Jet-ski', emoji: '🏄'}
      ]
    },
    {
      id: 'bikes',
      name: 'Les Cycles',
      color: 'hsl(300 85% 55%)',
      members: [
        {id: 'bicycle', name: 'Bicyclette', emoji: '🚲'},
        {id: 'motorcycle', name: 'Moto', emoji: '🏍️'},
        {id: 'scooter', name: 'Trottinette', emoji: '🛴'},
        {id: 'skateboard', name: 'Skateboard', emoji: '🛹'},
        {id: 'rollerblades', name: 'Rollers', emoji: '🛼'},
        {id: 'unicycle', name: 'Monocycle', emoji: '🎪'}
      ]
    },
    {
      id: 'construction',
      name: 'Les Engins de Chantier',
      color: 'hsl(60 85% 55%)',
      members: [
        {id: 'bulldozer', name: 'Bulldozer', emoji: '🚜'},
        {id: 'crane', name: 'Grue', emoji: '🏗️'},
        {id: 'excavator', name: 'Pelleteuse', emoji: '🚧'},
        {id: 'dump-truck', name: 'Camion-benne', emoji: '🚛'},
        {id: 'loader', name: 'Chargeuse', emoji: '🛠️'},
        {id: 'grader', name: 'Niveleuse', emoji: '🛤️'}
      ]
    },
    {
      id: 'public-transport',
      name: 'Les Transports Publics',
      color: 'hsl(120 85% 45%)',
      members: [
        {id: 'bus', name: 'Bus', emoji: '🚌'},
        {id: 'tram', name: 'Tramway', emoji: '🚊'},
        {id: 'metro', name: 'Métro', emoji: '🚇'},
        {id: 'train', name: 'Train', emoji: '🚆'},
        {id: 'cable-car', name: 'Téléphérique', emoji: '🚡'},
        {id: 'ferry-boat', name: 'Bateau-bus', emoji: '⛴️'}
      ]
    },
    {
      id: 'space',
      name: 'Les Explorateurs de l\'Espace',
      color: 'hsl(300 85% 65%)',
      members: [
        {id: 'spaceship', name: 'Vaisseau spatial', emoji: '🚀'},
        {id: 'satellite', name: 'Satellite', emoji: '🛰️'},
        {id: 'space-station', name: 'Station spatiale', emoji: '🏠'},
        {id: 'rover', name: 'Rover', emoji: '🚙'},
        {id: 'space-shuttle', name: 'Navette spatiale', emoji: '🛸'},
        {id: 'space-probe', name: 'Sonde spatiale', emoji: '🔭'}
      ]
    },
    {
      id: 'emergency',
      name: 'Les Urgences',
      color: 'hsl(0 85% 45%)',
      members: [
        {id: 'fire-truck', name: 'Camion de pompiers', emoji: '🚒'},
        {id: 'ambulance', name: 'Ambulance', emoji: '🚑'},
        {id: 'police-car', name: 'Voiture de police', emoji: '🚓'},
        {id: 'rescue-boat', name: 'Bateau de sauvetage', emoji: '🚤'},
        {id: 'rescue-helicopter', name: 'Hélicoptère de sauvetage', emoji: '🚁'},
        {id: 'rescue-plane', name: 'Avion de sauvetage', emoji: '✈️'}
      ]
    },
    {
      id: 'military',
      name: 'Les Militaires',
      color: 'hsl(30 85% 55%)',
      members: [
        {id: 'tank', name: 'Char d\'assaut', emoji: '🚜'},
        {id: 'fighter-jet', name: 'Chasseur', emoji: '✈️'},
        {id: 'helicopter-gunship', name: 'Hélicoptère de combat', emoji: '🚁'},
        {id: 'military-ship', name: 'Navire de guerre', emoji: '🚢'},
        {id: 'military-transport', name: 'Transport militaire', emoji: '🚚'},
        {id: 'drone-military', name: 'Drone militaire', emoji: '📡'}
      ]
    }
  ],
  jobs: [
    {
      id: 'medical',
      name: 'La Médecine',
      color: 'hsl(280 85% 55%)',
      members: [
        {id: 'doctor', name: 'Médecin', emoji: '👨‍⚕️'},
        {id: 'nurse', name: 'Infirmière', emoji: '👩‍⚕️'},
        {id: 'dentist', name: 'Dentiste', emoji: '🦷'},
        {id: 'pharmacist', name: 'Pharmacien', emoji: '💊'},
        {id: 'surgeon', name: 'Chirurgien', emoji: '🔪'},
        {id: 'paramedic', name: 'Ambulancier', emoji: '🚑'}
      ]
    },
    {
      id: 'education',
      name: 'L\'Éducation',
      color: 'hsl(260 85% 65%)',
      members: [
        {id: 'teacher', name: 'Professeur', emoji: '👨‍🏫'},
        {id: 'student', name: 'Élève', emoji: '👨‍🎓'},
        {id: 'principal', name: 'Directeur', emoji: '👔'},
        {id: 'librarian', name: 'Bibliothécaire', emoji: '📚'},
        {id: 'researcher', name: 'Chercheur', emoji: '🔬'},
        {id: 'coach', name: 'Coach sportif', emoji: '🏆'}
      ]
    },
    {
      id: 'safety',
      name: 'La Sécurité',
      color: 'hsl(340 85% 55%)',
      members: [
        {id: 'police', name: 'Policier', emoji: '👮'},
        {id: 'firefighter', name: 'Pompier', emoji: '👨‍🚒'},
        {id: 'guard', name: 'Garde', emoji: '💂'},
        {id: 'detective', name: 'Détective', emoji: '🕵️'},
        {id: 'lifeguard', name: 'Sauveteur', emoji: '🏊‍♂️'},
        {id: 'soldier', name: 'Soldat', emoji: '🪖'}
      ]
    },
    {
      id: 'food',
      name: 'La Cuisine',
      color: 'hsl(40 85% 55%)',
      members: [
        {id: 'chef', name: 'Chef', emoji: '👨‍🍳'},
        {id: 'waiter', name: 'Serveur', emoji: '🍽️'},
        {id: 'baker', name: 'Boulanger', emoji: '🥖'},
        {id: 'barista', name: 'Barista', emoji: '☕'},
        {id: 'butcher', name: 'Boucher', emoji: '🔪'},
        {id: 'sommelier', name: 'Sommelier', emoji: '🍷'}
      ]
    },
    {
      id: 'arts',
      name: 'Les Arts',
      color: 'hsl(120 85% 45%)',
      members: [
        {id: 'artist', name: 'Artiste', emoji: '🎨'},
        {id: 'musician', name: 'Musicien', emoji: '🎶'},
        {id: 'actor', name: 'Acteur', emoji: '🎭'},
        {id: 'writer', name: 'Écrivain', emoji: '✍️'},
        {id: 'dancer', name: 'Danseur', emoji: '💃'},
        {id: 'photographer', name: 'Photographe', emoji: '📸'}
      ]
    },
    {
      id: 'technology',
      name: 'La Technologie',
      color: 'hsl(200 85% 55%)',
      members: [
        {id: 'developer', name: 'Développeur', emoji: '💻'},
        {id: 'engineer', name: 'Ingénieur', emoji: '🔧'},
        {id: 'scientist', name: 'Scientifique', emoji: '🔬'},
        {id: 'designer', name: 'Designer', emoji: '🎨'},
        {id: 'technician', name: 'Technicien', emoji: '🛠️'},
        {id: 'data-analyst', name: 'Analyste de données', emoji: '📊'}
      ]
    },
    {
      id: 'business',
      name: 'Les Affaires',
      color: 'hsl(280 85% 65%)',
      members: [
        {id: 'entrepreneur', name: 'Entrepreneur', emoji: '💼'},
        {id: 'manager', name: 'Manager', emoji: '👔'},
        {id: 'accountant', name: 'Comptable', emoji: '💰'},
        {id: 'marketer', name: 'Marketeur', emoji: '📈'},
        {id: 'salesperson', name: 'Vendeur', emoji: '🛒'},
        {id: 'consultant', name: 'Consultant', emoji: '🗣️'}
      ]
    },
    {
      id: 'service',
      name: 'Les Services',
      color: 'hsl(240 85% 55%)',
      members: [
        {id: 'hairdresser', name: 'Coiffeur', emoji: '💇'},
        {id: 'plumber', name: 'Plombier', emoji: '🚰'},
        {id: 'electrician', name: 'Électricien', emoji: '💡'},
        {id: 'car-mechanic', name: 'Mécanicien', emoji: '🔧'},
        {id: 'cleaner', name: 'Agent d\'entretien', emoji: '🧹'},
        {id: 'gardener', name: 'Jardinier', emoji: '🌱'}
      ]
    },
    {
      id: 'transport',
      name: 'Le Transport',
      color: 'hsl(160 85% 55%)',
      members: [
        {id: 'driver', name: 'Chauffeur', emoji: '🚗'},
        {id: 'pilot', name: 'Pilote', emoji: '✈️'},
        {id: 'conductor', name: 'Conducteur de train', emoji: '🚆'},
        {id: 'ship-captain', name: 'Capitaine de navire', emoji: '🚢'},
        {id: 'bus-driver', name: 'Conducteur de bus', emoji: '🚌'},
        {id: 'truck-driver', name: 'Conducteur de camion', emoji: '🚚'}
      ]
    },
    {
      id: 'hospitality',
      name: 'L\'Hôtellerie',
      color: 'hsl(20 85% 55%)',
      members: [
        {id: 'hotel-manager', name: 'Directeur d\'hôtel', emoji: '🏨'},
        {id: 'receptionist', name: 'Réceptionniste', emoji: '👩‍💼'},
        {id: 'housekeeper', name: 'Femme de chambre', emoji: '🧹'},
        {id: 'concierge', name: 'Concierge', emoji: '🔑'},
        {id: 'bartender', name: 'Barman', emoji: '🍹'},
        {id: 'waitstaff', name: 'Personnel de salle', emoji: '🍽️'}
      ]
    }
  ],
  nature: [
    {
      id: 'trees',
      name: 'Les Arbres',
      color: 'hsl(140 85% 45%)',
      members: [
        {id: 'oak', name: 'Chêne', emoji: '🌳'},
        {id: 'pine', name: 'Sapin', emoji: '🌲'},
        {id: 'palm', name: 'Palmier', emoji: '🌴'},
        {id: 'bamboo', name: 'Bambou', emoji: '🎋'},
        {id: 'maple', name: 'Érable', emoji: '🍁'},
        {id: 'willow', name: 'Saule', emoji: '🌿'}
      ]
    },
    {
      id: 'flowers',
      name: 'Les Fleurs',
      color: 'hsl(120 85% 55%)',
      members: [
        {id: 'rose', name: 'Rose', emoji: '🌹'},
        {id: 'sunflower', name: 'Tournesol', emoji: '🌻'},
        {id: 'tulip', name: 'Tulipe', emoji: '🌷'},
        {id: 'daisy', name: 'Marguerite', emoji: '🌼'},
        {id: 'lily', name: 'Lys', emoji: '⚜️'},
        {id: 'orchid', name: 'Orchidée', emoji: '🪷'}
      ]
    },
    {
      id: 'weather',
      name: 'Le Temps',
      color: 'hsl(200 85% 55%)',
      members: [
        {id: 'sun', name: 'Soleil', emoji: '☀️'},
        {id: 'cloud', name: 'Nuage', emoji: '☁️'},
        {id: 'rain', name: 'Pluie', emoji: '🌧️'},
        {id: 'snow', name: 'Neige', emoji: '❄️'},
        {id: 'lightning', name: 'Éclair', emoji: '⚡'},
        {id: 'rainbow', name: 'Arc-en-ciel', emoji: '🌈'}
      ]
    },
    {
      id: 'landscapes',
      name: 'Les Paysages',
      color: 'hsl(100 85% 45%)',
      members: [
        {id: 'mountain', name: 'Montagne', emoji: '⛰️'},
        {id: 'volcano', name: 'Volcan', emoji: '🌋'},
        {id: 'desert', name: 'Désert', emoji: '🏜️'},
        {id: 'forest', name: 'Forêt', emoji: '🌲'},
        {id: 'beach', name: 'Plage', emoji: '🏖️'},
        {id: 'glacier', name: 'Glacier', emoji: '🧊'}
      ]
    },
    {
      id: 'animals',
      name: 'Les Animaux',
      color: 'hsl(60 85% 55%)',
      members: [
        {id: 'lion', name: 'Lion', emoji: '🦁'},
        {id: 'tiger', name: 'Tigre', emoji: '🐅'},
        {id: 'bear', name: 'Ours', emoji: '🐻'},
        {id: 'wolf', name: 'Loup', emoji: '🐺'},
        {id: 'fox', name: 'Renard', emoji: '🦊'},
        {id: 'lynx', name: 'Lynx', emoji: '😺'}
      ]
    },
    {
      id: 'rocks',
      name: 'Les Roches',
      color: 'hsl(300 85% 55%)',
      members: [
        {id: 'granite', name: 'Granite', emoji: '🪨'},
        {id: 'limestone', name: 'Calcaire', emoji: '🪨'},
        {id: 'sandstone', name: 'Grès', emoji: '🪨'},
        {id: 'basalt', name: 'Basalte', emoji: '🪨'},
        {id: 'marble', name: 'Marbre', emoji: '🪨'},
        {id: 'slate', name: 'Ardoise', emoji: '🪨'}
      ]
    },
    {
      id: 'water-bodies',
      name: 'Les Plans d\'Eau',
      color: 'hsl(180 85% 55%)',
      members: [
        {id: 'river', name: 'Rivière', emoji: '🌊'},
        {id: 'lake', name: 'Lac', emoji: '🏞️'},
        {id: 'ocean', name: 'Océan', emoji: '🌊'},
        {id: 'pond', name: 'Étang', emoji: '🦆'},
        {id: 'waterfall', name: 'Chute d\'eau', emoji: '💧'},
        {id: 'glacier-lake', name: 'Lac glaciaire', emoji: '❄️'}
      ]
    },
    {
      id: 'sky',
      name: 'Le Ciel',
      color: 'hsl(240 85% 65%)',
      members: [
        {id: 'cloud', name: 'Nuage', emoji: '☁️'},
        {id: 'rainbow', name: 'Arc-en-ciel', emoji: '🌈'},
        {id: 'star', name: 'Étoile', emoji: '⭐'},
        {id: 'moon', name: 'Lune', emoji: '🌕'},
        {id: 'sunset', name: 'Coucher de soleil', emoji: '🌅'},
        {id: 'aurora-borealis', name: 'Aurore boréale', emoji: '🌌'}
      ]
    },
    {
      id: 'ecosystems',
      name: 'Les Écosystèmes',
      color: 'hsl(300 85% 55%)',
      members: [
        {id: 'rainforest', name: 'Forêt tropicale', emoji: '🌴'},
        {id: 'desert', name: 'Désert', emoji: '🏜️'},
        {id: 'coral-reef', name: 'Récif corallien', emoji: '🐠'},
        {id: 'tundra', name: 'Toundra', emoji: '❄️'},
        {id: 'grassland', name: 'Prairie', emoji: '🌾'},
        {id: 'wetland', name: 'Zone humide', emoji: '🌿'}
      ]
    },
    {
      id: 'insects',
      name: 'Les Insectes',
      color: 'hsl(60 85% 55%)',
      members: [
        {id: 'butterfly', name: 'Papillon', emoji: '🦋'},
        {id: 'bee', name: 'Abeille', emoji: '🐝'},
        {id: 'ant', name: 'Fourmi', emoji: '🐜'},
        {id: 'dragonfly', name: 'Libellule', emoji: '🪲'},
        {id: 'grasshopper', name: 'Sauterelle', emoji: '🦗'},
        {id: 'ladybug', name: 'Coccinelle', emoji: '🐞'}
      ]
    }
  ],
  fantasy: [
    {
      id: 'mythical-creatures',
      name: 'Créatures Mythiques',
      color: 'hsl(280 85% 55%)',
      members: [
        {id: 'dragon', name: 'Dragon', emoji: '🐉'},
        {id: 'unicorn', name: 'Licorne', emoji: '🦄'},
        {id: 'phoenix', name: 'Phénix', emoji: '🦅'},
        {id: 'griffin', name: 'Griffon', emoji: '🦅'},
        {id: 'mermaid', name: 'Sirène', emoji: '🧜‍♀️'},
        {id: 'centaur', name: 'Centaure', emoji: '🧝‍♂️'}
      ]
    },
    {
      id: 'magical-beings',
      name: 'Êtres Magiques',
      color: 'hsl(260 85% 65%)',
      members: [
        {id: 'wizard', name: 'Sorcier', emoji: '🧙‍♂️'},
        {id: 'witch', name: 'Sorcière', emoji: '🧙‍♀️'},
        {id: 'fairy', name: 'Fée', emoji: '🧚‍♀️'},
        {id: 'elf', name: 'Elfe', emoji: '🧝‍♂️'},
        {id: 'gnome', name: 'Gnome', emoji: '🧙‍♂️'},
        {id: 'troll', name: 'Troll', emoji: '👹'}
      ]
    },
    {
      id: 'fantasy-places',
      name: 'Lieux Fantastiques',
      color: 'hsl(340 85% 55%)',
      members: [
        {id: 'castle', name: 'Château', emoji: '🏰'},
        {id: 'dungeon', name: 'Donjon', emoji: '🕸️'},
        {id: 'enchanted-forest', name: 'Forêt enchantée', emoji: '🌲'},
        {id: 'floating-island', name: 'Île flottante', emoji: '🏝️'},
        {id: 'crystal-cave', name: 'Grotte de cristal', emoji: '🪨'},
        {id: 'mystic-mountain', name: 'Montagne mystique', emoji: '⛰️'}
      ]
    },
    {
      id: 'magical-items',
      name: 'Objets Magiques',
      color: 'hsl(40 85% 55%)',
      members: [
        {id: 'magic-wand', name: 'Baguette magique', emoji: '🪄'},
        {id: 'crystal-ball', name: 'Boule de cristal', emoji: '🔮'},
        {id: 'enchanted-sword', name: 'Épée enchantée', emoji: '🗡️'},
        {id: 'magic-book', name: 'Livre magique', emoji: '📖'},
        {id: 'potion', name: 'Potion', emoji: '🧪'},
        {id: 'amulet', name: 'Amulette', emoji: '📿'}
      ]
    },
    {
      id: 'fantasy-animals',
      name: 'Animaux Fantastiques',
      color: 'hsl(120 85% 45%)',
      members: [
        {id: 'phoenix', name: 'Phénix', emoji: '🦅'},
        {id: 'dragon', name: 'Dragon', emoji: '🐉'},
        {id: 'unicorn', name: 'Licorne', emoji: '🦄'},
        {id: 'basilisk', name: 'Basilic', emoji: '🐍'},
        {id: 'chimera', name: 'Chimère', emoji: '🦁'},
        {id: 'hydra', name: 'Hydre', emoji: '🐉'}
      ]
    },
    {
      id: 'dark-creatures',
      name: 'Créatures Sombres',
      color: 'hsl(200 85% 55%)',
      members: [
        {id: 'vampire', name: 'Vampire', emoji: '🧛‍♂️'},
        {id: 'werewolf', name: 'Loup-garou', emoji: '🐺'},
        {id: 'zombie', name: 'Zombie', emoji: '🧟‍♂️'},
        {id: 'ghost', name: 'Fantôme', emoji: '👻'},
        {id: 'demon', name: 'Démon', emoji: '😈'},
        {id: 'witch', name: 'Sorcière', emoji: '🧙‍♀️'}
      ]
    },
    {
      id: 'legendary-heroes',
      name: 'Héros Légendaires',
      color: 'hsl(20 85% 55%)',
      members: [
        {id: 'knight', name: 'Chevalier', emoji: '🤺'},
        {id: 'archer', name: 'Archer', emoji: '🏹'},
        {id: 'paladin', name: 'Paladin', emoji: '🛡️'},
        {id: 'ranger', name: 'Rôdeur', emoji: '🏕️'},
        {id: 'bard', name: 'Barde', emoji: '🎸'},
        {id: 'assassin', name: 'Assassin', emoji: '🗡️'}
      ]
    },
    {
      id: 'fantasy-lands',
      name: 'Terres Fantastiques',
      color: 'hsl(160 85% 55%)',
      members: [
        {id: 'neverland', name: 'Pays Imaginaire', emoji: '🏝️'},
        {id: 'middle-earth', name: 'Terre du Milieu', emoji: '🌍'},
        {id: 'narnia', name: 'Narnia', emoji: '❄️'},
        {id: 'hogwarts', name: 'Poudlard', emoji: '🏰'},
        {id: 'atlantis', name: 'Atlantide', emoji: '🌊'},
        {id: 'elysium', name: 'Élysée', emoji: '🌟'}
      ]
    },
    {
      id: 'magical-phenomena',
      name: 'Phénomènes Magiques',
      color: 'hsl(240 85% 65%)',
      members: [
        {id: 'time-travel', name: 'Voyage dans le temps', emoji: '⏳'},
        {id: 'teleportation', name: 'Téléportation', emoji: '🌀'},
        {id: 'shape-shifting', name: 'Métamorphose', emoji: '🦎'},
        {id: 'invisibility', name: 'Invisibilité', emoji: '👻'},
        {id: 'mind-reading', name: 'Lecture de pensée', emoji: '🧠'},
        {id: 'elemental-control', name: 'Contrôle des éléments', emoji: '🌪️'}
      ]
    },
    {
      id: 'fantasy-vehicles',
      name: 'Véhicules Fantastiques',
      color: 'hsl(300 85% 55%)',
      members: [
        {id: 'flying-carpet', name: 'Tapis volant', emoji: '🧞‍♂️'},
        {id: 'dragon-rider', name: 'Cavalier de dragon', emoji: '🐉'},
        {id: 'magic-boat', name: 'Bateau magique', emoji: '🛶'},
        {id: 'enchanted-chariot', name: 'Char enchanté', emoji: '🚗'},
        {id: 'spellbound-train', name: 'Train ensorcelé', emoji: '🚂'},
        {id: 'mystic-bicycle', name: 'Vélo mystique', emoji: '🚲'}
      ]
    }
  ],
  space: [
    {
      id: 'planets',
      name: 'Les Planètes',
      color: 'hsl(240 90% 60%)',
      members: [
        {id: 'mercury', name: 'Mercure', emoji: '☿️'},
        {id: 'venus', name: 'Vénus', emoji: '♀️'},
        {id: 'earth', name: 'Terre', emoji: '🌍'},
        {id: 'mars', name: 'Mars', emoji: '♂️'},
        {id: 'jupiter', name: 'Jupiter', emoji: '♃'},
        {id: 'saturn', name: 'Saturne', emoji: '🪐'}
      ]
    },
    {
      id: 'constellations',
      name: 'Les Constellations',
      color: 'hsl(280 85% 65%)',
      members: [
        {id: 'orion', name: 'Orion', emoji: '⭐'},
        {id: 'ursa-major', name: 'Grande Ourse', emoji: '🐻'},
        {id: 'cassiopeia', name: 'Cassiopée', emoji: '👑'},
        {id: 'leo', name: 'Lion', emoji: '🦁'},
        {id: 'scorpius', name: 'Scorpion', emoji: '🦂'},
        {id: 'cygnus', name: 'Cygne', emoji: '🦢'}
      ]
    },
    {
      id: 'spacecraft',
      name: 'Les Vaisseaux Spatiaux',
      color: 'hsl(260 85% 55%)',
      members: [
        {id: 'rocket', name: 'Fusée', emoji: '🚀'},
        {id: 'shuttle', name: 'Navette', emoji: '🛸'},
        {id: 'satellite', name: 'Satellite', emoji: '🛰️'},
        {id: 'space-station', name: 'Station spatiale', emoji: '🛰️'},
        {id: 'rover', name: 'Rover', emoji: '🚙'},
        {id: 'probe', name: 'Sonde', emoji: '📡'}
      ]
    },
    {
      id: 'astronauts',
      name: 'Les Astronautes',
      color: 'hsl(220 85% 60%)',
      members: [
        {id: 'commander', name: 'Commandant', emoji: '👨‍🚀'},
        {id: 'pilot', name: 'Pilote', emoji: '👩‍🚀'},
        {id: 'engineer', name: 'Ingénieur', emoji: '🔧'},
        {id: 'scientist', name: 'Scientifique', emoji: '🔬'},
        {id: 'medic', name: 'Médecin', emoji: '⚕️'},
        {id: 'specialist', name: 'Spécialiste', emoji: '🧑‍💻'}
      ]
    },
    {
      id: 'galaxies',
      name: 'Les Galaxies',
      color: 'hsl(300 85% 55%)',
      members: [
        {id: 'milky-way', name: 'Voie Lactée', emoji: '🌌'},
        {id: 'andromeda', name: 'Andromède', emoji: '🌠'},
        {id: 'whirlpool', name: 'Tourbillon', emoji: '🌪️'},
        {id: 'sombrero', name: 'Sombrero', emoji: '👒'},
        {id: 'cartwheel', name: 'Roue de chariot', emoji: '🎡'},
        {id: 'pinwheel', name: 'Moulinet', emoji: '🎯'}
      ]
    },
    {
      id: 'space-phenomena',
      name: 'Phénomènes Spatiaux',
      color: 'hsl(180 85% 55%)',
      members: [
        {id: 'black-hole', name: 'Trou noir', emoji: '⚫'},
        {id: 'supernova', name: 'Supernova', emoji: '💥'},
        {id: 'nebula', name: 'Nébuleuse', emoji: '☁️'},
        {id: 'pulsar', name: 'Pulsar', emoji: '📡'},
        {id: 'quasar', name: 'Quasar', emoji: '⚡'},
        {id: 'asteroid', name: 'Astéroïde', emoji: '☄️'}
      ]
    },
    {
      id: 'space-missions',
      name: 'Missions Spatiales',
      color: 'hsl(120 85% 50%)',
      members: [
        {id: 'apollo', name: 'Apollo', emoji: '🌙'},
        {id: 'voyager', name: 'Voyager', emoji: '🛰️'},
        {id: 'hubble', name: 'Hubble', emoji: '🔭'},
        {id: 'cassini', name: 'Cassini', emoji: '🪐'},
        {id: 'curiosity', name: 'Curiosity', emoji: '🤖'},
        {id: 'perseverance', name: 'Perseverance', emoji: '🚗'}
      ]
    },
    {
      id: 'alien-species',
      name: 'Espèces Extraterrestres',
      color: 'hsl(160 85% 55%)',
      members: [
        {id: 'martian', name: 'Martien', emoji: '👽'},
        {id: 'gray', name: 'Petit Gris', emoji: '👾'},
        {id: 'reptilian', name: 'Reptilien', emoji: '🦎'},
        {id: 'nordic', name: 'Nordique', emoji: '👼'},
        {id: 'insectoid', name: 'Insectoïde', emoji: '🐛'},
        {id: 'energy-being', name: 'Être d\'énergie', emoji: '⚡'}
      ]
    },
    {
      id: 'space-tools',
      name: 'Outils Spatiaux',
      color: 'hsl(340 85% 55%)',
      members: [
        {id: 'telescope', name: 'Télescope', emoji: '🔭'},
        {id: 'space-suit', name: 'Combinaison', emoji: '🧑‍🚀'},
        {id: 'oxygen-tank', name: 'Réservoir d\'oxygène', emoji: '⚗️'},
        {id: 'laser', name: 'Laser', emoji: '🔦'},
        {id: 'communicator', name: 'Communicateur', emoji: '📻'},
        {id: 'scanner', name: 'Scanner', emoji: '📱'}
      ]
    },
    {
      id: 'space-colonies',
      name: 'Colonies Spatiales',
      color: 'hsl(60 85% 50%)',
      members: [
        {id: 'moon-base', name: 'Base lunaire', emoji: '🌙'},
        {id: 'mars-colony', name: 'Colonie martienne', emoji: '🏠'},
        {id: 'space-city', name: 'Cité spatiale', emoji: '🏙️'},
        {id: 'mining-station', name: 'Station minière', emoji: '⛏️'},
        {id: 'research-outpost', name: 'Avant-poste de recherche', emoji: '🔬'},
        {id: 'trade-hub', name: 'Hub commercial', emoji: '🏪'}
      ]
    }
  ],
  food: [
    {
      id: 'fruits',
      name: 'Les Fruits',
      color: 'hsl(25 90% 55%)',
      members: [
        {id: 'apple', name: 'Pomme', emoji: '🍎'},
        {id: 'banana', name: 'Banane', emoji: '🍌'},
        {id: 'orange', name: 'Orange', emoji: '🍊'},
        {id: 'strawberry', name: 'Fraise', emoji: '🍓'},
        {id: 'grapes', name: 'Raisins', emoji: '🍇'},
        {id: 'watermelon', name: 'Pastèque', emoji: '🍉'}
      ]
    },
    {
      id: 'vegetables',
      name: 'Les Légumes',
      color: 'hsl(120 85% 45%)',
      members: [
        {id: 'carrot', name: 'Carotte', emoji: '🥕'},
        {id: 'broccoli', name: 'Brocoli', emoji: '🥦'},
        {id: 'tomato', name: 'Tomate', emoji: '🍅'},
        {id: 'corn', name: 'Maïs', emoji: '🌽'},
        {id: 'potato', name: 'Pomme de terre', emoji: '🥔'},
        {id: 'bell-pepper', name: 'Poivron', emoji: '🫑'}
      ]
    },
    {
      id: 'desserts',
      name: 'Les Desserts',
      color: 'hsl(300 85% 60%)',
      members: [
        {id: 'cake', name: 'Gâteau', emoji: '🍰'},
        {id: 'ice-cream', name: 'Glace', emoji: '🍦'},
        {id: 'cookie', name: 'Cookie', emoji: '🍪'},
        {id: 'donut', name: 'Donut', emoji: '🍩'},
        {id: 'chocolate', name: 'Chocolat', emoji: '🍫'},
        {id: 'pie', name: 'Tarte', emoji: '🥧'}
      ]
    },
    {
      id: 'fast-food',
      name: 'Fast Food',
      color: 'hsl(0 85% 55%)',
      members: [
        {id: 'hamburger', name: 'Hamburger', emoji: '🍔'},
        {id: 'pizza', name: 'Pizza', emoji: '🍕'},
        {id: 'hot-dog', name: 'Hot-dog', emoji: '🌭'},
        {id: 'fries', name: 'Frites', emoji: '🍟'},
        {id: 'taco', name: 'Taco', emoji: '🌮'},
        {id: 'burrito', name: 'Burrito', emoji: '🌯'}
      ]
    },
    {
      id: 'breakfast',
      name: 'Petit Déjeuner',
      color: 'hsl(40 85% 55%)',
      members: [
        {id: 'croissant', name: 'Croissant', emoji: '🥐'},
        {id: 'pancake', name: 'Pancake', emoji: '🥞'},
        {id: 'bacon', name: 'Bacon', emoji: '🥓'},
        {id: 'egg', name: 'Œuf', emoji: '🍳'},
        {id: 'toast', name: 'Toast', emoji: '🍞'},
        {id: 'cereal', name: 'Céréales', emoji: '🥣'}
      ]
    },
    {
      id: 'seafood',
      name: 'Fruits de Mer',
      color: 'hsl(200 85% 55%)',
      members: [
        {id: 'fish', name: 'Poisson', emoji: '🐟'},
        {id: 'shrimp', name: 'Crevette', emoji: '🦐'},
        {id: 'crab', name: 'Crabe', emoji: '🦀'},
        {id: 'lobster', name: 'Homard', emoji: '🦞'},
        {id: 'oyster', name: 'Huître', emoji: '🦪'},
        {id: 'squid', name: 'Calmar', emoji: '🦑'}
      ]
    },
    {
      id: 'beverages',
      name: 'Les Boissons',
      color: 'hsl(240 85% 60%)',
      members: [
        {id: 'coffee', name: 'Café', emoji: '☕'},
        {id: 'tea', name: 'Thé', emoji: '🍵'},
        {id: 'juice', name: 'Jus', emoji: '🧃'},
        {id: 'soda', name: 'Soda', emoji: '🥤'},
        {id: 'wine', name: 'Vin', emoji: '🍷'},
        {id: 'beer', name: 'Bière', emoji: '🍺'}
      ]
    },
    {
      id: 'dairy',
      name: 'Produits Laitiers',
      color: 'hsl(60 85% 75%)',
      members: [
        {id: 'milk', name: 'Lait', emoji: '🥛'},
        {id: 'cheese', name: 'Fromage', emoji: '🧀'},
        {id: 'yogurt', name: 'Yaourt', emoji: '🥛'},
        {id: 'butter', name: 'Beurre', emoji: '🧈'},
        {id: 'cream', name: 'Crème', emoji: '🥛'},
        {id: 'ice-cream', name: 'Glace', emoji: '🍨'}
      ]
    },
    {
      id: 'spices',
      name: 'Les Épices',
      color: 'hsl(30 85% 50%)',
      members: [
        {id: 'salt', name: 'Sel', emoji: '🧂'},
        {id: 'pepper', name: 'Poivre', emoji: '🫚'},
        {id: 'garlic', name: 'Ail', emoji: '🧄'},
        {id: 'ginger', name: 'Gingembre', emoji: '🫚'},
        {id: 'basil', name: 'Basilic', emoji: '🌿'},
        {id: 'oregano', name: 'Origan', emoji: '🌿'}
      ]
    },
    {
      id: 'grains',
      name: 'Les Céréales',
      color: 'hsl(45 85% 50%)',
      members: [
        {id: 'rice', name: 'Riz', emoji: '🍚'},
        {id: 'wheat', name: 'Blé', emoji: '🌾'},
        {id: 'oats', name: 'Avoine', emoji: '🥣'},
        {id: 'quinoa', name: 'Quinoa', emoji: '🌾'},
        {id: 'barley', name: 'Orge', emoji: '🌾'},
        {id: 'pasta', name: 'Pâtes', emoji: '🍝'}
      ]
    }
  ],
  sports: [
    {
      id: 'ball-sports',
      name: 'Sports de Balle',
      color: 'hsl(100 85% 50%)',
      members: [
        {id: 'soccer', name: 'Football', emoji: '⚽'},
        {id: 'basketball', name: 'Basketball', emoji: '🏀'},
        {id: 'tennis', name: 'Tennis', emoji: '🎾'},
        {id: 'volleyball', name: 'Volleyball', emoji: '🏐'},
        {id: 'rugby', name: 'Rugby', emoji: '🏈'},
        {id: 'ping-pong', name: 'Ping-pong', emoji: '🏓'}
      ]
    },
    {
      id: 'water-sports',
      name: 'Sports Aquatiques',
      color: 'hsl(200 85% 55%)',
      members: [
        {id: 'swimming', name: 'Natation', emoji: '🏊'},
        {id: 'surfing', name: 'Surf', emoji: '🏄'},
        {id: 'diving', name: 'Plongée', emoji: '🤿'},
        {id: 'water-polo', name: 'Water-polo', emoji: '🤽'},
        {id: 'sailing', name: 'Voile', emoji: '⛵'},
        {id: 'rowing', name: 'Aviron', emoji: '🚣'}
      ]
    },
    {
      id: 'winter-sports',
      name: 'Sports d\'Hiver',
      color: 'hsl(240 85% 65%)',
      members: [
        {id: 'skiing', name: 'Ski', emoji: '⛷️'},
        {id: 'snowboarding', name: 'Snowboard', emoji: '🏂'},
        {id: 'ice-hockey', name: 'Hockey sur glace', emoji: '🏒'},
        {id: 'figure-skating', name: 'Patinage artistique', emoji: '⛸️'},
        {id: 'curling', name: 'Curling', emoji: '🥌'},
        {id: 'bobsled', name: 'Bobsleigh', emoji: '🛷'}
      ]
    },
    {
      id: 'track-field',
      name: 'Athlétisme',
      color: 'hsl(50 85% 50%)',
      members: [
        {id: 'running', name: 'Course', emoji: '🏃'},
        {id: 'jumping', name: 'Saut', emoji: '🏃‍♂️'},
        {id: 'throwing', name: 'Lancer', emoji: '🤾'},
        {id: 'marathon', name: 'Marathon', emoji: '🏃‍♀️'},
        {id: 'hurdles', name: 'Haies', emoji: '🤸'},
        {id: 'pole-vault', name: 'Saut à la perche', emoji: '🤸‍♂️'}
      ]
    },
    {
      id: 'combat-sports',
      name: 'Sports de Combat',
      color: 'hsl(0 85% 55%)',
      members: [
        {id: 'boxing', name: 'Boxe', emoji: '🥊'},
        {id: 'karate', name: 'Karaté', emoji: '🥋'},
        {id: 'judo', name: 'Judo', emoji: '🤼'},
        {id: 'wrestling', name: 'Lutte', emoji: '🤼‍♀️'},
        {id: 'taekwondo', name: 'Taekwondo', emoji: '🦵'},
        {id: 'fencing', name: 'Escrime', emoji: '🤺'}
      ]
    },
    {
      id: 'gymnastics',
      name: 'Gymnastique',
      color: 'hsl(300 85% 55%)',
      members: [
        {id: 'floor-exercise', name: 'Sol', emoji: '🤸'},
        {id: 'balance-beam', name: 'Poutre', emoji: '🤸‍♀️'},
        {id: 'uneven-bars', name: 'Barres asymétriques', emoji: '🤸‍♂️'},
        {id: 'vault', name: 'Saut de cheval', emoji: '🤸'},
        {id: 'rings', name: 'Anneaux', emoji: '💍'},
        {id: 'parallel-bars', name: 'Barres parallèles', emoji: '🤸‍♂️'}
      ]
    },
    {
      id: 'cycling-sports',
      name: 'Sports Cyclistes',
      color: 'hsl(140 85% 45%)',
      members: [
        {id: 'road-cycling', name: 'Cyclisme sur route', emoji: '🚴'},
        {id: 'mountain-biking', name: 'VTT', emoji: '🚵'},
        {id: 'bmx', name: 'BMX', emoji: '🚴‍♂️'},
        {id: 'track-cycling', name: 'Cyclisme sur piste', emoji: '🚴‍♀️'},
        {id: 'cyclocross', name: 'Cyclo-cross', emoji: '🚵‍♂️'},
        {id: 'triathlon', name: 'Triathlon', emoji: '🏊‍♂️'}
      ]
    },
    {
      id: 'racquet-sports',
      name: 'Sports de Raquette',
      color: 'hsl(280 85% 60%)',
      members: [
        {id: 'tennis', name: 'Tennis', emoji: '🎾'},
        {id: 'badminton', name: 'Badminton', emoji: '🏸'},
        {id: 'squash', name: 'Squash', emoji: '🎾'},
        {id: 'table-tennis', name: 'Tennis de table', emoji: '🏓'},
        {id: 'racquetball', name: 'Racquetball', emoji: '🎾'},
        {id: 'padel', name: 'Padel', emoji: '🎾'}
      ]
    },
    {
      id: 'extreme-sports',
      name: 'Sports Extrêmes',
      color: 'hsl(20 85% 55%)',
      members: [
        {id: 'skateboarding', name: 'Skateboard', emoji: '🛹'},
        {id: 'rock-climbing', name: 'Escalade', emoji: '🧗'},
        {id: 'bungee-jumping', name: 'Saut à l\'élastique', emoji: '🪂'},
        {id: 'paragliding', name: 'Parapente', emoji: '🪂'},
        {id: 'base-jumping', name: 'Base jump', emoji: '🪂'},
        {id: 'wingsuit', name: 'Combinaison ailée', emoji: '🪂'}
      ]
    },
    {
      id: 'team-sports',
      name: 'Sports d\'Équipe',
      color: 'hsl(160 85% 50%)',
      members: [
        {id: 'soccer-team', name: 'Équipe de football', emoji: '⚽'},
        {id: 'basketball-team', name: 'Équipe de basket', emoji: '🏀'},
        {id: 'volleyball-team', name: 'Équipe de volley', emoji: '🏐'},
        {id: 'rugby-team', name: 'Équipe de rugby', emoji: '🏈'},
        {id: 'hockey-team', name: 'Équipe de hockey', emoji: '🏒'},
        {id: 'baseball-team', name: 'Équipe de baseball', emoji: '⚾'}
      ]
    }
  ]
};