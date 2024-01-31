import { DeckList } from "../../components/DeckList/DeckList";
import { LinkButton } from "../../components/LinkButton/LinkButton";
import "./DecksPage.scss";

export const DecksPage = () => {
  return (
    <main>
      <h1>Decks</h1>
      <LinkButton to="/decks/add" label="Add deck" />
      <DeckList />
    </main>
  );
};
