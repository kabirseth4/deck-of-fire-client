import { useState } from "react";
import { useGetDeckDetails } from "../../hooks/useGetDeckDetails";
import { LinkButton } from "../../components/LinkButton/LinkButton";
import { Button } from "../../components/Button/Button";
import { DeckCards } from "../../components/DeckCards/DeckCards";
import "./DeckDetailsPage.scss";

export const DeckDetailsPage = () => {
  const [showModal, setShowModal] = useState(false);
  const { deckDetails, isError } = useGetDeckDetails();

  if (!Array.isArray(deckDetails?.cards)) return <main>Loading...</main>;
  if (isError)
    return <main>Something went wrong. Please try again later.</main>;

  const {
    id,
    name,
    is_scored: isScored,
    is_custom: isCustom,
    is_playable: isPlayable,
    cards,
  } = deckDetails;

  return (
    <>
      <main
        className={`deck-details-page${
          showModal ? " deck-details-page--no-scroll" : ""
        }`}
      >
        <h1 className="deck-details-page__title">{name}</h1>
        <div className="deck-details-page__info">
          <div className="deck-details-page__info-container">
            <p className="deck-details-page__info-item">
              {isScored ? "Scored" : "Unscored"}
            </p>
          </div>
          <div className="deck-details-page__info-container">
            <p className="deck-details-page__info-item">
              {isCustom ? "Custom" : "Standard"}
            </p>
          </div>
        </div>
        <DeckCards
          cards={cards}
          deckDetails={{
            id,
            isScored: Boolean(isScored),
            isCustom: Boolean(isCustom),
          }}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      </main>
      <section className="deck-details-page__page-buttons">
        <LinkButton
          to="/decks"
          className="link-button--secondary deck-details-page__page-back-button"
        />
        {((!isCustom && cards.length < 13) || !!isCustom) && (
          <Button
            label="Add card"
            className={`deck-details-page__page-button${
              !!isPlayable ? " button--secondary" : ""
            }`}
            onClick={() => {
              setShowModal(true);
            }}
          />
        )}
        {!!isPlayable && (
          <LinkButton
            to="play"
            className="deck-details-page__page-button link-button--play"
            label="Play deck"
          />
        )}
      </section>
    </>
  );
};
