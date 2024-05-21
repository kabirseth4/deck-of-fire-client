import TinderCard from "react-tinder-card";
import "./GameCardBack.scss";

export const GameCardBack = ({ onSwipe, label, disabled }) => {
  return (
    <TinderCard
      className="game-card-back"
      onSwipe={onSwipe}
      preventSwipe={disabled ? ["left", "right", "up", "down"] : []}
    >
      <div className="game-card__width-forcer" />
      <div className="game-card-back__container">
        <div className="game-card-back__info-container" lang="en">
          <p>{label}</p>
        </div>
      </div>
    </TinderCard>
  );
};
