import { DeckInfo } from "components";
import "./DeckList.scss";

export const DeckList = ({ decks }) => {
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
