import "./Textarea.scss";

export const Textarea = ({
  label,
  name,
  placeholder,
  value,
  error,
  onChange,
  count,
}) => {
  return (
    <div className="textarea">
      <label className="textarea__label">
        {label}
        <textarea
          className={`textarea__input${error ? " textarea__input--error" : ""}`}
          name={name}
          placeholder={placeholder || label}
          value={value}
          onChange={onChange}
        />
      </label>
      <div className="textarea__validation">
        {count && (
          <p className="textarea__count">
            {value.length}/{count}
          </p>
        )}
        {error && <p className="textarea__error">{error}</p>}
      </div>
    </div>
  );
};
