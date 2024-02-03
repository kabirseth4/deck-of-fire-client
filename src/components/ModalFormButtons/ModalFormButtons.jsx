import { Button } from "../Button/Button";
import "./ModalFormButtons.scss";

export const ModalFormButtons = ({ setShowModal, submitLabel }) => {
  return (
    <div className="modal-form-buttons">
      <Button
        type="button"
        className="button--negative"
        label="Cancel"
        onClick={() => {
          setShowModal(false);
        }}
      />
      <Button label={submitLabel} />
    </div>
  );
};
