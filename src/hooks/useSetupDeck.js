import Deck from "card-deck/deck";
import { useGetDeckDetails } from "./useGetDeckDetails";
import { useState, useEffect, useRef } from "react";

export const useSetupDeck = () => {
  const { deckDetails, isLoading, isError } = useGetDeckDetails();
  const [deckName, setDeckName] = useState(null);
  const gameDeck = useRef(new Deck());

  const setupDeck = () => {
    const cardArr = deckDetails.rules.flatMap((rule) => {
      const occurences = deckDetails.is_custom ? rule.occurences : 4;

      const cards = [];
      for (let i = 0; i < occurences; i++) {
        cards.push({ ...rule, key: `${rule.id}-${i + 1}`, swiped: false });
      }

      return cards;
    });

    gameDeck.current.cards(cardArr);
    gameDeck.current.shuffle();
  };

  useEffect(() => {
    if (!isLoading) {
      setupDeck();
      setDeckName(deckDetails.name);
    }
  }, [isLoading]);

  return { gameDeck, deckName, isLoading, isError };
};
