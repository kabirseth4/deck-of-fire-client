import "./Select.scss";

export const Select = ({ label, name, value, error, onChange, options }) => {
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
