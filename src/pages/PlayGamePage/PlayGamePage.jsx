import { useRef, createRef, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { usePlayers } from "../../hooks/usePlayers";
import { GamePlayers } from "../../components/GamePlayers/GamePlayers";
import { GameDeck } from "../../components/GameDeck/GameDeck";
import "./PlayGamePage.scss";

export const PlayGamePage = () => {
  const { deckId } = useParams();
  const { players, currentTurn, setCurrentTurn, setPlayers, getPlayers } =
    usePlayers();
  const scrollRefs = useRef([]);

  useEffect(() => {
    if (players) {
      scrollRefs.current = players.map(() => createRef());
    }
  }, [players]);

  return (
    <main className="deck-play-page">
      <Link to={`/decks/${deckId}`}>{"<- Back to deck"}</Link>
      <GameDeck
        setCurrentTurn={setCurrentTurn}
        players={players}
        scrollRefs={scrollRefs}
      />
      <GamePlayers
        players={players}
        currentTurn={currentTurn}
        setPlayers={setPlayers}
        getPlayers={getPlayers}
        scrollRefs={scrollRefs}
      />
    </main>
  );
};
