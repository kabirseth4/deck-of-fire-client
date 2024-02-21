import "./TextInput.scss";

export const TextInput = ({
  type,
  className,
  label,
  name,
  placeholder,
  value,
  error,
  onChange,
  count,
  disabled,
  tabIndex,
}) => {
  return (
    <div className={`text-input${className ? ` ${className}` : ""}`}>
      <label className="text-input__label">
        {label}
        <input
          className={`text-input__input${
            error ? " text-input__input--error" : ""
          }`}
          type={type || "text"}
          name={name}
          placeholder={placeholder || label}
          value={value}
          onChange={onChange}
          disabled={disabled}
          tabIndex={tabIndex || 0}
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
