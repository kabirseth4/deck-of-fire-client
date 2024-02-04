import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { usePlayers } from "../../hooks/usePlayers";
import { Link } from "react-router-dom";
import "./SetupGamePage.scss";

export const SetupGamePage = () => {
  const { deckId } = useParams();
  const {
    players,
    setPlayers,
    addPlayer,
    handlePlayerChange,
    getPlayers,
    handleFormSubmit,
  } = usePlayers();

  useEffect(() => {
    const savedPlayers = getPlayers();
    setPlayers(savedPlayers || ["", ""]);
  }, []);

  return (
    <main className="setup-game-page">
      <Link to={`/decks/${deckId}`}>{"<- Back"}</Link>
      <form className="setup-game-page__form" onSubmit={handleFormSubmit}>
        {players &&
          players.map((player, i) => {
            return (
              <label key={i + 1}>
                {`Player ${i + 1}: `}
                <input
                  type="text"
                  name={i + 1}
                  placeholder="Player name"
                  value={player}
                  onChange={handlePlayerChange}
                />
              </label>
            );
          })}
        <button type="button" onClick={addPlayer}>
          Add player
        </button>
        <button>Play game</button>
      </form>
    </main>
  );
};
