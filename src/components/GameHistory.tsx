import React, { useState } from 'react';
import { HistoryEvent, EVENT_DISPLAY_CONFIG } from '@/types/history.tsx';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface GameHistoryProps {
  events: HistoryEvent[];
  maxVisibleEvents?: number;
  className?: string;
}

export function GameHistory({ 
  events, 
  maxVisibleEvents = 5,
  className = '' 
}: GameHistoryProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showFullDetails, setShowFullDetails] = useState(false);

  // Handle undefined events by defaulting to empty array
  const safeEvents = events || [];
  const visibleEvents = isExpanded ? safeEvents : safeEvents.slice(0, maxVisibleEvents);
  const hasMoreEvents = safeEvents.length > maxVisibleEvents;

  if (safeEvents.length === 0) {
    return (
      <Card className={`w-full ${className}`}>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm">
            Historique du jeu
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <p className="text-sm text-muted-foreground text-center py-4">
            Aucun événement pour le moment
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={`w-full ${className}`}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm">
            Historique ({safeEvents.length})
          </CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowFullDetails(!showFullDetails)}
            className="h-6 px-2 text-xs"
          >
            {showFullDetails ? 'Compact' : 'Détails'}
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <ScrollArea className="h-32">
          <div className="space-y-1">
            {visibleEvents.map((event) => {
              const config = EVENT_DISPLAY_CONFIG[event.type];
              return (
                <div
                  key={event.id}
                  className="flex items-start gap-2 p-2 rounded-md bg-muted/30 hover:bg-muted/50 transition-colors"
                >
                  <span className="text-sm flex-shrink-0 mt-0.5">
                    {config.icon}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className={`text-xs ${config.color} font-medium`}>
                      {showFullDetails ? (
                        <div>
                          <div>{config.shortFormat(event)}</div>
                          {event.details && (
                            <div className="text-muted-foreground mt-1">
                              {event.details}
                            </div>
                          )}
                        </div>
                      ) : (
                        config.shortFormat(event)
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollArea>
        
        {hasMoreEvents && (
          <div className="mt-2 pt-2 border-t">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full h-6 text-xs"
            >
              {isExpanded ? (
                <>
                  <ChevronUp className="h-3 w-3 mr-1" />
                  Voir moins
                </>
              ) : (
                <>
                  <ChevronDown className="h-3 w-3 mr-1" />
                  Voir plus ({safeEvents.length - maxVisibleEvents})
                </>
              )}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}