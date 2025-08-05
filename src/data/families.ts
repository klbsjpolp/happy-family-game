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
        { id: 'grandfather1', name: 'Grand-père', emoji: '👴', description: 'Le sage de la famille' },
        { id: 'grandmother1', name: 'Grand-mère', emoji: '👵', description: 'La gardienne des traditions' },
        { id: 'father1', name: 'Père', emoji: '👨', description: 'Le pilier de la famille' },
        { id: 'mother1', name: 'Mère', emoji: '👩', description: 'Le cœur de la famille' },
        { id: 'son1', name: 'Fils', emoji: '👦', description: 'L\'héritier espiègle' },
        { id: 'daughter1', name: 'Fille', emoji: '👧', description: 'La princesse curieuse' }
      ]
    },
    {
      id: 'family2',
      name: 'Famille Dubois',
      color: 'hsl(120 85% 45%)',
      members: [
        { id: 'grandfather2', name: 'Grand-père', emoji: '👴', description: 'Le conteur d\'histoires' },
        { id: 'grandmother2', name: 'Grand-mère', emoji: '👵', description: 'L\'experte en cuisine' },
        { id: 'father2', name: 'Père', emoji: '👨', description: 'Le travailleur dévoué' },
        { id: 'mother2', name: 'Mère', emoji: '👩', description: 'La protectrice attentionnée' },
        { id: 'son2', name: 'Fils', emoji: '👦', description: 'Le sportif énergique' },
        { id: 'daughter2', name: 'Fille', emoji: '👧', description: 'L\'artiste créative' }
      ]
    },
    {
      id: 'family3',
      name: 'Famille Bernard',
      color: 'hsl(240 85% 55%)',
      members: [
        { id: 'grandfather3', name: 'Grand-père', emoji: '👴', description: 'Le bricoleur ingénieux' },
        { id: 'grandmother3', name: 'Grand-mère', emoji: '👵', description: 'La couturière habile' },
        { id: 'father3', name: 'Père', emoji: '👨', description: 'L\'aventurier intrépide' },
        { id: 'mother3', name: 'Mère', emoji: '👩', description: 'La médiatrice pacifique' },
        { id: 'son3', name: 'Fils', emoji: '👦', description: 'Le génie des maths' },
        { id: 'daughter3', name: 'Fille', emoji: '👧', description: 'La musicienne douée' }
      ]
    },
    {
      id: 'family4',
      name: 'Famille Petit',
      color: 'hsl(60 85% 55%)',
      members: [
        { id: 'grandfather4', name: 'Grand-père', emoji: '👴', description: 'Le jardinier passionné' },
        { id: 'grandmother4', name: 'Grand-mère', emoji: '👵', description: 'La pâtissière créative' },
        { id: 'father4', name: 'Père', emoji: '👨', description: 'Le scientifique curieux' },
        { id: 'mother4', name: 'Mère', emoji: '👩', description: 'L\'enseignante patiente' },
        { id: 'son4', name: 'Fils', emoji: '👦', description: 'Le lecteur avide' },
        { id: 'daughter4', name: 'Fille', emoji: '👧', description: 'L\'exploratrice courageuse' }
      ]
    },
    {
      id: 'family5',
      name: 'Famille Moreau',
      color: 'hsl(300 85% 55%)',
      members: [
        { id: 'grandfather5', name: 'Grand-père', emoji: '👴', description: 'Le pêcheur tranquille' },
        { id: 'grandmother5', name: 'Grand-mère', emoji: '👵', description: 'La conteuse d\'histoires' },
        { id: 'father5', name: 'Père', emoji: '👨', description: 'L\'architecte visionnaire' },
        { id: 'mother5', name: 'Mère', emoji: '👩', description: 'La médecin dévouée' },
        { id: 'son5', name: 'Fils', emoji: '👦', description: 'Le futur astronaute' },
        { id: 'daughter5', name: 'Fille', emoji: '👧', description: 'La future vétérinaire' }
      ]
    },
    {
      id: 'family6',
      name: 'Famille Leroy',
      color: 'hsl(180 85% 45%)',
      members: [
        { id: 'grandfather6', name: 'Grand-père', emoji: '👴', description: 'L\'ancien marin' },
        { id: 'grandmother6', name: 'Grand-mère', emoji: '👵', description: 'L\'ancienne institutrice' },
        { id: 'father6', name: 'Père', emoji: '👨', description: 'Le chef cuisinier' },
        { id: 'mother6', name: 'Mère', emoji: '👩', description: 'L\'avocate brillante' },
        { id: 'son6', name: 'Fils', emoji: '👦', description: 'Le petit musicien' },
        { id: 'daughter6', name: 'Fille', emoji: '👧', description: 'La petite danseuse' }
      ]
    },
    {
      id: 'family7',
      name: 'Famille Fournier',
      color: 'hsl(30 85% 55%)',
      members: [
        { id: 'grandfather7', name: 'Grand-père', emoji: '👴', description: 'L\'ancien facteur' },
        { id: 'grandmother7', name: 'Grand-mère', emoji: '👵', description: 'L\'ancienne fleuriste' },
        { id: 'father7', name: 'Père', emoji: '👨', description: 'Le photographe talentueux' },
        { id: 'mother7', name: 'Mère', emoji: '👩', description: 'La décoratrice d\'intérieur' },
        { id: 'son7', name: 'Fils', emoji: '👦', description: 'Le petit comédien' },
        { id: 'daughter7', name: 'Fille', emoji: '👧', description: 'La petite écrivaine' }
      ]
    },
    {
      id: 'family8',
      name: 'Famille Girard',
      color: 'hsl(330 85% 55%)',
      members: [
        { id: 'grandfather8', name: 'Grand-père', emoji: '👴', description: 'L\'ancien boulanger' },
        { id: 'grandmother8', name: 'Grand-mère', emoji: '👵', description: 'L\'ancienne couturière' },
        { id: 'father8', name: 'Père', emoji: '👨', description: 'Le musicien passionné' },
        { id: 'mother8', name: 'Mère', emoji: '👩', description: 'La bibliothécaire érudite' },
        { id: 'son8', name: 'Fils', emoji: '👦', description: 'Le petit inventeur' },
        { id: 'daughter8', name: 'Fille', emoji: '👧', description: 'La petite scientifique' }
      ]
    },
    {
      id: 'family9',
      name: 'Famille Bonnet',
      color: 'hsl(270 85% 55%)',
      members: [
        { id: 'grandfather9', name: 'Grand-père', emoji: '👴', description: 'L\'ancien menuisier' },
        { id: 'grandmother9', name: 'Grand-mère', emoji: '👵', description: 'L\'ancienne infirmière' },
        { id: 'father9', name: 'Père', emoji: '👨', description: 'Le pilote d\'avion' },
        { id: 'mother9', name: 'Mère', emoji: '👩', description: 'La journaliste intrépide' },
        { id: 'son9', name: 'Fils', emoji: '👦', description: 'Le petit naturaliste' },
        { id: 'daughter9', name: 'Fille', emoji: '👧', description: 'La petite astronome' }
      ]
    },
    {
      id: 'family10',
      name: 'Famille Lambert',
      color: 'hsl(90 85% 45%)',
      members: [
        { id: 'grandfather10', name: 'Grand-père', emoji: '👴', description: 'L\'ancien horloger' },
        { id: 'grandmother10', name: 'Grand-mère', emoji: '👵', description: 'L\'ancienne libraire' },
        { id: 'father10', name: 'Père', emoji: '👨', description: 'Le vétérinaire attentionné' },
        { id: 'mother10', name: 'Mère', emoji: '👩', description: 'La peintre talentueuse' },
        { id: 'son10', name: 'Fils', emoji: '👦', description: 'Le petit botaniste' },
        { id: 'daughter10', name: 'Fille', emoji: '👧', description: 'La petite archéologue' }
      ]
    }
  ],
  animals: [
    {
      id: 'cats',
      name: 'Les Félins',
      color: 'hsl(35 85% 55%)',
      members: [
        { id: 'lion', name: 'Lion', emoji: '🦁', description: 'Le roi de la savane' },
        { id: 'tiger', name: 'Tigre', emoji: '🐅', description: 'Le chasseur rayé' },
        { id: 'leopard', name: 'Léopard', emoji: '🐆', description: 'Le grimpeur tacheté' },
        { id: 'cat', name: 'Chat', emoji: '🐱', description: 'Le compagnon domestique' },
        { id: 'panther', name: 'Panthère', emoji: '🐈‍⬛', description: 'Le prédateur nocturne' },
        { id: 'lynx', name: 'Lynx', emoji: '😺', description: 'Le félin aux oreilles pointues' }
      ]
    },
    {
      id: 'birds',
      name: 'Les Oiseaux',
      color: 'hsl(15 85% 65%)',
      members: [
        { id: 'eagle', name: 'Aigle', emoji: '🦅', description: 'Le maître du ciel' },
        { id: 'owl', name: 'Hibou', emoji: '🦉', description: 'Le gardien de la nuit' },
        { id: 'parrot', name: 'Perroquet', emoji: '🦜', description: 'Le bavard coloré' },
        { id: 'penguin', name: 'Pingouin', emoji: '🐧', description: 'Le nageur en smoking' },
        { id: 'flamingo', name: 'Flamant', emoji: '🦩', description: 'L\'élégant rose' },
        { id: 'peacock', name: 'Paon', emoji: '🦚', description: 'Le majestueux coloré' }
      ]
    },
    {
      id: 'marine',
      name: 'Les Marins',
      color: 'hsl(200 85% 55%)',
      members: [
        { id: 'whale', name: 'Baleine', emoji: '🐋', description: 'Le géant des océans' },
        { id: 'dolphin', name: 'Dauphin', emoji: '🐬', description: 'L\'acrobate intelligent' },
        { id: 'shark', name: 'Requin', emoji: '🦈', description: 'Le prédateur des profondeurs' },
        { id: 'octopus', name: 'Pieuvre', emoji: '🐙', description: 'Le maître du camouflage' },
        { id: 'seal', name: 'Phoque', emoji: '🦭', description: 'Le joueur des banquises' },
        { id: 'crab', name: 'Crabe', emoji: '🦀', description: 'Le marcheur latéral' }
      ]
    },
    {
      id: 'farm',
      name: 'La Ferme',
      color: 'hsl(120 85% 45%)',
      members: [
        { id: 'cow', name: 'Vache', emoji: '🐄', description: 'La productrice de lait' },
        { id: 'pig', name: 'Cochon', emoji: '🐷', description: 'L\'ami rose et rond' },
        { id: 'chicken', name: 'Poule', emoji: '🐔', description: 'La pondeuse matinale' },
        { id: 'sheep', name: 'Mouton', emoji: '🐑', description: 'Le nuage sur pattes' },
        { id: 'horse', name: 'Cheval', emoji: '🐎', description: 'Le coureur élégant' },
        { id: 'goat', name: 'Chèvre', emoji: '🐐', description: 'L\'escaladeuse intrépide' }
      ]
    },
    {
      id: 'wild',
      name: 'Les Sauvages',
      color: 'hsl(280 85% 55%)',
      members: [
        { id: 'elephant', name: 'Éléphant', emoji: '🐘', description: 'Le colosse à trompe' },
        { id: 'giraffe', name: 'Girafe', emoji: '🦒', description: 'La tour vivante' },
        { id: 'zebra', name: 'Zèbre', emoji: '🦓', description: 'Le cheval rayé' },
        { id: 'rhino', name: 'Rhinocéros', emoji: '🦏', description: 'Le blindé cornu' },
        { id: 'hippo', name: 'Hippopotame', emoji: '🦛', description: 'Le géant aquatique' },
        { id: 'gorilla', name: 'Gorille', emoji: '🦍', description: 'Le puissant primate' }
      ]
    },
    {
      id: 'insects',
      name: 'Les Insectes',
      color: 'hsl(60 85% 55%)',
      members: [
        { id: 'bee', name: 'Abeille', emoji: '🐝', description: 'L\'ouvrière ailée' },
        { id: 'butterfly', name: 'Papillon', emoji: '🦋', description: 'La beauté volante' },
        { id: 'spider', name: 'Araignée', emoji: '🕷️', description: 'La tisseuse de toiles' },
        { id: 'ant', name: 'Fourmi', emoji: '🐜', description: 'La travailleuse infatigable' },
        { id: 'ladybug', name: 'Coccinelle', emoji: '🐞', description: 'La chasseuse de pucerons' },
        { id: 'mosquito', name: 'Moustique', emoji: '🦟', description: 'Le buveur de sang' }
      ]
    },
    {
      id: 'reptiles',
      name: 'Les Reptiles',
      color: 'hsl(180 85% 55%)',
      members: [
        { id: 'snake', name: 'Serpent', emoji: '🐍', description: 'Le glisseur silencieux' },
        { id: 'crocodile', name: 'Crocodile', emoji: '🐊', description: 'Le chasseur des marais' },
        { id: 'lizard', name: 'Lézard', emoji: '🦎', description: 'Le grimpeur agile' },
        { id: 'turtle', name: 'Tortue', emoji: '🐢', description: 'Le voyageur lent' },
        { id: 'chameleon', name: 'Caméléon', emoji: '🦎', description: 'Le maître du camouflage' },
        { id: 'gecko', name: 'Gecko', emoji: '🦎', description: 'Le grimpeur nocturne' }
      ]
    },
    {
      id: 'amphibians',
      name: 'Les Amphibiens',
      color: 'hsl(240 85% 65%)',
      members: [
        { id: 'frog', name: 'Grenouille', emoji: '🐸', description: 'Le sauteur agile' },
        { id: 'toad', name: 'Crapaud', emoji: '🐸', description: 'Le marcheur lent' },
        { id: 'salamander', name: 'Salamandre', emoji: '🦎', description: 'Le survivant du feu' },
        { id: 'newt', name: 'Triton', emoji: '🦎', description: 'Le nageur agile' },
        { id: 'axolotl', name: 'Axolotl', emoji: '🐠', description: 'Le régénérateur aquatique' },
        { id: 'caecilian', name: 'Cécilien', emoji: '🐍', description: 'L\'invisible fouisseur' }
      ]
    },
    {
      id: 'rodents',
      name: 'Les Rongeurs',
      color: 'hsl(300 85% 55%)',
      members: [
        { id: 'mouse', name: 'Souris', emoji: '🐭', description: 'Le petit curieux' },
        { id: 'rat', name: 'Rat', emoji: '🐀', description: 'Le survivant des villes' },
        { id: 'squirrel', name: 'Écureuil', emoji: '🐿️', description: 'Le grimpeur rapide' },
        { id: 'hamster', name: 'Hamster', emoji: '🐹', description: 'Le coureur nocturne' },
        { id: 'guinea-pig', name: 'Cobaye', emoji: '🐹', description: 'Le compagnon doux' },
        { id: 'beaver', name: 'Castor', emoji: '🦫', description: 'L\'architecte des rivières' }
      ]
    },
    {
      id: 'bats',
      name: 'Les Chauves-souris',
      color: 'hsl(330 85% 55%)',
      members: [
        { id: 'fruit-bat', name: 'Chauve-souris frugivore', emoji: '🦇', description: 'Le pollinisateur nocturne' },
        { id: 'vampire-bat', name: 'Chauve-souris vampire', emoji: '🦇', description: 'Le buveur de sang' },
        { id: 'little-brown-bat', name: 'Chauve-souris brune', emoji: '🦇', description: 'Le chasseur d\'insectes' },
        { id: 'big-eared-bat', name: 'Chauve-souris aux grandes oreilles', emoji: '🦇', description: 'L\'auditeur sensible' },
        { id: 'pipistrelle', name: 'Pipistrelle', emoji: '🦇', description: 'La petite chasseuse' },
        { id: 'flying-fox', name: 'Renard volant', emoji: '🦇', description: 'Le géant des airs' }
      ]
    }
  ],

  vehicles: [
    {
      id: 'cars',
      name: 'Les Voitures',
      color: 'hsl(220 85% 55%)',
      members: [
        { id: 'car', name: 'Voiture', emoji: '🚗', description: 'Le transport quotidien' },
        { id: 'taxi', name: 'Taxi', emoji: '🚕', description: 'Le transport à la demande' },
        { id: 'police', name: 'Police', emoji: '🚓', description: 'La voiture de patrouille' },
        { id: 'ambulance', name: 'Ambulance', emoji: '🚑', description: 'Le secours d\'urgence' },
        { id: 'sportcar', name: 'Sportive', emoji: '🏎️', description: 'La bolide de course' },
        { id: 'suv', name: 'SUV', emoji: '🚙', description: 'Le tout-terrain urbain' }
      ]
    },
    {
      id: 'trucks',
      name: 'Les Camions',
      color: 'hsl(200 85% 65%)',
      members: [
        { id: 'truck', name: 'Camion', emoji: '🚚', description: 'Le transporteur' },
        { id: 'fire', name: 'Pompiers', emoji: '🚒', description: 'Le sauveur rouge' },
        { id: 'garbage', name: 'Éboueurs', emoji: '🗑️', description: 'Le nettoyeur urbain' },
        { id: 'delivery', name: 'Livraison', emoji: '📦', description: 'Le messager rapide' },
        { id: 'cement', name: 'Bétonneuse', emoji: '🏗️', description: 'Le mélangeur mobile' },
        { id: 'tow', name: 'Dépanneuse', emoji: '🚨', description: 'Le secouriste mécanique' }
      ]
    },
    {
      id: 'air',
      name: 'Les Aériens',
      color: 'hsl(180 85% 55%)',
      members: [
        { id: 'plane', name: 'Avion', emoji: '✈️', description: 'Le voyageur des nuages' },
        { id: 'helicopter', name: 'Hélicoptère', emoji: '🚁', description: 'Le vol stationnaire' },
        { id: 'rocket', name: 'Fusée', emoji: '🚀', description: 'L\'explorateur spatial' },
        { id: 'balloon', name: 'Montgolfière', emoji: '🎈', description: 'Le voyageur paisible' },
        { id: 'jet', name: 'Jet privé', emoji: '🛩️', description: 'Le luxe volant' },
        { id: 'drone', name: 'Drone', emoji: '📡', description: 'L\'œil du ciel' }
      ]
    },
    {
      id: 'water',
      name: 'Les Marins',
      color: 'hsl(240 85% 65%)',
      members: [
        { id: 'boat', name: 'Bateau', emoji: '⛵', description: 'Le voilier élégant' },
        { id: 'ship', name: 'Navire', emoji: '🚢', description: 'Le géant des mers' },
        { id: 'submarine', name: 'Sous-marin', emoji: '🏊', description: 'L\'explorateur des profondeurs' },
        { id: 'yacht', name: 'Yacht', emoji: '🛥️', description: 'Le luxe flottant' },
        { id: 'ferry', name: 'Ferry', emoji: '⛴️', description: 'Le transporteur maritime' },
        { id: 'jetski', name: 'Jet-ski', emoji: '🏄', description: 'Le bolide des vagues' }
      ]
    },
    {
      id: 'bikes',
      name: 'Les Cycles',
      color: 'hsl(300 85% 55%)',
      members: [
        { id: 'bicycle', name: 'Bicyclette', emoji: '🚲', description: 'Le transport écologique' },
        { id: 'motorcycle', name: 'Moto', emoji: '🏍️', description: 'La liberté sur deux roues' },
        { id: 'scooter', name: 'Trottinette', emoji: '🛴', description: 'Le déplacement urbain' },
        { id: 'skateboard', name: 'Skateboard', emoji: '🛹', description: 'Le style de rue' },
        { id: 'rollerblades', name: 'Rollers', emoji: '🛼', description: 'Le patinage rapide' },
        { id: 'unicycle', name: 'Monocycle', emoji: '🎪', description: 'L\'équilibriste audacieux' }
      ]
    },
    {
      id: 'construction',
      name: 'Les Engins de Chantier',
      color: 'hsl(60 85% 55%)',
      members: [
        { id: 'bulldozer', name: 'Bulldozer', emoji: '🚜', description: 'Le puissant déblayeur' },
        { id: 'crane', name: 'Grue', emoji: '🏗️', description: 'Le lève-tout' },
        { id: 'excavator', name: 'Pelleteuse', emoji: '🚧', description: 'Le creuseur efficace' },
        { id: 'dump-truck', name: 'Camion-benne', emoji: '🚛', description: 'Le transporteur de terre' },
        { id: 'loader', name: 'Chargeuse', emoji: '🛠️', description: 'Le chargeur polyvalent' },
        { id: 'grader', name: 'Niveleuse', emoji: '🛤️', description: 'Le nivellement précis' }
      ]
    },
    {
      id: 'public-transport',
      name: 'Les Transports Publics',
      color: 'hsl(120 85% 45%)',
      members: [
        { id: 'bus', name: 'Bus', emoji: '🚌', description: 'Le transport en commun' },
        { id: 'tram', name: 'Tramway', emoji: '🚊', description: 'Le rail urbain' },
        { id: 'metro', name: 'Métro', emoji: '🚇', description: 'Le souterrain rapide' },
        { id: 'train', name: 'Train', emoji: '🚆', description: 'Le voyageur des rails' },
        { id: 'cable-car', name: 'Téléphérique', emoji: '🚡', description: 'Le transport aérien urbain' },
        { id: 'ferry-boat', name: 'Bateau-bus', emoji: '⛴️', description: 'Le transport maritime urbain' }
      ]
    },
    {
      id: 'space',
      name: 'Les Explorateurs de l\'Espace',
      color: 'hsl(300 85% 65%)',
      members: [
        { id: 'spaceship', name: 'Vaisseau spatial', emoji: '🚀', description: 'Le voyageur interstellaire' },
        { id: 'satellite', name: 'Satellite', emoji: '🛰️', description: 'L\'œil de l\'espace' },
        { id: 'space-station', name: 'Station spatiale', emoji: '🏠', description: 'La maison en orbite' },
        { id: 'rover', name: 'Rover', emoji: '🚙', description: 'L\'explorateur planétaire' },
        { id: 'space-shuttle', name: 'Navette spatiale', emoji: '🛸', description: 'Le transporteur orbital' },
        { id: 'space-probe', name: 'Sonde spatiale', emoji: '🔭', description: 'L\'explorateur lointain' }
      ]
    },
    {
      id: 'emergency',
      name: 'Les Urgences',
      color: 'hsl(0 85% 45%)',
      members: [
        { id: 'fire-truck', name: 'Camion de pompiers', emoji: '🚒', description: 'Le héros du feu' },
        { id: 'ambulance', name: 'Ambulance', emoji: '🚑', description: 'Le secours rapide' },
        { id: 'police-car', name: 'Voiture de police', emoji: '🚓', description: 'Le gardien de la loi' },
        { id: 'rescue-boat', name: 'Bateau de sauvetage', emoji: '🚤', description: 'Le sauveur des mers' },
        { id: 'rescue-helicopter', name: 'Hélicoptère de sauvetage', emoji: '🚁', description: 'L\'intervention aérienne' },
        { id: 'rescue-plane', name: 'Avion de sauvetage', emoji: '✈️', description: 'Le transport d\'urgence' }
      ]
    },
    {
      id: 'military',
      name: 'Les Militaires',
      color: 'hsl(30 85% 55%)',
      members: [
        {id: 'tank', name: 'Char d\'assaut', emoji: '🚜', description: 'Le blindé de combat'},
        {id: 'fighter-jet', name: 'Chasseur', emoji: '✈️', description: 'L\'avion de chasse'},
        {
          id: 'helicopter-gunship',
          name: 'Hélicoptère de combat',
          emoji: '🚁',
          description: 'L\'intervention aérienne armée'
        },
        {id: 'military-ship', name: 'Navire de guerre', emoji: '🚢', description: 'Le géant des mers armé'},
        {id: 'military-transport', name: 'Transport militaire', emoji: '🚚', description: 'Le transport de troupes'},
        {id: 'drone-military', name: 'Drone militaire', emoji: '📡', description: 'L\'œil du ciel armé'}
      ]
    }
  ],

  jobs: [
    {
      id: 'medical',
      name: 'La Médecine',
      color: 'hsl(280 85% 55%)',
      members: [
        { id: 'doctor', name: 'Médecin', emoji: '👨‍⚕️', description: 'Le guérisseur' },
        { id: 'nurse', name: 'Infirmière', emoji: '👩‍⚕️', description: 'L\'ange gardien' },
        { id: 'dentist', name: 'Dentiste', emoji: '🦷', description: 'Le soigneur de sourires' },
        { id: 'pharmacist', name: 'Pharmacien', emoji: '💊', description: 'L\'expert en médicaments' },
        { id: 'surgeon', name: 'Chirurgien', emoji: '🔪', description: 'L\'artisan de précision' },
        { id: 'paramedic', name: 'Ambulancier', emoji: '🚑', description: 'Le premier intervenant' }
      ]
    },
    {
      id: 'education',
      name: 'L\'Éducation',
      color: 'hsl(260 85% 65%)',
      members: [
        { id: 'teacher', name: 'Professeur', emoji: '👨‍🏫', description: 'Le transmetteur de savoir' },
        { id: 'student', name: 'Élève', emoji: '👨‍🎓', description: 'L\'apprenant curieux' },
        { id: 'principal', name: 'Directeur', emoji: '👔', description: 'Le chef d\'établissement' },
        { id: 'librarian', name: 'Bibliothécaire', emoji: '📚', description: 'Le gardien des livres' },
        { id: 'researcher', name: 'Chercheur', emoji: '🔬', description: 'L\'explorateur du savoir' },
        { id: 'coach', name: 'Coach sportif', emoji: '🏆', description: 'Le motivateur physique' }
      ]
    },
    {
      id: 'safety',
      name: 'La Sécurité',
      color: 'hsl(340 85% 55%)',
      members: [
        { id: 'police', name: 'Policier', emoji: '👮', description: 'Le gardien de l\'ordre' },
        { id: 'firefighter', name: 'Pompier', emoji: '👨‍🚒', description: 'Le héros du feu' },
        { id: 'guard', name: 'Garde', emoji: '💂', description: 'Le protecteur vigilant' },
        { id: 'detective', name: 'Détective', emoji: '🕵️', description: 'Le chercheur d\'indices' },
        { id: 'lifeguard', name: 'Sauveteur', emoji: '🏊‍♂️', description: 'Le gardien des plages' },
        { id: 'soldier', name: 'Soldat', emoji: '🪖', description: 'Le défenseur du pays' }
      ]
    },
    {
      id: 'food',
      name: 'La Cuisine',
      color: 'hsl(40 85% 55%)',
      members: [
        { id: 'chef', name: 'Chef', emoji: '👨‍🍳', description: 'L\'artiste culinaire' },
        { id: 'waiter', name: 'Serveur', emoji: '🍽️', description: 'L\'hôte attentionné' },
        { id: 'baker', name: 'Boulanger', emoji: '🥖', description: 'Le maître du pain' },
        { id: 'barista', name: 'Barista', emoji: '☕', description: 'L\'expert en café' },
        { id: 'butcher', name: 'Boucher', emoji: '🔪', description: 'Le découpeur précis' },
        { id: 'sommelier', name: 'Sommelier', emoji: '🍷', description: 'Le connaisseur des vins' }
      ]
    },
    {
      id: 'arts',
      name: 'Les Arts',
      color: 'hsl(120 85% 45%)',
      members: [
        { id: 'artist', name: 'Artiste', emoji: '🎨', description: 'Le créateur inspiré' },
        { id: 'musician', name: 'Musicien', emoji: '🎶', description: 'Le compositeur de mélodies' },
        { id: 'actor', name: 'Acteur', emoji: '🎭', description: 'Le maître de la scène' },
        { id: 'writer', name: 'Écrivain', emoji: '✍️', description: 'Le conteur d\'histoires' },
        { id: 'dancer', name: 'Danseur', emoji: '💃', description: 'Le mouvement artistique' },
        { id: 'photographer', name: 'Photographe', emoji: '📸', description: 'L\'œil capturant la beauté' }
      ]
    },
    {
      id: 'technology',
      name: 'La Technologie',
      color: 'hsl(200 85% 55%)',
      members: [
        { id: 'developer', name: 'Développeur', emoji: '💻', description: 'Le créateur de logiciels' },
        { id: 'engineer', name: 'Ingénieur', emoji: '🔧', description: 'Le bâtisseur de machines' },
        { id: 'scientist', name: 'Scientifique', emoji: '🔬', description: 'L\'explorateur des lois naturelles' },
        { id: 'designer', name: 'Designer', emoji: '🎨', description: 'L\'esthète fonctionnel' },
        { id: 'technician', name: 'Technicien', emoji: '🛠️', description: 'Le réparateur habile' },
        { id: 'data-analyst', name: 'Analyste de données', emoji: '📊', description:'L\'interprète des chiffres'}
      ]
    },
    {
      id: 'business',
      name: 'Les Affaires',
      color: 'hsl(280 85% 65%)',
      members: [
        { id: 'entrepreneur', name: 'Entrepreneur', emoji: '💼', description: 'Le créateur d\'entreprises' },
        { id: 'manager', name: 'Manager', emoji: '👔', description: 'Le chef d\'équipe' },
        { id: 'accountant', name: 'Comptable', emoji: '💰', description: 'Le gardien des finances' },
        { id: 'marketer', name: 'Marketeur', emoji: '📈', description: 'Le promoteur de produits' },
        { id: 'salesperson', name: 'Vendeur', emoji: '🛒', description: 'Le négociant habile' },
        { id: 'consultant', name: 'Consultant', emoji: '🗣️', description: 'Le conseiller stratégique' }
      ]
    },
    {
      id: 'service',
      name: 'Les Services',
      color: 'hsl(240 85% 55%)',
      members: [
        { id: 'hairdresser', name: 'Coiffeur', emoji: '💇', description: 'Le styliste capillaire' },
        { id: 'plumber', name: 'Plombier', emoji: '🚰', description: 'Le réparateur de tuyaux' },
        { id: 'electrician', name: 'Électricien', emoji: '💡', description: 'Le maître du courant' },
        { id: 'car-mechanic', name: 'Mécanicien', emoji: '🔧', description: 'Le soigneur de voitures' },
        { id: 'cleaner', name: 'Agent d\'entretien', emoji: '🧹', description: 'Le nettoyeur diligent' },
        { id: 'gardener', name: 'Jardinier', emoji: '🌱', description: 'Le cultivateur de verdure' }
      ]
    },
    {
      id: 'transport',
      name: 'Le Transport',
      color: 'hsl(160 85% 55%)',
      members: [
        { id: 'driver', name: 'Chauffeur', emoji: '🚗', description: 'Le conducteur de véhicules' },
        { id: 'pilot', name: 'Pilote', emoji: '✈️', description: 'Le maître des airs' },
        { id: 'conductor', name: 'Conducteur de train', emoji: '🚆', description: 'Le guide des rails' },
        { id: 'ship-captain', name: 'Capitaine de navire', emoji: '🚢', description: 'Le navigateur des mers' },
        { id: 'bus-driver', name: 'Conducteur de bus', emoji: '🚌', description: 'Le transporteur urbain' },
        { id: 'truck-driver', name: 'Conducteur de camion', emoji: '🚚', description: 'Le transporteur de marchandises' }
      ]
    },
    {
      id: 'hospitality',
      name: 'L\'Hôtellerie',
      color: 'hsl(20 85% 55%)',
      members: [
        { id: 'hotel-manager', name: 'Directeur d\'hôtel', emoji: '🏨', description: 'Le gestionnaire d\'établissement' },
        { id: 'receptionist', name: 'Réceptionniste', emoji: '👩‍💼', description: 'L\'accueil des clients' },
        { id: 'housekeeper', name: 'Femme de chambre', emoji: '🧹', description: 'Le soin des chambres' },
        { id: 'concierge', name: 'Concierge', emoji: '🔑', description: 'Le guide des services' },
        { id: 'bartender', name: 'Barman', emoji: '🍹', description: 'Le mixologue de boissons' },
        { id: 'waitstaff', name: 'Personnel de salle', emoji: '🍽️', description: 'Le service aux tables' }
      ]
    }
  ],

  nature: [
    {
      id: 'trees',
      name: 'Les Arbres',
      color: 'hsl(140 85% 45%)',
      members: [
        { id: 'oak', name: 'Chêne', emoji: '🌳', description: 'Le géant centenaire' },
        { id: 'pine', name: 'Sapin', emoji: '🌲', description: 'L\'éternel vert' },
        { id: 'palm', name: 'Palmier', emoji: '🌴', description: 'L\'ami des tropiques' },
        { id: 'bamboo', name: 'Bambou', emoji: '🎋', description: 'La grâce flexible' },
        { id: 'maple', name: 'Érable', emoji: '🍁', description: 'L\'emblème canadien' },
        { id: 'willow', name: 'Saule', emoji: '🌿', description: 'Le pleureur gracieux' }
      ]
    },
    {
      id: 'flowers',
      name: 'Les Fleurs',
      color: 'hsl(120 85% 55%)',
      members: [
        { id: 'rose', name: 'Rose', emoji: '🌹', description: 'La reine parfumée' },
        { id: 'sunflower', name: 'Tournesol', emoji: '🌻', description: 'Le suiveur de soleil' },
        { id: 'tulip', name: 'Tulipe', emoji: '🌷', description: 'La beauté printanière' },
        { id: 'daisy', name: 'Marguerite', emoji: '🌼', description: 'La simplicité charmante' },
        { id: 'lily', name: 'Lys', emoji: '⚜️', description: 'L\'élégance royale' },
        { id: 'orchid', name: 'Orchidée', emoji: '🪷', description: 'L\'exotique délicate' }
      ]
    },
    {
      id: 'weather',
      name: 'Le Temps',
      color: 'hsl(200 85% 55%)',
      members: [
        { id: 'sun', name: 'Soleil', emoji: '☀️', description: 'L\'astre de vie' },
        { id: 'cloud', name: 'Nuage', emoji: '☁️', description: 'Le voyageur du ciel' },
        { id: 'rain', name: 'Pluie', emoji: '🌧️', description: 'La bénédiction de la terre' },
        { id: 'snow', name: 'Neige', emoji: '❄️', description: 'La pureté cristalline' },
        { id: 'lightning', name: 'Éclair', emoji: '⚡', description: 'La fureur céleste' },
        { id: 'rainbow', name: 'Arc-en-ciel', emoji: '🌈', description: 'Le pont coloré' }
      ]
    },
    {
      id: 'landscapes',
      name: 'Les Paysages',
      color: 'hsl(100 85% 45%)',
      members: [
        { id: 'mountain', name: 'Montagne', emoji: '⛰️', description: 'Le géant de pierre' },
        { id: 'volcano', name: 'Volcan', emoji: '🌋', description: 'Le cœur de feu' },
        { id: 'desert', name: 'Désert', emoji: '🏜️', description: 'L\'étendue dorée' },
        { id: 'forest', name: 'Forêt', emoji: '🌲', description: 'Le poumon vert' },
        { id: 'beach', name: 'Plage', emoji: '🏖️', description: 'Le paradis de sable' },
        { id: 'glacier', name: 'Glacier', emoji: '🧊', description: 'Le géant de glace' }
      ]
    },
    {
      id: 'animals',
      name: 'Les Animaux',
      color: 'hsl(60 85% 55%)',
      members: [
        {id: 'lion', name: 'Lion', emoji: '🦁', description: 'Le roi de la savane'},
        {id: 'tiger', name: 'Tigre', emoji: '🐅', description: 'Le chasseur rayé'},
        {id: 'bear', name: 'Ours', emoji: '🐻', description: 'Le géant des forêts'},
        {id: 'wolf', name: 'Loup', emoji: '🐺', description: 'Le prédateur rusé'},
        {id: 'fox', name: 'Renard', emoji: '🦊', description: 'Le malin des bois'},
        {id: 'lynx', name: 'Lynx', emoji: '😺', description: 'Le félin aux oreilles pointues'}
      ]
    },
    {
      id: 'rocks',
      name: 'Les Roches',
      color: 'hsl(300 85% 55%)',
      members: [
        { id: 'granite', name: 'Granite', emoji: '🪨', description: 'La pierre dure' },
        { id: 'limestone', name: 'Calcaire', emoji: '🪨', description: 'La roche sédimentaire' },
        { id: 'sandstone', name: 'Grès', emoji: '🪨', description: 'Le sable compacté' },
        { id: 'basalt', name: 'Basalte', emoji: '🪨', description: 'La roche volcanique' },
        { id: 'marble', name: 'Marbre', emoji: '🪨', description: 'La beauté polie' },
        { id: 'slate', name: 'Ardoise', emoji: '🪨', description: 'La pierre feuilletée' }
      ]
    },
    {
      id: 'water-bodies',
      name: 'Les Plans d\'Eau',
      color: 'hsl(180 85% 55%)',
      members: [
        { id: 'river', name: 'Rivière', emoji: '🌊', description: 'Le cours d\'eau sinueux' },
        { id: 'lake', name: 'Lac', emoji: '🏞️', description: 'Le miroir de la nature' },
        { id: 'ocean', name: 'Océan', emoji: '🌊', description:'L\'immensité bleue'},
        { id: 'pond', name:'Étang', emoji:'🦆', description:'Le petit plan d\'eau'},
        { id:'waterfall', name:'Chute d\'eau', emoji:'💧', description:'Le spectacle aquatique'},
        {id:'glacier-lake', name:'Lac glaciaire', emoji:'❄️', description:'Le lac des glaciers'}
      ]
    },
    {
      id: 'sky',
      name: 'Le Ciel',
      color: 'hsl(240 85% 65%)',
      members: [
        { id: 'cloud', name: 'Nuage', emoji: '☁️', description: 'Le voyageur du ciel' },
        { id: 'rainbow', name: 'Arc-en-ciel', emoji: '🌈', description: 'Le pont coloré' },
        { id: 'star', name: 'Étoile', emoji: '⭐', description: 'La lumière lointaine' },
        { id: 'moon', name: 'Lune', emoji: '🌕', description: 'La gardienne de la nuit' },
        { id: 'sunset', name: 'Coucher de soleil', emoji: '🌅', description:'Le spectacle crépusculaire'},
        { id:'aurora-borealis', name:'Aurore boréale', emoji:'🌌', description:'La danse des lumières'}
      ]
    },
    {
      id: 'ecosystems',
      name: 'Les Écosystèmes',
      color: 'hsl(300 85% 55%)',
      members: [
        { id: 'rainforest', name: 'Forêt tropicale', emoji: '🌴', description: 'Le poumon de la planète' },
        { id: 'desert', name: 'Désert', emoji: '🏜️', description: 'L\'étendue aride' },
        { id: 'coral-reef', name: 'Récif corallien', emoji: '🐠', description: 'Le jardin sous-marin' },
        { id: 'tundra', name: 'Toundra', emoji: '❄️', description: 'Le froid extrême' },
        { id: 'grassland', name: 'Prairie', emoji: '🌾', description:'La vaste étendue herbeuse'},
        { id:'wetland', name:'Zone humide', emoji:'🌿', description:'Le refuge aquatique'}
      ]
    },
    {
      id: 'insects',
      name: 'Les Insectes',
      color: 'hsl(60 85% 55%)',
      members: [
        {id: 'butterfly', name: 'Papillon', emoji: '🦋', description: 'Le vol coloré'},
        {id: 'bee', name: 'Abeille', emoji: '🐝', description: 'Le pollinisateur essentiel'},
        {id: 'ant', name: 'Fourmi', emoji: '🐜', description: 'La travailleuse acharnée'},
        {id: 'dragonfly', name: 'Libellule', emoji: '🪲', description: 'Le chasseur agile'},
        {id: 'grasshopper', name: 'Sauterelle', emoji: '🦗', description: 'Le sauteur rapide'},
        {id: 'ladybug', name: 'Coccinelle', emoji: '🐞', description: 'La chasseuse de pucerons'}
      ]
    }
  ]
};