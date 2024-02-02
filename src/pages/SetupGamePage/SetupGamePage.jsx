import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { usePlayers } from "../../hooks/usePlayers";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import "./SetupGamePage.scss";

export const SetupGamePage = () => {
  const navigate = useNavigate();
  const { deckId } = useParams();
  const {
    players,
    setPlayers,
    addPlayer,
    handlePlayerChange,
    savePlayers,
    getPlayers,
  } = usePlayers();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (players.filter((p) => p).length < 2) return;

    savePlayers();

    navigate(`/decks/${deckId}/play`);
  };

  useEffect(() => {
    const savedPlayers = getPlayers();
    setPlayers(savedPlayers || ["", ""]);
  }, []);

  return (
    <>
      <Header />
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
    </>
  );
};
