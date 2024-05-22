import "./CardInfo.scss";
import { Card, DeckCard } from "types";
import { isDeckCard } from "utils";

interface CardInfoProps {
  card: Card | DeckCard;
}

export const CardInfo = ({ card }: CardInfoProps) => {
  return (
    <article className="card-info">
      <div className="card-info__container">
        <h3 className="card-info__title">{card.name}</h3>
        <p className="card-info__description">{card.description}</p>
        {isDeckCard(card) && (
          <div className="card-info__info">
            {card.penalty && (
              <p className="card-info__info-item">Penalty: {card.penalty}</p>
            )}
            {card.occurrences && (
              <p className="card-info__info-item card-info__info-item--occurrences">
                x{card.occurrences}
              </p>
            )}
          </div>
        )}
      </div>
    </article>
  );
};
