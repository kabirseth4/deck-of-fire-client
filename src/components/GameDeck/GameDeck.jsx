import TinderCard from "react-tinder-card";
import { useSetupDeck } from "../../hooks/useSetupDeck";
import { useEffect, useState } from "react";
import { GameCard } from "../GameCard/GameCard";
import "./GameDeck.scss";

export const GameDeck = ({ setCurrentTurn, players, scrollRefs }) => {
  const { gameDeck, isLoading, isError } = useSetupDeck();
  const [openedCards, setOpenedCards] = useState([]);
  const [cardsRemaining, setCardsRemaining] = useState(null);

  const scrollToPlayer = (i) => {
    scrollRefs.current[i].current?.scrollIntoView({ behavior: "smooth" });
  };

  const updateCard = () => {
    if (cardsRemaining > 1) {
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
    }
    setCardsRemaining((prevCardsRemaining) => prevCardsRemaining - 1);
  };

  useEffect(() => {
    if (!isLoading) {
      setCardsRemaining(gameDeck.current._stack.length + 1);
    }
  }, [isLoading]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Something went wrong. Please try again later.</div>;

  return (
    <div className="game-deck">
      <h1 className="game-deck__remaining">
        {`${
          openedCards.length
            ? `Cards remaining: ${cardsRemaining}`
            : "Swipe to begin"
        }`}
      </h1>
      <div className="game-deck__cards-container">
        <div className="game-deck__cards">
          <div className="game-deck__card game-deck__card--back">
            Deck of Fire
          </div>
          {cardsRemaining === 0 && (
            <TinderCard
              className="game-deck__card"
              onSwipe={() => {
                setTimeout(() => {
                  window.location.reload(false);
                }, 200);
              }}
            >
              <h3>Swipe to restart</h3>
            </TinderCard>
          )}
          {openedCards.map((card) => (
            <GameCard key={card.key} card={card} updateCard={updateCard} />
          ))}
          <TinderCard
            className="game-deck__card game-deck__card--back"
            onSwipe={updateCard}
          >
            Deck of Fire
          </TinderCard>
        </div>
      </div>
    </div>
  );
};
