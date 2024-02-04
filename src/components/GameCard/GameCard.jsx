import TinderCard from "react-tinder-card";
import "./GameCard.scss";

export const GameCard = ({ card, className, updateCard }) => {
  return (
    <TinderCard
      className={`game-card${className ? ` ${className}` : ""}${
        card.swiped ? " game-card--swiped" : ""
      }`}
      onSwipe={updateCard}
    >
      <h3>{card.name}</h3>
      <h3>{card.name}</h3>
    </TinderCard>
  );
};
