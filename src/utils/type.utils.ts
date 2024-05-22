import { Deck, Card, DeckCard, DeckWithCards } from "types";

export const isDeck = (data: any): data is Deck => {
  return (
    typeof data.id === "number" &&
    typeof data.name === "string" &&
    typeof data.is_custom === "boolean" &&
    typeof data.is_scored === "boolean" &&
    typeof data.is_playable === "boolean"
  );
};
export const isDeckArray = (data: any): data is Deck[] => {
  return Array.isArray(data) && data.every(isDeck);
};

export const isCard = (data: any): data is Card => {
  return (
    typeof data.id === "number" &&
    typeof data.name === "string" &&
    typeof data.description === "string"
  );
};

export const isCardArray = (data: any): data is Card[] => {
  return Array.isArray(data) && data.every(isCard);
};

export const isDeckCard = (data: any): data is DeckCard => {
  return (
    typeof data.id === "number" &&
    typeof data.name === "string" &&
    typeof data.description === "string" &&
    (data.penalty === undefined || typeof data.penalty === "number") &&
    (data.occurrences === undefined || typeof data.occurrences === "number")
  );
};

export const isDeckWithCards = (data: any): data is DeckWithCards => {
  return (
    typeof data.id === "number" &&
    typeof data.name === "string" &&
    typeof data.is_custom === "boolean" &&
    typeof data.is_scored === "boolean" &&
    typeof data.is_playable === "boolean" &&
    Array.isArray(data.cards) &&
    data.cards.every(isDeckCard)
  );
};
