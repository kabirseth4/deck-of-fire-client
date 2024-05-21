import "./Input.scss";

interface InputProps {
  type?: string;
  className?: string;
  label?: string;
  name: string;
  placeholder?: string;
  value: string;
  error: string;
  onChange: () => void;
  count?: number;
  disabled?: boolean;
  tabIndex?: number;
}

export const Input = ({
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
}: InputProps) => {
  return (
    <div className={`input${className ? ` ${className}` : ""}`}>
      <label className="input__label">
        {label || name}
        <input
          className={`input__input${error ? " input__input--error" : ""}`}
          type={type || "text"}
          name={name}
          placeholder={placeholder || label || name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          tabIndex={tabIndex || 0}
        />
      </label>
      <div className="input__validation">
        <p className="input__count">
          {count ? `${value.length}/${count}` : ""}
        </p>
        <p className="input__error">{error ? error : ""}</p>
      </div>
    </div>
  );
};
