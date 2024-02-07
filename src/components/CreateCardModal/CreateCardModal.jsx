import { useCreateCard } from "../../hooks/useCreateCard";
import { ModalFormButtons } from "../ModalFormButtons/ModalFormButtons";
import { TextInput } from "../TextInput/TextInput";
import { Textarea } from "../Textarea/Textarea";
import "./CreateCardModal.scss";

export const CreateCardModal = ({ setShowModal }) => {
  const {
    formFields,
    formErrors,
    inputMaxLengths,
    handleInputChange,
    createCard,
  } = useCreateCard();

  return (
    <section
      className="create-card-modal"
      onClick={() => {
        setShowModal(false);
      }}
    >
      <form
        className="create-card-modal__container"
        onSubmit={createCard}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h1 className="create-card-modal__title">Add card</h1>
        <TextInput
          label="Card name"
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
          submitLabel="Create card"
        />
      </form>
    </section>
  );
};
