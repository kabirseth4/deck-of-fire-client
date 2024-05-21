import { Card, DeckCard } from "types";
import "./CardInfo.scss";

interface CardInfoProps {
  card: Card | DeckCard;
}

const isDeckCard = (card: Card | DeckCard): card is DeckCard => {
  return (
    (card as DeckCard).penalty !== undefined ||
    (card as DeckCard).occurrences !== undefined
  );
};

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
