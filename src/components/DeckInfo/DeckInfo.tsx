import "./DeckInfo.scss";
import { Deck } from "types";
import { LinkButton } from "components";

interface DeckInfoProps {
  deck: Deck;
}

export const DeckInfo = ({
  deck: { id, name, is_scored, is_custom, is_playable },
}: DeckInfoProps) => {
  return (
    <article className="deck-info">
      <h3 className="deck-info__title">{name}</h3>
      <div className="deck-info__container">
        <div className="deck-info__info">
          <div className="deck-info__info-container">
            <p className="deck-info__info-item">
              {is_custom ? "Custom" : "Standard"}
            </p>
          </div>
          <div className="deck-info__info-container">
            <p className="deck-info__info-item">
              {is_scored ? "Scored" : "Unscored"}
            </p>
          </div>
        </div>
        <div className="deck-info__buttons">
          <LinkButton
            to={`/decks/${id}`}
            className="link-button--secondary"
            label="View cards"
          />
          {is_playable && (
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
