import { CardInfo } from "components";
import "./CardList.scss";
import { Card, DeckCard } from "types";

interface CardListProps {
  cards: Card[] | DeckCard[];
}

export const CardList = ({ cards }: CardListProps) => {
  return (
    <ul className="card-list">
      {cards.map((card) => {
        return (
          <li key={card.id}>
            <CardInfo card={card} />
          </li>
        );
      })}
    </ul>
  );
};
