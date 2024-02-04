import { useAddDeck } from "../../hooks/useAddDeck";
import { TextInput } from "../TextInput/TextInput";
import "./DeckForm.scss";

export const DeckForm = () => {
  const {
    formFields,
    formErrors,
    inputMaxLengths,
    handleInputChange,
    handleRadioChange,
    addNewDeck,
  } = useAddDeck();

  return (
    <form className="deck-form" id="deckForm" onSubmit={addNewDeck}>
      <TextInput
        label="Deck name"
        name="name"
        value={formFields.name}
        error={formErrors.name}
        onChange={handleInputChange}
        count={inputMaxLengths.name}
      />
      <div className="deck-form__radios">
        <h3 className="deck-form__radio-title">Deck type</h3>
        <div className="deck-form__radio-container">
          <label className="deck-form__radio-label">
            <input
              className="deck-form__radio-input"
              type="radio"
              name="isCustom"
              value="false"
              checked={!formFields.isCustom}
              onChange={handleRadioChange}
            />
            Standard
          </label>
          <label className="deck-form__radio-label">
            <input
              className="deck-form__radio-input"
              type="radio"
              name="isCustom"
              value="true"
              checked={formFields.isCustom}
              onChange={handleRadioChange}
            />
            Custom
          </label>
        </div>
        {!formFields.isCustom && (
          <p className="deck-form__radio-message">
            A standard deck must have 13 rules, which will occur 4 times each,
            like a standard 52 card deck.
          </p>
        )}
        {formFields.isCustom && (
          <p className="deck-form__radio-message">
            A custom deck can have any number of rules, which can each occur a
            different amount.
          </p>
        )}
      </div>
      <div className="deck-form__radios">
        <h3 className="deck-form__radio-title">Scoring</h3>
        <div className="deck-form__radio-container">
          <label className="deck-form__radio-label">
            <input
              className="deck-form__radio-input"
              type="radio"
              name="isScored"
              value="false"
              checked={!formFields.isScored}
              onChange={handleRadioChange}
            />
            Unscored
          </label>
          <label className="deck-form__radio-label">
            <input
              className="deck-form__radio-input"
              type="radio"
              name="isScored"
              value="true"
              checked={formFields.isScored}
              onChange={handleRadioChange}
            />
            Scored
          </label>
        </div>
        {!formFields.isScored && (
          <p className="deck-form__radio-message">
            An unscored deck won't have any penalties, so it's up to you how you
            want to keep track.
          </p>
        )}
        {formFields.isScored && (
          <p className="deck-form__radio-message">
            A scored deck will include a penalty with each rule.
          </p>
        )}
      </div>
    </form>
  );
};
