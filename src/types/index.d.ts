export interface User {
  id: string;
  token: string;
}

export interface Deck {
  id: number;
  name: string;
  is_scored: boolean;
  is_custom: boolean;
  is_playable: boolean;
}

export interface Card {
  id: number;
  name: string;
  description: string;
}

export interface DeckCard extends Card {
  penalty?: number;
  occurrences?: number;
}

export interface DeckWithCards extends Deck {
  cards: Card[];
}
