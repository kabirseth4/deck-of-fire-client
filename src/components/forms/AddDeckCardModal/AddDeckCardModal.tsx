import "./AddDeckCardModal.scss";
import { useEffect, useState } from "react";
import { useAddCardToDeck, useGetData } from "hooks";
import { Select, ModalFormButtons, Input } from "components";
import { Card, DeckWithCards } from "types";
import { isCardArray } from "utils";

interface AddDeckCardModalProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  deck: DeckWithCards;
}

export const AddDeckCardModal = ({
  setShowModal,
  deck,
}: AddDeckCardModalProps) => {
  const {
    data: allCards,
    isLoading,
    error,
  } = useGetData<Card[]>("cards", isCardArray);
  const [options, setOptions] = useState<{ value: string; name: string }[]>([]);
  const { formFields, formErrors, handleInputChange, addCardToDeck } =
    useAddCardToDeck();

  useEffect(() => {
    if (!isLoading && !error) {
      const existingCardIds = deck.cards.map(({ id }) => id);
      const cardOptions = allCards
        .filter(({ id }) => !existingCardIds.includes(id))
        .map(({ id, name }) => ({ value: String(id), name }));
      setOptions(cardOptions);
    }
  }, [isLoading, error]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong. Please try again later.</div>;

  return (
    <section
      className="add-deck-card"
      onClick={() => {
        setShowModal(false);
      }}
    >
      <form
        className="add-deck-card__container"
        onSubmit={(e) => {
          addCardToDeck(e, deck);
        }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h1 className="add-deck-card__title">Add card to deck</h1>
        <Select
          label="Select an existing card"
          name="cardId"
          value={formFields.cardId}
          error={formErrors.cardId}
          onChange={handleInputChange}
          options={options}
        />
        {formFields.cardId && (
          <p className="add-deck-card__description">
            {
              allCards.find((card) => String(card.id) === formFields.cardId)!
                .description
            }
          </p>
        )}
        {deck.is_custom && (
          <Input
            type="number"
            name="occurrences"
            value={formFields.occurrences}
            error={formErrors.occurrences}
            onChange={handleInputChange}
          />
        )}
        {deck.is_scored && (
          <Input
            type="number"
            name="penalty"
            value={formFields.penalty}
            error={formErrors.penalty}
            onChange={handleInputChange}
          />
        )}
        <ModalFormButtons setShowModal={setShowModal} submitLabel="Add card" />
      </form>
    </section>
  );
};
