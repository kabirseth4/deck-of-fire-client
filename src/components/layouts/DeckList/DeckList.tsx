import "./DeckList.scss";
import { DeckInfo } from "components";
import { Deck } from "types";

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
