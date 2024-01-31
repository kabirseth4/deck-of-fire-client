import { useGetDecks } from "../../hooks/useGetDecks";
import { DeckInfo } from "../DeckInfo/DeckInfo";
import "./DeckList.scss";

export const DeckList = () => {
  const { decks, isLoading, isError } = useGetDecks();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong. Please try again later.</p>;

  return (
    <ul>
      {decks.map((deck) => {
        return (
          <li key={deck.id}>
            <DeckInfo deck={deck} />
          </li>
        );
      })}
    </ul>
  );
};
