import { useNavigate, useParams } from "react-router-dom";
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
  const { deckId } = useParams();

  useEffect(() => {
    const savedPlayers = getPlayers();
    !savedPlayers ? navigate("setup") : setPlayers(savedPlayers);
  }, []);

  return (
    <section className="game-players">
      <div className="game-players__header">
        <h3 className="game-players__title">Next swipe</h3>
        <div className="game-players__buttons">
          <LinkButton
            to={`/decks/${deckId}`}
            className="link-button--negative"
            label="Exit game"
          />
          <LinkButton to="setup" label="Edit players" />
        </div>
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
