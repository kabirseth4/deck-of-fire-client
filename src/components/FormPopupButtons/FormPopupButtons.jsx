import { Button } from "../Button/Button";
import "./FormPopupButtons.scss";

export const FormPopupButtons = ({ setIsAdding, submitLabel }) => {
  return (
    <div className="form-popup-buttons">
      <Button
        type="button"
        className="button--negative"
        label="Cancel"
        onClick={() => {
          setIsAdding(false);
        }}
      />
      <Button label={submitLabel} />
    </div>
  );
};
