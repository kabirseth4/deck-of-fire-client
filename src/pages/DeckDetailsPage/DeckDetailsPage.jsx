import { useState } from "react";
import { useGetDeckDetails } from "../../hooks/useGetDeckDetails";
import { LinkButton } from "../../components/LinkButton/LinkButton";
import { Button } from "../../components/Button/Button";
import { DeckRules } from "../../components/DeckRules/DeckRules";
import "./DeckDetailsPage.scss";

export const DeckDetailsPage = () => {
  const [showModal, setShowModal] = useState(false);
  const { deckDetails, isLoading, isError } = useGetDeckDetails();

  if (isLoading) return <main>Loading...</main>;
  if (isError)
    return <main>Something went wrong. Please try again later.</main>;

  const {
    id,
    name,
    is_scored: isScored,
    is_custom: isCustom,
    is_playable: isPlayable,
    rules,
  } = deckDetails;

  return (
    <>
      <main
        className={`deck-details-page${
          showModal ? " deck-details-page--no-scroll" : ""
        }`}
      >
        <h1>{name}</h1>
        <p>Is scored: {isScored ? "Yes" : "No"}</p>
        <p>Is custom: {isCustom ? "Yes" : "No"}</p>
        <DeckRules
          rules={rules}
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
          className="button--secondary deck-details-page__page-back-button"
          label="<"
        />
        {((!!isCustom && rules.length < 13) || !!isCustom) && (
          <Button
            label="Add rule"
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
            className="deck-details-page__page-button"
            label="Play deck"
          />
        )}
      </section>
    </>
  );
};
