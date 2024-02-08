import "./CardInfo.scss";

export const CardInfo = ({ card, deckDetails }) => {
  return (
    <article className="card-info">
      <div className="card-info__container">
        <h3 className="card-info__title">{card.name}</h3>
        <p className="card-info__description">{card.description}</p>
        {deckDetails && (deckDetails.isCustom || deckDetails.isScored) && (
          <div className="card-info__info">
            {deckDetails.isScored && (
              <p className="card-info__info-item">Penalty: {card.penalty}</p>
            )}
            {deckDetails.isCustom && (
              <p className="card-info__info-item card-info__info-item--occurences">
                x{card.occurences}
              </p>
            )}
          </div>
        )}
      </div>
    </article>
  );
};
