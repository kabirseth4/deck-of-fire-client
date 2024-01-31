import { Link } from "react-router-dom";
import "./DeckInfo.scss";

export const DeckInfo = ({
  deck: { id, name, is_scored: isScored, is_custom: isCustom },
}) => {
  return (
    <article>
      <h3>{name}</h3>
      <p>Is scored: {isScored ? "Yes" : "No"}</p>
      <p>Is custom: {isCustom ? "Yes" : "No"}</p>
      <Link to={`/decks/${id}`}>View deck</Link>
    </article>
  );
};
