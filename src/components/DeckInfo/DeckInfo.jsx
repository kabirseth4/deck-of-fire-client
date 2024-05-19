import { LinkButton } from "components";
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
    <article className="deck-info">
      <h3 className="deck-info__title">{name}</h3>
      <div className="deck-info__container">
        <div className="deck-info__info">
          <div className="deck-info__info-container">
            <p className="deck-info__info-item">
              {isCustom ? "Custom" : "Standard"}
            </p>
          </div>
          <div className="deck-info__info-container">
            <p className="deck-info__info-item">
              {isScored ? "Scored" : "Unscored"}
            </p>
          </div>
        </div>
        <div className="deck-info__buttons">
          <LinkButton
            to={`/decks/${id}`}
            className="link-button--secondary"
            label="View cards"
          />
          {!!isPlayable && (
            <LinkButton
              to={`/decks/${id}/play`}
              className="link-button--play"
              label="Play"
            />
          )}
        </div>
      </div>
    </article>
  );
};
