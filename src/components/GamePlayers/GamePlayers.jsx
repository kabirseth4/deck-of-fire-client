import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { LinkButton } from "../LinkButton/LinkButton";
import "./GamePlayers.scss";

export const GamePlayers = ({
  players,
  currentTurn,
  setPlayers,
  getPlayers,
  scrollRefs,
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    const savedPlayers = getPlayers();
    !savedPlayers ? navigate("setup") : setPlayers(savedPlayers);
  }, []);

  return (
    <section className="game-players">
      <div className="game-players__header">
        <h3 className="game-players__title">Players</h3>
        <LinkButton to="setup" label="Edit players" />
      </div>
      <div className="game-players__players">
        {players &&
          players.map((player, i) => {
            return (
              <p
                className={`game-players__player${
                  currentTurn === i ? " game-players__player--current" : ""
                }`}
                key={i}
                ref={scrollRefs.current[i]}
              >
                {player}
              </p>
            );
          })}
      </div>
    </section>
  );
};
