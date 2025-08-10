import {Dispatch, Fragment, useState} from 'react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {Badge} from '@/components/ui/badge';
import {Slider} from '@/components/ui/slider';
import {RadioGroup, RadioGroupItem} from '@/components/ui/radio-group';
import {Label} from '@/components/ui/label';
import {GameConfig, Theme, GameMode, THEMES} from '@/types/game';
import {FAMILIES_DATA, MAX_FAMILIES} from "@/data/families.ts";
import * as LucideIcons from 'lucide-react';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion.tsx";
import {Header} from "@radix-ui/react-accordion";
import {GameCard} from "@/components/GameCard.tsx";

interface GameSetupProps {
  onStartGame: (config: GameConfig) => void,
  theme?: Theme,
  setTheme?: Dispatch<Theme>,
}

const MIN = 4;

// Function to dynamically render lucide-react icons
function renderIcon(iconName: string, className: string) {
  const IconComponent = LucideIcons[iconName];
  if (IconComponent) {
    return <IconComponent className={className} />;
  }
  // Fallback to Circle icon if the specified icon doesn't exist
  return <LucideIcons.XIcon data-notfoundicon={iconName} className={className} />;
}

export function GameSetup({onStartGame, theme: propTheme, setTheme: propSetTheme}: GameSetupProps) {
  const [internalTheme, setInternalTheme] = useState<Theme>('animals');
  const [familyCount, setFamilyCount] = useState([7]);
  const [gameMode, setGameMode] = useState<GameMode>('human-vs-ai');

  // Use prop theme if provided, otherwise use internal state
  const theme = propTheme ?? internalTheme;
  const setTheme = propSetTheme ?? setInternalTheme;

  const handleStartGame = () => {
    onStartGame({
      theme,
      familyCount: familyCount[0],
      gameMode
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-background">
      <Card className="w-full max-w-2xl shadow-card border-2 border-primary/20 bg-gradient-card">
        <CardHeader className="text-center space-y-4">
          <CardTitle className="text-4xl font-bold text-primary">
            🎯 Jeu des Familles
          </CardTitle>
          <CardDescription className="text-lg text-muted-foreground">
            Configurez votre partie et amusez-vous !
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-8">
          {/* Sélection du thème */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">Choisissez un thème</h3>
            <div className="grid gap-4 md:grid-cols-5 sm:grid-cols-4 grid-cols-2">
              {Object.entries(THEMES).map(([key, themeInfo]) => (
                <Card
                  key={key}
                  className={`cursor-pointer transition-all duration-300 border-2 card-hover ${
                    theme === key
                      ? 'border-primary bg-primary/10 shadow-glow'
                      : 'border-border hover:border-primary/50'
                  }`}
                  onClick={() => setTheme(key as Theme)}
                >
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-2">
                      {renderIcon(themeInfo.icon, "w-8 h-8")}
                    </div>
                    <h4 className="font-semibold text-foreground justify-self-center">{themeInfo.name}</h4>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Accordion type="single" collapsible>
              <AccordionItem value="cards">
                <AccordionTrigger>
                  Cartes
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-2 bg-background p-4 rounded-lg">
                  {FAMILIES_DATA[theme].map(family => (
                    <Fragment key={family.id}>
                      <Header style={{color: family.color}} className="text-shadow-xs text-shadow-gray-200">{family.name}</Header>
                      <div className="flex gap-2 flex-wrap">{
                        family.members.map(member => (
                          <GameCard key={member.id} family={family} member={member} size="small" />
                        ))
                      }</div>
                    </Fragment>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Nombre de familles */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-foreground">Nombre de familles</h3>
              <Badge variant="secondary" className="text-lg px-3 py-1">
                {familyCount[0]}
              </Badge>
            </div>
            <Slider
              value={familyCount}
              onValueChange={setFamilyCount}
              max={MAX_FAMILIES}
              min={MIN}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>{MIN} familles</span>
              <span>{MAX_FAMILIES} familles</span>
            </div>
          </div>

          {/* Mode de jeu */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">Mode de jeu</h3>
            <RadioGroup className="grid sm:grid-cols-2 grid-cols-1" value={gameMode}
                        onValueChange={(value) => setGameMode(value as GameMode)}>
              <div
                className="flex items-center space-x-3 p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                <RadioGroupItem value="human-vs-ai" id="human-vs-ai"/>
                <Label htmlFor="human-vs-ai" className="flex-1 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🤖</span>
                    <div>
                      <div className="font-medium">Joueur contre IA</div>
                      <div className="text-sm text-muted-foreground">Affrontez l'ordinateur</div>
                    </div>
                  </div>
                </Label>
              </div>
              <div
                className="flex items-center space-x-3 p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                <RadioGroupItem value="human-vs-human" id="human-vs-human"/>
                <Label htmlFor="human-vs-human" className="flex-1 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">👥</span>
                    <div>
                      <div className="font-medium">2 Joueurs humains</div>
                      <div className="text-sm text-muted-foreground">Jouez avec un ami</div>
                    </div>
                  </div>
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Bouton de démarrage */}
          <Button
            onClick={handleStartGame}
            className="w-full text-lg py-6 bg-gradient-primary hover:scale-105 transition-all duration-300 shadow-card hover:shadow-hover"
          >
            🚀 Commencer la partie
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}