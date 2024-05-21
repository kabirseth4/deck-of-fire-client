import "./LinkButton.scss";
import { Link } from "react-router-dom";

interface LinkButtonProps {
  to: string;
  className?: string;
  label?: string;
  image?: string;
  imageAlt?: string;
}

export const LinkButton = ({
  to,
  className,
  label,
  image,
  imageAlt,
}: LinkButtonProps) => {
  return (
    <Link to={to} className={`link-button${className ? ` ${className}` : ""}`}>
      {image && <img src={image} alt={imageAlt} />}
      {label}
    </Link>
  );
};
