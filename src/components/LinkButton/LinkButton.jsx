import { Link } from "react-router-dom";
import "./LinkButton.scss";

export const LinkButton = ({ to, className, label }) => {
  return (
    <Link to={to} className={`link-button${className ? ` ${className}` : ""}`}>
      {label}
    </Link>
  );
};
