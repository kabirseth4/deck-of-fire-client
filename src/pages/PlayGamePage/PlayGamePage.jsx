import TinderCard from "react-tinder-card";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./PlayGamePage.scss";

export const PlayGamePage = () => {
  const navigate = useNavigate();
  const [players, setPlayers] = useState(null);

  const onSwipe = (direction) => {
    console.log("You swiped: " + direction);
  };

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + " left the screen");
  };

  useEffect(() => {
    if (!players) {
      const savedPlayers = JSON.parse(localStorage.getItem("players"));
      if (!savedPlayers) {
        navigate("setup");
      }
      setPlayers(savedPlayers);
    }
  }, []);

  if (!players) return <main>Loading..</main>;
  return (
    <main className="deck-play-page">
      <h3>Players</h3>
      {players.map((player, i) => {
        return <p key={i}>{player}</p>;
      })}
      <div className="deck-play-page__game">
        <TinderCard
          className="deck-play-page__card"
          onSwipe={onSwipe}
          onCardLeftScreen={() => onCardLeftScreen("fooBar")}
        >
          Sah dude
        </TinderCard>
      </div>
    </main>
  );
};
