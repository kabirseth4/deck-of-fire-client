import TinderCard from "react-tinder-card";
import { useSetupDeck } from "../../hooks/useSetupDeck";
import { useState } from "react";
import "./GameDeck.scss";

export const GameDeck = ({ setCurrentTurn, players, scrollRefs }) => {
  const { gameDeck, isLoading, isError } = useSetupDeck();
  const [openedCards, setOpenedCards] = useState([]);

  const scrollToPlayer = (i) => {
    scrollRefs.current[i].current?.scrollIntoView({ behavior: "smooth" });
  };

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
      setCurrentTurn((prevTurn) => {
        const turn = (prevTurn + 1) % players.length;
        scrollToPlayer(turn);
        return turn;
      });
    }, 200);
  };

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
