import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { usePlayers } from "hooks";
import { LinkButton, Button, PlayerInput } from "components";
import { icons } from "assets";
import "./SetupGamePage.scss";

export const SetupGamePage = () => {
  const { deckId } = useParams();
  const {
    players,
    setPlayers,
    addPlayer,
    handlePlayerChange,
    getPlayers,
    handleFormSubmit,
  } = usePlayers();

  useEffect(() => {
    const savedPlayers = getPlayers();
    setPlayers(savedPlayers || ["", ""]);
  }, []);

  return (
    <>
      <main className="setup-game-page">
        <form
          className="setup-game-page__form"
          id="setupGameForm"
          onSubmit={handleFormSubmit}
        >
          {players &&
            players.map((player, i) => {
              return (
                <PlayerInput
                  key={i + 1}
                  player={player}
                  playerNum={i + 1}
                  onChange={handlePlayerChange}
                />
              );
            })}
        </form>
      </main>
      <section className="setup-game-page__page-buttons">
        <LinkButton
          to={`/decks/${deckId}`}
          className="link-button--secondary setup-game-page__page-back-button"
          image={icons.backArrow}
        />
        <Button
          label="Add player"
          className="setup-game-page__page-button"
          onClick={addPlayer}
        />
        <Button
          className="deck-details-page__page-button button--play"
          label="Save & Play"
          formId="setupGameForm"
        />
      </section>
    </>
  );
};
