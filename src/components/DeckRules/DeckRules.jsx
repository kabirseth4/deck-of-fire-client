import { Button } from "../Button/Button";
import { RuleList } from "../RuleList/RuleList";
import { AddDeckRulePopup } from "../../components/AddDeckRulePopup/AddDeckRulePopup";
import "./DeckRules.scss";

export const DeckRules = ({
  rules,
  isScored,
  isCustom,
  isAdding,
  setIsAdding,
}) => {
  return (
    <section>
      <h2>Rules</h2>
      <Button
        label="Add rule"
        onClick={() => {
          setIsAdding(true);
        }}
      />
      <RuleList rules={rules} isScored={isScored} isCustom={isCustom} />
      {isAdding && <AddDeckRulePopup setIsAdding={setIsAdding} />}
    </section>
  );
};
