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
          className="text-input__input"
          type="text"
          name={name}
          placeholder={placeholder || label}
          value={value}
          onChange={onChange}
        />
      </label>
      {error && <p className="text-input__error">{error}</p>}
      {count && (
        <p className="text-input__count">
          {value.length}/{count}
        </p>
      )}
    </div>
  );
};
