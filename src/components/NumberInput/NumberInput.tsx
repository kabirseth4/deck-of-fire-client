import "./NumberInput.scss";

interface NumberInputProps {
  label: string;
  name: string;
  placeholder?: string;
  value: string;
  error: string;
  onChange: () => void;
}

export const NumberInput = ({
  label,
  name,
  placeholder,
  value,
  error,
  onChange,
}: NumberInputProps) => {
  return (
    <div className="number-input">
      <label className="number-input__label">
        {label}
        <input
          className={`number-input__input${
            error ? " number-input__input--error" : ""
          }`}
          type="number"
          name={name}
          placeholder={placeholder || label}
          value={value}
          onChange={onChange}
        />
      </label>
      <div className="number-input__validation">
        {error && <p className="number-input__error">{error}</p>}
      </div>
    </div>
  );
};
