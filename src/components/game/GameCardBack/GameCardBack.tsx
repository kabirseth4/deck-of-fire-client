import "./GameCardBack.scss";
import TinderCard from "react-tinder-card";

interface GameCardProps {
  onSwipe?: React.ComponentProps<typeof TinderCard>["onSwipe"];
  label: string;
  disabled?: boolean;
}

export const GameCardBack = ({ onSwipe, label, disabled }: GameCardProps) => {
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
