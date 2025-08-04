import { Family, Theme } from '@/types/game';

export const FAMILIES_DATA: Record<Theme, Family[]> = {
  animals: [
    {
      id: 'cats',
      name: 'Les Félins',
      color: 'hsl(35 85% 55%)',
      members: [
        { id: 'lion', name: 'Lion', emoji: '🦁', description: 'Le roi de la savane' },
        { id: 'tiger', name: 'Tigre', emoji: '🐅', description: 'Le chasseur rayé' },
        { id: 'leopard', name: 'Léopard', emoji: '🐆', description: 'Le grimpeur tacheté' },
        { id: 'cat', name: 'Chat', emoji: '🐱', description: 'Le compagnon domestique' }
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
        { id: 'penguin', name: 'Pingouin', emoji: '🐧', description: 'Le nageur en smoking' }
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
        { id: 'octopus', name: 'Pieuvre', emoji: '🐙', description: 'Le maître du camouflage' }
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
        { id: 'sheep', name: 'Mouton', emoji: '🐑', description: 'Le nuage sur pattes' }
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
        { id: 'rhino', name: 'Rhinocéros', emoji: '🦏', description: 'Le blindé cornu' }
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
        { id: 'ant', name: 'Fourmi', emoji: '🐜', description: 'La travailleuse infatigable' }
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
        { id: 'ambulance', name: 'Ambulance', emoji: '🚑', description: 'Le secours d\'urgence' }
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
        { id: 'delivery', name: 'Livraison', emoji: '📦', description: 'Le messager rapide' }
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
        { id: 'balloon', name: 'Montgolfière', emoji: '🎈', description: 'Le voyageur paisible' }
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
        { id: 'yacht', name: 'Yacht', emoji: '🛥️', description: 'Le luxe flottant' }
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
        { id: 'pharmacist', name: 'Pharmacien', emoji: '💊', description: 'L\'expert en médicaments' }
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
        { id: 'librarian', name: 'Bibliothécaire', emoji: '📚', description: 'Le gardien des livres' }
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
        { id: 'detective', name: 'Détective', emoji: '🕵️', description: 'Le chercheur d\'indices' }
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
        { id: 'barista', name: 'Barista', emoji: '☕', description: 'L\'expert en café' }
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
        { id: 'bamboo', name: 'Bambou', emoji: '🎋', description: 'La grâce flexible' }
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
        { id: 'daisy', name: 'Marguerite', emoji: '🌼', description: 'La simplicité charmante' }
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
        { id: 'snow', name: 'Neige', emoji: '❄️', description: 'La pureté cristalline' }
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
        { id: 'forest', name: 'Forêt', emoji: '🌲', description: 'Le poumon vert' }
      ]
    }
  ]
};