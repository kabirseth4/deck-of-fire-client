import { LinkButton } from "../../components/LinkButton/LinkButton";
import { DeckList } from "../../components/DeckList/DeckList";
import "./DecksPage.scss";

export const DecksPage = () => {
  return (
    <>
      <main className="decks-page">
        <h1 className="decks-page__title">Decks</h1>
        <DeckList />
      </main>
      <section className="decks-page__page-buttons">
        <LinkButton
          to="/cards"
          className="button--secondary decks-page__page-button"
          label="Cards"
        />
        <LinkButton
          to="/decks/add"
          className="decks-page__page-button"
          label="Add deck"
        />
      </section>
    </>
  );
};
