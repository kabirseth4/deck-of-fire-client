import TinderCard from "react-tinder-card";
import { useNavigate, Link } from "react-router-dom";
import { usePlayers } from "../../hooks/usePlayers";
import { useEffect } from "react";
import "./PlayGamePage.scss";

export const PlayGamePage = () => {
  const navigate = useNavigate();
  const { players, setPlayers, getPlayers } = usePlayers();

  useEffect(() => {
    if (!players) {
      const savedPlayers = getPlayers();
      !savedPlayers ? navigate("setup") : setPlayers(savedPlayers);
    }
  }, []);

  if (!players) return <main>Loading..</main>;
  return (
    <main className="deck-play-page">
      <h3>Players</h3>
      {players.map((player, i) => {
        return <p key={i}>{player}</p>;
      })}
      <Link to="setup">Edit players</Link>
      <div className="deck-play-page__game">
        <TinderCard className="deck-play-page__card">Sah dude</TinderCard>
      </div>
    </main>
  );
};
