import "./PlayerInput.scss";

export const PlayerInput = ({ player, playerNum, onChange }) => {
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
