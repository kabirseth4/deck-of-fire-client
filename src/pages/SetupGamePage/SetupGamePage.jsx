import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./SetupGamePage.scss";

export const SetupGamePage = () => {
  const navigate = useNavigate();
  const { deckId } = useParams();
  const [players, setPlayers] = useState(["", ""]);

  const handlePlayerChange = (e) => {
    const index = Number(e.target.name);

    setPlayers((prevPlayers) => {
      const updatedPlayers = [...prevPlayers];
      updatedPlayers[index] = e.target.value;
      return updatedPlayers;
    });
  };

  const addPlayer = () => {
    setPlayers((prevPlayers) => [...prevPlayers, ""]);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("players", JSON.stringify(players));

    navigate(`/decks/${deckId}/play`);
  };

  useEffect(() => {
    const savedPlayers = JSON.parse(localStorage.getItem("players"));
    if (savedPlayers) setPlayers(savedPlayers);
  }, []);

  return (
    <main className="setup-game-page">
      <Link to={`/decks/${deckId}`}>{"<- Back"}</Link>
      <form className="setup-game-page__form" onSubmit={handleFormSubmit}>
        {players.map((player, i) => {
          return (
            <label key={i + 1}>
              {`Player ${i + 1}: `}
              <input
                type="text"
                name={i}
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
