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
    <section>
      <h3>Players</h3>
      {players &&
        players.map((player, i) => {
          return <p key={i}>{player}</p>;
        })}
      <Link to="setup">Edit players</Link>
    </section>
  );
};
