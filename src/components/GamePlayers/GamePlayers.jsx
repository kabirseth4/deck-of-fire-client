import { useNavigate, Link } from "react-router-dom";
import { usePlayers } from "../../hooks/usePlayers";
import { useEffect } from "react";
import "./GamePlayers.scss";

export const GamePlayers = () => {
  const navigate = useNavigate();
  const { players, setPlayers, getPlayers } = usePlayers();

  useEffect(() => {
    const savedPlayers = getPlayers();
    !savedPlayers ? navigate("setup") : setPlayers(savedPlayers);
  }, []);

  return (
    <section className="game-players">
      <div className="game-players__header">
        <h3 className="game-players__title">Players</h3>
        <Link to="setup">Edit players</Link>
      </div>
      <div className="game-players__players">
        {players &&
          players.map((player, i) => {
            return (
              <p className="game-players__player" key={i}>
                {player}
              </p>
            );
          })}
      </div>
    </section>
  );
};
