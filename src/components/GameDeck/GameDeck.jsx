import TinderCard from "react-tinder-card";
import { GameCard } from "../GameCard/GameCard";
import "./GameDeck.scss";
import { useCards } from "../../hooks/useCards";

export const GameDeck = ({ setCurrentTurn, players, scrollRefs }) => {
  const {
    openedCards,
    cardsRemaining,
    isLoading,
    isError,
    setCardsRemaining,
    updateCard,
  } = useCards();

  const scrollToPlayer = (i) => {
    scrollRefs.current[i].current?.scrollIntoView({ behavior: "smooth" });
  };

  const nextTurn = () => {
    if (cardsRemaining > 1) {
      updateCard();
    }
    setCurrentTurn((prevTurn) => {
      const turn = (prevTurn + 1) % players.length;
      scrollToPlayer(turn);
      return turn;
    });
    setCardsRemaining((prevCardsRemaining) => prevCardsRemaining - 1);
  };

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
            <GameCard key={card.key} card={card} nextTurn={nextTurn} />
          ))}
          <TinderCard
            className="game-deck__card game-deck__card--back"
            onSwipe={nextTurn}
          >
            Deck of Fire
          </TinderCard>
        </div>
      </div>
    </div>
  );
};
