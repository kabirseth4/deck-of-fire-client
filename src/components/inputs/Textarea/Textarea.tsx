import "./Textarea.scss";

interface TextareaProps {
  label?: string;
  name: string;
  placeholder?: string;
  value: string;
  error: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  count: number;
}

export const Textarea = ({
  label,
  name,
  placeholder,
  value,
  error,
  onChange,
  count,
}: TextareaProps) => {
  return (
    <div className="textarea">
      <label className="textarea__label">
        {label || name}
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
