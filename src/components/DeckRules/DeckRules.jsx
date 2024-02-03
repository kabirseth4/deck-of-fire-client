import { Button } from "../Button/Button";
import { RuleList } from "../RuleList/RuleList";
import { AddDeckRulePopup } from "../../components/AddDeckRulePopup/AddDeckRulePopup";
import "./DeckRules.scss";

export const DeckRules = ({ rules, deckDetails, isAdding, setIsAdding }) => {
  return (
    <section>
      <h2>Rules</h2>
      {deckDetails.isCustom && rules.length < 13 && (
        <Button
          label="Add rule"
          onClick={() => {
            setIsAdding(true);
          }}
        />
      )}
      <RuleList rules={rules} deckDetails={deckDetails} />
      {isAdding && (
        <AddDeckRulePopup
          setIsAdding={setIsAdding}
          existingRules={rules}
          deckDetails={deckDetails}
        />
      )}
    </section>
  );
};
