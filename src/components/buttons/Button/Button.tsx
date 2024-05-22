import "./Button.scss";

interface ButtonProps {
  type?: "submit" | "reset" | "button";
  formId?: string;
  className?: string;
  label?: string;
  onClick?: () => void;
}

export const Button = ({
  type,
  formId,
  className,
  label,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type={type || "submit"}
      form={formId}
      className={`button${className ? ` ${className}` : ""}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
