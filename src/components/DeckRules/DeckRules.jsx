import { RuleList } from "../RuleList/RuleList";
import "./DeckRules.scss";

export const DeckRules = ({ rules, isScored, isCustom }) => {
  return (
    <section>
      <h2>Rules</h2>
      <RuleList rules={rules} isScored={isScored} isCustom={isCustom} />
    </section>
  );
};
