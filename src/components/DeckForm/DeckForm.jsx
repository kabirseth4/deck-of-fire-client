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
    <form onSubmit={addNewDeck}>
      <TextInput
        label="Deck name"
        name="name"
        value={formFields.name}
        error={formErrors.name}
        onChange={handleInputChange}
        count={inputMaxLengths.name}
      />
      <div>
        <h3>Deck type</h3>
        <label>
          <input
            type="radio"
            name="isCustom"
            value="false"
            checked={!formFields.isCustom}
            onChange={handleRadioChange}
          />
          Standard
        </label>
        <label>
          <input
            type="radio"
            name="isCustom"
            value="true"
            checked={formFields.isCustom}
            onChange={handleRadioChange}
          />
          Custom
        </label>
      </div>
      <div>
        <h3>Scoring</h3>
        <label>
          <input
            type="radio"
            name="isScored"
            value="false"
            checked={!formFields.isScored}
            onChange={handleRadioChange}
          />
          Unscored
        </label>
        <label>
          <input
            type="radio"
            name="isScored"
            value="true"
            checked={formFields.isScored}
            onChange={handleRadioChange}
          />
          Scored
        </label>
      </div>
      <button>Submit</button>
    </form>
  );
};
