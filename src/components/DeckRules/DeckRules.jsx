import { Button } from "../Button/Button";
import { RuleList } from "../RuleList/RuleList";
import { AddDeckRuleModal } from "../../components/AddDeckRuleModal/AddDeckRuleModal";
import "./DeckRules.scss";

export const DeckRules = ({ rules, deckDetails, showModal, setShowModal }) => {
  return (
    <section>
      <h2>Rules</h2>
      {deckDetails.isCustom && rules.length < 13 && (
        <Button
          label="Add rule"
          onClick={() => {
            setShowModal(true);
          }}
        />
      )}
      <RuleList rules={rules} deckDetails={deckDetails} />
      {showModal && (
        <AddDeckRuleModal
          setShowModal={setShowModal}
          existingRules={rules}
          deckDetails={deckDetails}
        />
      )}
    </section>
  );
};
