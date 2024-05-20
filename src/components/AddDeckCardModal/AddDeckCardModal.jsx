import { useEffect, useState } from "react";
import { useAddCardToDeck, useGetData } from "hooks";
import { Select, ModalFormButtons, NumberInput } from "components";
import "./AddDeckCardModal.scss";

export const AddDeckCardModal = ({
  setShowModal,
  existingCards,
  deckDetails,
}) => {
  const { data: allCards, isLoading, error } = useGetData("cards");
  const [options, setOptions] = useState([]);
  const { formFields, formErrors, handleInputChange, addCardToDeck } =
    useAddCardToDeck();

  useEffect(() => {
    if (!isLoading) {
      const existingCardIds = existingCards.map(({ id }) => id);
      const cardOptions = allCards
        .filter(({ id }) => !existingCardIds.includes(id))
        .map(({ id, name }) => ({ value: id, name }));
      setOptions(cardOptions);
    }
  }, [isLoading]);

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
          addCardToDeck(e, deckDetails);
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
              allCards.find((card) => String(card.id) === formFields.cardId)
                .description
            }
          </p>
        )}
        {deckDetails.isCustom && (
          <NumberInput
            label="occurrences"
            name="occurrences"
            value={formFields.occurrences}
            error={formErrors.occurrences}
            onChange={handleInputChange}
          />
        )}
        {deckDetails.isScored && (
          <NumberInput
            label="Penalty"
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
