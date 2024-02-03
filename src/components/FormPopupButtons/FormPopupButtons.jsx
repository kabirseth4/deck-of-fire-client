import { Button } from "../Button/Button";
import "./FormPopupButtons.scss";

export const FormPopupButtons = ({ setIsAdding }) => {
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
      <Button label="Add rule" />
    </div>
  );
};
