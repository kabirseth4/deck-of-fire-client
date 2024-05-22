import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { GameCard, GameDeck } from "types";
import { useGetData } from "hooks";
import { isDeckWithCards, shuffle } from "utils";

export const useSetupDeck = () => {
  const { deckId } = useParams();
  const {
    data: deck,
    isLoading,
    error,
  } = useGetData(`decks/${deckId}`, isDeckWithCards);
  const gameDeck = useRef<GameDeck>({ name: "", cards: [] });

  useEffect(() => {
    if (!isLoading && !error) {
      const setupDeck = () => {
        const gameCards: GameCard[] = deck.cards.flatMap((card) => {
          const occurrences = card.occurrences || 4;

          const cards = [];
          for (let i = 0; i < occurrences; i++) {
            cards.push({ ...card, key: `${card.id}-${i + 1}`, swiped: false });
          }

          return cards;
        });

        shuffle(gameCards);

        gameDeck.current.name = deck.name;
        gameDeck.current.cards = gameCards;
      };

      setupDeck();
    }
  }, [isLoading, error]);

  return { gameDeck, isLoading, error };
};
