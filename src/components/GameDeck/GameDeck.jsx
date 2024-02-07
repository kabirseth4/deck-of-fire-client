import { GameCard } from "../GameCard/GameCard";
import { useCards } from "../../hooks/useCards";
import { GameCardBack } from "../GameCardBack/GameCardBack";
import "./GameDeck.scss";

export const GameDeck = ({ setCurrentTurn, players, scrollRefs }) => {
  const {
    openedCards,
    cardsRemaining,
    deckName,
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
          {cardsRemaining > 0 && (
            <GameCardBack label={deckName} disabled={true} />
          )}
          {cardsRemaining === 0 && (
            <GameCard
              card={{ name: "Restart", description: "Swipe to restart." }}
              onSwipe={() => {
                setTimeout(() => {
                  window.location.reload(false);
                }, 200);
              }}
            />
          )}
          {openedCards.map((card) => (
            <GameCard key={card.key} card={card} onSwipe={nextTurn} />
          ))}
          <GameCardBack label={deckName} onSwipe={nextTurn} />
        </div>
      </div>
    </div>
  );
};
