import "./CreateDeckForm.scss";
import { useCreateDeck } from "hooks";
import { Input } from "components";

export const CreateDeckForm = () => {
  const {
    formFields,
    formErrors,
    inputMaxLengths,
    handleInputChange,
    handleRadioChange,
    addNewDeck,
  } = useCreateDeck();

  return (
    <form className="create-deck-form" id="deckForm" onSubmit={addNewDeck}>
      <Input
        label="Deck name"
        name="name"
        value={formFields.name}
        error={formErrors.name}
        onChange={handleInputChange}
        count={inputMaxLengths.name}
      />
      <div className="create-deck-form__radios">
        <h3 className="create-deck-form__radio-title">Deck type</h3>
        <div className="create-deck-form__radio-container">
          <label className="create-deck-form__radio-label">
            <input
              className="create-deck-form__radio-input"
              type="radio"
              name="is_custom"
              value="false"
              checked={!formFields.is_custom}
              onChange={handleRadioChange}
            />
            Standard
          </label>
          <label className="create-deck-form__radio-label">
            <input
              className="create-deck-form__radio-input"
              type="radio"
              name="is_custom"
              value="true"
              checked={formFields.is_custom}
              onChange={handleRadioChange}
            />
            Custom
          </label>
        </div>
        {!formFields.is_custom && (
          <p className="create-deck-form__radio-message">
            A standard deck must have 13 cards, which will occur 4 times each,
            like a standard 52 card deck.
          </p>
        )}
        {formFields.is_custom && (
          <p className="create-deck-form__radio-message">
            A custom deck can have any number of cards, which can each occur a
            different amount.
          </p>
        )}
      </div>
      <div className="create-deck-form__radios">
        <h3 className="create-deck-form__radio-title">Scoring</h3>
        <div className="create-deck-form__radio-container">
          <label className="create-deck-form__radio-label">
            <input
              className="create-deck-form__radio-input"
              type="radio"
              name="is_scored"
              value="false"
              checked={!formFields.is_scored}
              onChange={handleRadioChange}
            />
            Unscored
          </label>
          <label className="create-deck-form__radio-label">
            <input
              className="create-deck-form__radio-input"
              type="radio"
              name="is_scored"
              value="true"
              checked={formFields.is_scored}
              onChange={handleRadioChange}
            />
            Scored
          </label>
        </div>
        {!formFields.is_scored && (
          <p className="create-deck-form__radio-message">
            An unscored deck won't have any penalties, so it's up to you how you
            want to keep track.
          </p>
        )}
        {formFields.is_scored && (
          <p className="create-deck-form__radio-message">
            A scored deck will include a penalty with each card.
          </p>
        )}
      </div>
    </form>
  );
};
