import "./GamePlayers.scss";
import { useParams } from "react-router-dom";
import { LinkButton } from "components";

interface GamePlayersProps {
  players: string[];
  currentTurn: number;
  scrollRefs: React.RefObject<React.RefObject<HTMLParagraphElement>[]>;
}

export const GamePlayers = ({
  players,
  currentTurn,
  scrollRefs,
}: GamePlayersProps) => {
  const { deckId } = useParams();

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
