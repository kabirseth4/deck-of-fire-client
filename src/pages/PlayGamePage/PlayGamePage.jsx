import TinderCard from "react-tinder-card";
import { useNavigate, Link, useParams } from "react-router-dom";
import { usePlayers } from "../../hooks/usePlayers";
import { useSetupDeck } from "../../hooks/useSetupDeck";
import { useEffect, useState } from "react";
import "./PlayGamePage.scss";

export const PlayGamePage = () => {
  const navigate = useNavigate();
  const { deckId } = useParams();
  const { players, setPlayers, getPlayers } = usePlayers();
  const { setupDeck, isLoading, isError } = useSetupDeck();
  const [gameDeck, setGameDeck] = useState(null);

  useEffect(() => {
    const savedPlayers = getPlayers();
    !savedPlayers ? navigate("setup") : setPlayers(savedPlayers);
    if (!isLoading) {
      setGameDeck(setupDeck());
    }
  }, [isLoading]);

  if (isLoading) return <main>Loading..</main>;
  if (isError)
    return <main>Something went wrong. Please try again later.</main>;

  return (
    <main className="deck-play-page">
      <h3>Players</h3>
      {players &&
        players.map((player, i) => {
          return <p key={i}>{player}</p>;
        })}
      <Link to="setup">Edit players</Link>
      <div className="deck-play-page__game">
        {gameDeck &&
          gameDeck._stack.map((card, i) => {
            return (
              <TinderCard className="deck-play-page__card" key={i}>
                {card.name}
              </TinderCard>
            );
          })}
      </div>
      <Link to={`/decks/${deckId}`}>Back to deck</Link>
    </main>
  );
};
