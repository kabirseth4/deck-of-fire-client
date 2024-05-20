import { useGetData } from "hooks";
import { LinkButton, DeckList } from "components";
import { Deck } from "types";
import "./DecksPage.scss";

export const DecksPage = () => {
  const { data: decks, isLoading, error } = useGetData<Deck[]>("decks");

  if (isLoading) return <p>Loading...</p>;
  if (error || !Array.isArray(decks))
    return <p>Something went wrong. Please try again later.</p>;

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
