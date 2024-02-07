import { DeckForm } from "../../components/DeckForm/DeckForm";
import { LinkButton } from "../../components/LinkButton/LinkButton";
import { Button } from "../../components/Button/Button";
import "./AddDeckPage.scss";

export const AddDeckPage = () => {
  return (
    <>
      <main className="add-deck-page">
        <h1>Add new deck</h1>
        <DeckForm />
      </main>
      <section className="add-deck-page__page-buttons">
        <LinkButton
          to="/decks"
          className="link-button--negative add-deck-page__page-button"
          label="Cancel"
        />
        <Button
          label="Add deck"
          formId="deckForm"
          className="add-deck-page__page-button"
        />
      </section>
    </>
  );
};
