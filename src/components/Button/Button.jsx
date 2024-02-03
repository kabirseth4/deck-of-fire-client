import "./Button.scss";

export const Button = ({ type, className, label, onClick }) => {
  return (
    <button
      type={type || "submit"}
      className={`button${className ? ` ${className}` : ""}`}
      onClick={onClick || (() => {})}
    >
      {label}
    </button>
  );
};
