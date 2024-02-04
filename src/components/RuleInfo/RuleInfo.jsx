import "./RuleInfo.scss";

export const RuleInfo = ({ rule, deckDetails }) => {
  return (
    <article className="rule-info">
      <h3 className="rule-info__title">{rule.name}</h3>
      <p className="rule-info__description">{rule.description}</p>
      {deckDetails && (deckDetails.isCustom || deckDetails.isScored) && (
        <div className="rule-info__info">
          {deckDetails.isScored && (
            <div className="rule-info__info-container">
              <p className="rule-info__info-item">Penalty: {rule.penalty}</p>
            </div>
          )}
          {deckDetails.isCustom && (
            <div className="rule-info__info-container">
              <p className="rule-info__info-item">
                Occurences: {rule.occurences}
              </p>
            </div>
          )}
        </div>
      )}
    </article>
  );
};
