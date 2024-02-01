import { Link } from "react-router-dom";
import "./DeckInfo.scss";

export const DeckInfo = ({
  deck: {
    id,
    name,
    is_scored: isScored,
    is_custom: isCustom,
    is_playable: isPlayable,
  },
}) => {
  return (
    <article>
      <h3>{name}</h3>
      <p>Is scored: {isScored ? "Yes" : "No"}</p>
      <p>Is custom: {isCustom ? "Yes" : "No"}</p>
      <p>Is playable: {isPlayable ? "Yes" : "No"}</p>
      <Link to={`/decks/${id}`}>View</Link>
      {!!isPlayable && <Link to={`/decks/${id}/play`}>Play</Link>}
    </article>
  );
};
