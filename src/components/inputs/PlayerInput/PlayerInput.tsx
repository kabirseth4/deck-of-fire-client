import "./PlayerInput.scss";

interface PlayerInputProps {
  player: string;
  playerNum: string;
  onChange: () => void;
}

export const PlayerInput = ({
  player,
  playerNum,
  onChange,
}: PlayerInputProps) => {
  return (
    <label className="player-input__label">
      {`Player ${playerNum}: `}
      <input
        className="player-input__input"
        type="text"
        name={playerNum}
        placeholder="Player name"
        value={player}
        onChange={onChange}
      />
    </label>
  );
};
