import TinderCard from "react-tinder-card";
import { useSetupDeck } from "../../hooks/useSetupDeck";
import { useEffect, useState } from "react";
import "./GameDeck.scss";

export const GameDeck = () => {
  const { gameDeck, isLoading, isError } = useSetupDeck();
  const [openedCards, setOpenedCards] = useState([]);

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

  // useEffect(() => {
  //   if (!isLoading) {
  //     updateCard();
  //   }
  // }, [isLoading]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Something went wrong. Please try again later.</div>;

  return (
    <div className="game-deck">
      <div className="game-deck__cards">
        <div className="game-deck__card game-deck__card--back">
          Deck of Fire
        </div>
        {openedCards.map((card) => (
          <TinderCard
            className={`game-deck__card${
              card.swiped ? " game-deck__card--swiped" : ""
            }`}
            key={card.key}
            onSwipe={updateCard}
          >
            {card.name}
          </TinderCard>
        ))}
        <TinderCard
          className="game-deck__card game-deck__card--back"
          onSwipe={updateCard}
        >
          Deck of Fire
        </TinderCard>
      </div>
    </div>
  );
};
