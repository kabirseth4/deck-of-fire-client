import "./CreateDeckPage.scss";
import { CreateDeckForm, LinkButton, Button } from "components";

export const CreateDeckPage = () => {
  return (
    <>
      <main className="create-deck-page">
        <h1>Create new deck</h1>
        <CreateDeckForm />
      </main>
      <section className="create-deck-page__page-buttons">
        <LinkButton
          to="/decks"
          className="link-button--negative create-deck-page__page-button"
          label="Cancel"
        />
        <Button
          label="Create deck"
          formId="deckForm"
          className="create-deck-page__page-button"
        />
      </section>
    </>
  );
};
