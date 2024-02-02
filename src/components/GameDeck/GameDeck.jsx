import TinderCard from "react-tinder-card";
import { useSetupDeck } from "../../hooks/useSetupDeck";
import { useEffect, useState } from "react";
import "./GameDeck.scss";

export const GameDeck = () => {
  const { gameDeck, isLoading, isError } = useSetupDeck();
  const [openedCards, setOpenedCards] = useState([]);

  const updateCard = () => {
    const newCard = gameDeck.current.draw();
    setOpenedCards((prevOpenedCards) => [newCard, ...prevOpenedCards]);
  };

  useEffect(() => {
    if (!isLoading) {
      updateCard();
    }
  }, [isLoading]);

  if (isError) return <div>Something went wrong. Please try again later.</div>;

  return (
    <div className="game-deck">
      <div className="game-deck__card game-deck__card--back">Deck of Fire</div>
      {openedCards.map((card, i) => (
        <TinderCard
          className="game-deck__card"
          key={card.key}
          onSwipe={updateCard}
        >
          {card.name}
        </TinderCard>
      ))}
    </div>
  );
};
