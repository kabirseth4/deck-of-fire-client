import { useAddRule } from "../../hooks/useAddRule";
import { FormPopupButtons } from "../FormPopupButtons/FormPopupButtons";
import { TextInput } from "../TextInput/TextInput";
import { Textarea } from "../Textarea/Textarea";
import "./AddRulePopup.scss";

export const AddRulePopup = ({ setIsAdding }) => {
  const {
    formFields,
    formErrors,
    inputMaxLengths,
    handleInputChange,
    addNewRule,
  } = useAddRule();

  return (
    <section
      className="add-rule-popup"
      onClick={() => {
        setIsAdding(false);
      }}
    >
      <form
        className="add-rule-popup__container"
        onSubmit={addNewRule}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h1 className="add-rule-popup__title">Add rule</h1>
        <TextInput
          label="Rule name"
          name="name"
          value={formFields.name}
          error={formErrors.name}
          count={inputMaxLengths.name}
          onChange={handleInputChange}
        />
        <Textarea
          label="Description"
          name="description"
          value={formFields.description}
          error={formErrors.description}
          count={inputMaxLengths.description}
          onChange={handleInputChange}
        />
        <FormPopupButtons setIsAdding={setIsAdding} />
      </form>
    </section>
  );
};
