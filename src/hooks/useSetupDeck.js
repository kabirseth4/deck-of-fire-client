import Deck from "card-deck/deck";
import { useGetDeckDetails } from "./useGetDeckDetails";

export const useSetupDeck = () => {
  const { deckDetails, isLoading, isError } = useGetDeckDetails();

  const setupDeck = () => {
    const gameDeck = new Deck();
    const cardArr = deckDetails.rules.flatMap((rule) => {
      const occurences = deckDetails.is_custom ? rule.occurences : 4;

      const cards = [];
      for (let i = 0; i < occurences; i++) {
        cards.push(rule);
      }

      return cards;
    });

    gameDeck.cards(cardArr);
    gameDeck.shuffle();
    return gameDeck;
  };

  return { setupDeck, isLoading, isError };
};
