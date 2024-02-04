import { useState, useEffect } from "react";
import { useSetupDeck } from "./useSetupDeck";

export const useCards = () => {
  const { gameDeck, deckName, isLoading, isError } = useSetupDeck();
  const [openedCards, setOpenedCards] = useState([]);
  const [cardsRemaining, setCardsRemaining] = useState(null);

  useEffect(() => {
    if (!isLoading) {
      setCardsRemaining(gameDeck.current._stack.length + 1);
    }
  }, [isLoading]);

  const updateCard = () => {
    const newCard = gameDeck.current.draw();
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
    deckName,
    isLoading,
    isError,
    setCardsRemaining,
    updateCard,
  };
};
