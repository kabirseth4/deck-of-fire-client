import { DeckCard } from "./data";

export interface GameCard extends DeckCard {
  key: string;
  swiped: boolean;
}

export interface GameDeck {
  name: string;
  cards: GameCard[];
}
