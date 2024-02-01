import TinderCard from "react-tinder-card";
import "./DeckPlayPage.scss";

export const DeckPlayPage = () => {
  const onSwipe = (direction) => {
    console.log("You swiped: " + direction);
  };

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + " left the screen");
  };
  return (
    <main className="deck-play-page">
      <TinderCard
        className="deck-play-page__card"
        onSwipe={onSwipe}
        onCardLeftScreen={() => onCardLeftScreen("fooBar")}
      >
        Sah dude
      </TinderCard>
    </main>
  );
};
