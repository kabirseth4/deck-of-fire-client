import "./GamePlayers.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { LinkButton } from "components";

interface GamePlayersProps {
  players: string[];
  currentTurn: number;
  setPlayers: React.Dispatch<React.SetStateAction<string[]>>;
  getPlayers: () => string[] | null;
  scrollRefs: React.RefObject<React.RefObject<HTMLParagraphElement>[]>;
}

export const GamePlayers: React.FC<GamePlayersProps> = ({
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
    !savedPlayers
      ? navigate(`/decks/${deckId}/play/setup`)
      : setPlayers(savedPlayers);
  }, []);

  return (
    <section className="game-players">
      <div className="game-players__players-container">
        <h3 className="game-players__players-title">Next swipe:</h3>
        <div className="game-players__players">
          {players &&
            players.map((player, i) => {
              return (
                <p
                  className={`game-players__player${
                    currentTurn === i ? " game-players__player--current" : ""
                  }`}
                  key={i}
                  ref={scrollRefs.current ? scrollRefs.current[i] : null}
                >
                  {player}
                </p>
              );
            })}
        </div>
      </div>
      <div className="game-players__buttons">
        <LinkButton
          to={`/decks/${deckId}`}
          className="link-button--negative"
          label="Exit game"
        />
        <LinkButton to="setup" label="Edit players" />
      </div>
    </section>
  );
};
