import "./DeckList.scss";
import { Deck } from "types";
import { DeckInfo } from "components";

interface DeckListProps {
  decks: Deck[];
}

export const DeckList = ({ decks }: DeckListProps) => {
  return (
    <ul className="deck-list">
      {decks.map((deck) => {
        return (
          <li key={deck.id}>
            <DeckInfo deck={deck} />
          </li>
        );
      })}
    </ul>
  );
};
