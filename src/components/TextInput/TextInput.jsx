import "./TextInput.scss";

export const TextInput = ({
  label,
  name,
  placeholder,
  value,
  error,
  onChange,
  count,
}) => {
  return (
    <div className="text-input">
      <label className="text-input__label">
        {label}
        <input
          className={`text-input__input${
            error ? " text-input__input--error" : ""
          }`}
          type="text"
          name={name}
          placeholder={placeholder || label}
          value={value}
          onChange={onChange}
        />
      </label>
      <div className="text-input__validation">
        {count && (
          <p className="text-input__count">
            {value.length}/{count}
          </p>
        )}
        {error && <p className="text-input__error">{error}</p>}
      </div>
    </div>
  );
};
