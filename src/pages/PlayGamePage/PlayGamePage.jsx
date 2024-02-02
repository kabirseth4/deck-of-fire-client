import { Link, useParams } from "react-router-dom";
import { GamePlayers } from "../../components/GamePlayers/GamePlayers";
import { GameDeck } from "../../components/GameDeck/GameDeck";
import "./PlayGamePage.scss";

export const PlayGamePage = () => {
  const { deckId } = useParams();

  return (
    <main className="deck-play-page">
      <GamePlayers />
      <GameDeck />
      <Link to={`/decks/${deckId}`}>Back to deck</Link>
    </main>
  );
};
