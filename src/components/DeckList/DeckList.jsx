import { useGetDecks } from "../../hooks/useGetDecks";
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
            <p>Name: {deck.name}</p>
            <p>Is scored: {deck.is_scored}</p>
            <p>Is custom: {deck.is_custom}</p>
          </li>
        );
      })}
    </ul>
  );
};
