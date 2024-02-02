import Deck from "card-deck/deck";
import { useGetDeckDetails } from "./useGetDeckDetails";
import { useEffect, useRef } from "react";

export const useSetupDeck = () => {
  const { deckDetails, isLoading, isError } = useGetDeckDetails();
  const gameDeck = useRef(new Deck());

  const setupDeck = () => {
    const cardArr = deckDetails.rules.flatMap((rule) => {
      const occurences = deckDetails.is_custom ? rule.occurences : 4;

      const cards = [];
      for (let i = 0; i < occurences; i++) {
        cards.push({ ...rule, key: `${rule.id}-${i + 1}` });
      }

      return cards;
    });

    gameDeck.current.cards(cardArr);
    gameDeck.current.shuffle();
  };

  useEffect(() => {
    if (!isLoading) {
      setupDeck();
    }
  }, [isLoading]);

  return { gameDeck, isLoading, isError };
};
