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
          className="textarea__input"
          name={name}
          placeholder={placeholder || label}
          value={value}
          onChange={onChange}
        />
      </label>
      {error && <p className="textarea__error">{error}</p>}
      {count && (
        <p className="textarea__count">
          {value.length}/{count}
        </p>
      )}
    </div>
  );
};
