import { RuleInfo } from "../RuleInfo/RuleInfo";
import "./RuleList.scss";

export const RuleList = ({ rules, deckDetails }) => {
  return (
    <ul className="rule-list">
      {rules.map((rule) => {
        return (
          <li key={rule.id}>
            <RuleInfo rule={rule} deckDetails={deckDetails} />
          </li>
        );
      })}
    </ul>
  );
};
