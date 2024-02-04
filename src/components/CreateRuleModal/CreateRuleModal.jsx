import { useCreateRule } from "../../hooks/useCreateRule";
import { ModalFormButtons } from "../ModalFormButtons/ModalFormButtons";
import { TextInput } from "../TextInput/TextInput";
import { Textarea } from "../Textarea/Textarea";
import "./CreateRuleModal.scss";

export const CreateRuleModal = ({ setShowModal }) => {
  const {
    formFields,
    formErrors,
    inputMaxLengths,
    handleInputChange,
    createRule,
  } = useCreateRule();

  return (
    <section
      className="create-rule-modal"
      onClick={() => {
        setShowModal(false);
      }}
    >
      <form
        className="create-rule-modal__container"
        onSubmit={createRule}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h1 className="create-rule-modal__title">Add rule</h1>
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
        <ModalFormButtons
          setShowModal={setShowModal}
          submitLabel="Create rule"
        />
      </form>
    </section>
  );
};