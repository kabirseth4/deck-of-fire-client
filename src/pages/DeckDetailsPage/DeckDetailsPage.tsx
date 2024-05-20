import "./DeckDetailsPage.scss";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetData } from "hooks";
import { LinkButton, Button, CardList, AddDeckCardModal } from "components";
import { DeckWithCards } from "types";
import { isDeckWithCards } from "utils";

export const DeckDetailsPage = () => {
  const { deckId } = useParams();

  const {
    data: deck,
    isLoading,
    error,
  } = useGetData<DeckWithCards>(`decks/${deckId}`, isDeckWithCards);
  const [showModal, setShowModal] = useState(false);

  if (isLoading) return <main>Loading...</main>;
  if (error || !deck || !Array.isArray(deck.cards))
    return <main>Something went wrong. Please try again later.</main>;

  const { name, is_scored, is_custom, is_playable, cards } = deck;

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
              {is_scored ? "Scored" : "Unscored"}
            </p>
          </div>
          <div className="deck-details-page__info-container">
            <p className="deck-details-page__info-item">
              {is_custom ? "Custom" : "Standard"}
            </p>
          </div>
        </div>
        <div className="deck-cards">
          <h2 className="deck-cards__title">Cards</h2>
          {cards.length > 0 ? (
            <CardList cards={cards} />
          ) : (
            <p>Add cards to this deck to start playing.</p>
          )}
          {showModal && (
            <AddDeckCardModal setShowModal={setShowModal} deck={deck} />
          )}
        </div>
      </main>
      <section className="deck-details-page__page-buttons">
        <LinkButton
          to="/decks"
          className="link-button--secondary deck-details-page__page-back-button"
        />
        {((!is_custom && cards.length < 13) || is_custom) && (
          <Button
            label="Add card"
            className={`deck-details-page__page-button${
              is_playable ? " button--secondary" : ""
            }`}
            onClick={() => {
              setShowModal(true);
            }}
          />
        )}
        {is_playable && (
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
