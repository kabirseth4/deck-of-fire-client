import { useCreateRule } from "../../hooks/useCreateRule";
import { FormPopupButtons } from "../FormPopupButtons/FormPopupButtons";
import { TextInput } from "../TextInput/TextInput";
import { Textarea } from "../Textarea/Textarea";
import "./CreateRulePopup.scss";

export const CreateRulePopup = ({ setIsAdding }) => {
  const {
    formFields,
    formErrors,
    inputMaxLengths,
    handleInputChange,
    createRule,
  } = useCreateRule();

  return (
    <section
      className="add-rule-popup"
      onClick={() => {
        setIsAdding(false);
      }}
    >
      <form
        className="add-rule-popup__container"
        onSubmit={createRule}
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
        <FormPopupButtons setIsAdding={setIsAdding} submitLabel="Create rule" />
      </form>
    </section>
  );
};
