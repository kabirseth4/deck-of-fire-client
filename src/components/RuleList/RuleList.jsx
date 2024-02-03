import "./RuleList.scss";

export const RuleList = ({ rules, deckDetails }) => {
  return (
    <ul>
      {rules.map((rule) => {
        return (
          <li key={rule.id}>
            <h3>{rule.name}</h3>
            <p>{rule.description}</p>
            {deckDetails && (
              <div>
                {deckDetails.isScored && <p>Penalty: {rule.penalty}</p>}
                {deckDetails.isCustom && <p>Occurences: {rule.occurences}</p>}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
};
