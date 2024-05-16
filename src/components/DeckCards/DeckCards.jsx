import "./DeckCards.scss";
import { CardList, AddDeckCardModal } from "components";

export const DeckCards = ({ cards, deckDetails, showModal, setShowModal }) => {
  return (
    <section className="deck-cards">
      <h2 className="deck-cards__title">Cards</h2>
      {cards.length > 0 ? (
        <CardList cards={cards} deckDetails={deckDetails} />
      ) : (
        <p>Add cards to this deck to start playing.</p>
      )}
      {showModal && (
        <AddDeckCardModal
          setShowModal={setShowModal}
          existingCards={cards}
          deckDetails={deckDetails}
        />
      )}
    </section>
  );
};
