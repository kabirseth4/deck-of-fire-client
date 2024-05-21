import TinderCard from "react-tinder-card";
import "./GameCard.scss";

export const GameCard = ({ card, className, onSwipe }) => {
  return (
    <TinderCard
      className={`game-card${className ? ` ${className}` : ""}${
        card.swiped ? " game-card--swiped" : ""
      }`}
      onSwipe={onSwipe}
    >
      <div className="game-card__width-forcer" />
      <div className="game-card__container">
        <h3 className="game-card__title">{card.name}</h3>
        <div className="game-card__info-container">
          <p>{card.description}</p>
          {!!card.penalty && <p>Penalty: {card.penalty}</p>}
        </div>
        <h3 className="game-card__title game-card__title--bottom">
          {card.name}
        </h3>
      </div>
    </TinderCard>
  );
};
