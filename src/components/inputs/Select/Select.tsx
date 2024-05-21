import "./Select.scss";

interface SelectProps {
  label: string;
  name: string;
  value: string;
  error: string;
  onChange: () => void;
  options: { name: string; value: string }[];
}

export const Select = ({
  label,
  name,
  value,
  error,
  onChange,
  options,
}: SelectProps) => {
  return (
    <div className="select">
      <label className="select__label">
        {label}
        <select
          className={`select__input${error ? " select__input--error" : ""}`}
          name={name}
          value={value}
          onChange={onChange}
        >
          <option value="" disabled>
            Please select
          </option>
          {options.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.name}
              </option>
            );
          })}
        </select>
      </label>
      <div className="select__validation">
        {error && <p className="select__error">{error}</p>}
      </div>
    </div>
  );
};
