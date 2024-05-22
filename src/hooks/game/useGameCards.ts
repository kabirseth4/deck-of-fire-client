import { useState, useEffect } from "react";
import { GameCard } from "types";
import { useSetupDeck } from "hooks";
import { drawCard } from "utils";

export const useGameCards = () => {
  const { gameDeck, isLoading, error } = useSetupDeck();
  const [openedCards, setOpenedCards] = useState<GameCard[]>([]);
  const [cardsRemaining, setCardsRemaining] = useState(0);

  useEffect(() => {
    if (!isLoading && !error) {
      setCardsRemaining(gameDeck.current.cards.length + 1);
    }
  }, [isLoading, error]);

  const updateCard = () => {
    const newCard = drawCard(gameDeck.current.cards);
    setTimeout(() => {
      setOpenedCards((prevOpenedCards) => {
        const swipedCards = prevOpenedCards.map((card) => ({
          ...card,
          swiped: true,
        }));
        return [newCard, ...swipedCards];
      });
    }, 200);
  };

  return {
    openedCards,
    cardsRemaining,
    deckName: gameDeck.current.name,
    isLoading,
    error,
    setCardsRemaining,
    updateCard,
  };
};
