import { DeckList } from "../../components/DeckList/DeckList";
import { LinkButton } from "../../components/LinkButton/LinkButton";
import "./DecksPage.scss";

export const DecksPage = () => {
  return (
    <main className="decks-page">
      <h1 className="decks-page__title">Decks</h1>
      <LinkButton to="/decks/add" label="Add deck" />
      <DeckList />
    </main>
  );
};
