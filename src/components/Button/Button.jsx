import "./Button.scss";

export const Button = ({ type, formId, className, label, onClick }) => {
  return (
    <button
      type={type || "submit"}
      form={formId}
      className={`button${className ? ` ${className}` : ""}`}
      onClick={onClick || (() => {})}
    >
      {label}
    </button>
  );
};
