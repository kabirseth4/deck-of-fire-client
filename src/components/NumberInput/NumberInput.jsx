import "./NumberInput.scss";

export const NumberInput = ({
  label,
  name,
  placeholder,
  value,
  error,
  onChange,
}) => {
  return (
    <div className="number-input">
      <label className="number-input__label">
        {label}
        <input
          className="number-input__input"
          type="number"
          name={name}
          placeholder={placeholder || label}
          value={value}
          onChange={onChange}
        />
      </label>
      {error && <p className="number-input__error">{error}</p>}
    </div>
  );
};
