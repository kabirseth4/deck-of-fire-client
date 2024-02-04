import { Link } from "react-router-dom";
import "./LinkButton.scss";

export const LinkButton = ({ to, className, label, image, imageAlt }) => {
  return (
    <Link to={to} className={`link-button${className ? ` ${className}` : ""}`}>
      {image && <img src={image} alt={imageAlt} />}
      {label}
    </Link>
  );
};
