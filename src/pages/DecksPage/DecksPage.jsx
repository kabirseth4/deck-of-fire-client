import { LinkButton } from "../../components/LinkButton/LinkButton";
import { DeckList } from "../../components/DeckList/DeckList";
import { useGetDecks } from "../../hooks/useGetDecks";
import "./DecksPage.scss";

export const DecksPage = () => {
  const { decks, isLoading, isError } = useGetDecks();

  if (!Array.isArray(decks)) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong. Please try again later.</p>;

  return (
    <>
      <main className="decks-page">
        <h1 className="decks-page__title">Decks</h1>
        <DeckList decks={decks} />
      </main>
      <section className="decks-page__page-buttons">
        <LinkButton
          to="/cards"
          className="link-button--secondary decks-page__page-button"
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
