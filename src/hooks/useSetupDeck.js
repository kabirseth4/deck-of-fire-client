import Deck from "card-deck/deck";
import { useParams } from "react-router-dom";
import { useGetData } from "./useGetData";
import { useState, useEffect, useRef } from "react";

export const useSetupDeck = () => {
  const { deckId } = useParams();
  const { data: deck, isLoading, error } = useGetData(`decks/${deckId}`);
  const [deckName, setDeckName] = useState(null);
  const gameDeck = useRef(new Deck());

  const setupDeck = () => {
    const cardArr = deck.cards.flatMap((card) => {
      const occurences = deck.is_custom ? card.occurences : 4;

      const cards = [];
      for (let i = 0; i < occurences; i++) {
        cards.push({ ...card, key: `${card.id}-${i + 1}`, swiped: false });
      }

      return cards;
    });

    gameDeck.current.cards(cardArr);
    gameDeck.current.shuffle();
  };

  useEffect(() => {
    if (!isLoading) {
      setupDeck();
      setDeckName(deck.name);
    }
  }, [isLoading]);

  return { gameDeck, deckName, isLoading, error };
};
