import { CardInfo } from "../CardInfo/CardInfo";
import "./CardList.scss";

export const CardList = ({ cards, deckDetails }) => {
  return (
    <ul className="card-list">
      {cards.map((card) => {
        return (
          <li key={card.id}>
            <CardInfo card={card} deckDetails={deckDetails} />
          </li>
        );
      })}
    </ul>
  );
};
