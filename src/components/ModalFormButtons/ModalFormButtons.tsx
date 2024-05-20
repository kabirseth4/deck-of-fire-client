import "./ModalFormButtons.scss";
import { Button } from "components";

interface ModalFormButtonsProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  submitLabel: string;
}

export const ModalFormButtons = ({
  setShowModal,
  submitLabel,
}: ModalFormButtonsProps) => {
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
