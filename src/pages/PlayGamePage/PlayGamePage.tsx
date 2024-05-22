import "./PlayGamePage.scss";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { usePlayers } from "hooks";
import { GamePlayers, GameDeck } from "components";

export const PlayGamePage = () => {
  const navigate = useNavigate();
  const { deckId } = useParams();
  const {
    players,
    currentTurn,
    scrollRefs,
    setCurrentTurn,
    setPlayers,
    getPlayers,
  } = usePlayers();

  useEffect(() => {
    const savedPlayers = getPlayers();
    !savedPlayers
      ? navigate(`/decks/${deckId}/play/setup`)
      : setPlayers(savedPlayers);
  }, []);

  if (!players) return "Loading...";

  return (
    <main className="deck-play-page">
      <GameDeck
        setCurrentTurn={setCurrentTurn}
        players={players}
        scrollRefs={scrollRefs}
      />
      <GamePlayers
        players={players}
        currentTurn={currentTurn}
        scrollRefs={scrollRefs}
      />
    </main>
  );
};
