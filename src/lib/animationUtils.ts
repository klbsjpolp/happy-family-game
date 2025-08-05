export function getElementPosition(elementId: string): { x: number, y: number } | null {
  const element = document.getElementById(elementId);
  if (!element) return null;
  const rect = element.getBoundingClientRect();
  return {
    x: rect.left + rect.width / 2,
    y: rect.top + rect.height / 2
  };
}

export function getCardPosition(playerId: number, cardId: string): { x: number, y: number } {
  const cardElement = document.getElementById(`card-${cardId}`);
  if (cardElement) {
    const rect = cardElement.getBoundingClientRect();
    return {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2
    };
  }
  return getHandPosition(playerId);
}

export function getHandPosition(playerId: number): { x: number, y: number } {
  const handElement = document.getElementById(`player-hand-${playerId}`);
  if (handElement) {
    const rect = handElement.getBoundingClientRect();
    return {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2
    };
  }
  return playerId === 0
    ? { x: window.innerWidth * 0.25, y: window.innerHeight * 0.7 }
    : { x: window.innerWidth * 0.75, y: window.innerHeight * 0.3 };
}

export function getDeckPosition(): { x: number, y: number } {
  const deckElement = document.getElementById('deck');
  if (deckElement) {
    const rect = deckElement.getBoundingClientRect();
    return {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2
    };
  }
  return { x: window.innerWidth / 2, y: window.innerHeight / 2 };
}

export function getFamilyCountPosition(): { x: number, y: number } {
  const countElement = document.getElementById('family-count');
  if (countElement) {
    const rect = countElement.getBoundingClientRect();
    return {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2
    };
  }
  return { x: window.innerWidth * 0.9, y: window.innerHeight * 0.1 };
}

