import TinderCard from "react-tinder-card";
import "./GameCard.scss";

export const GameCard = ({ card, className, nextTurn }) => {
  return (
    <TinderCard
      className={`game-card${className ? ` ${className}` : ""}${
        card.swiped ? " game-card--swiped" : ""
      }`}
      onSwipe={nextTurn}
    >
      <div className="game-card__container">
        <h3 className="game-card__title">{card.name}</h3>
        <div className="game-card__info-container">
          <p>{card.description}</p>
        </div>
        <h3 className="game-card__title game-card__title--bottom">
          {card.name}
        </h3>
      </div>
    </TinderCard>
  );
};
