import "./RuleList.scss";

export const RuleList = ({ rules, deckDetails: { isScored, isCustom } }) => {
  return (
    <ul>
      {rules.map((rule) => {
        return (
          <li key={rule.id}>
            <h3>{rule.name}</h3>
            <p>{rule.description}</p>
            {isScored && <p>Penalty: {rule.penalty}</p>}
            {isCustom && <p>Occurences: {rule.occurences}</p>}
          </li>
        );
      })}
    </ul>
  );
};
