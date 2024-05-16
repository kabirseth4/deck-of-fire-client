import { useGetData } from "hooks";
import { LinkButton } from "../../components/LinkButton/LinkButton";
import { DeckList } from "../../components/DeckList/DeckList";
import "./DecksPage.scss";

export const DecksPage = () => {
  const { data: decks, isLoading, error } = useGetData("decks");

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong. Please try again later.</p>;

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
