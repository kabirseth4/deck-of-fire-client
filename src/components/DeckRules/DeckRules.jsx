import { RuleList } from "../RuleList/RuleList";
import { AddDeckRuleModal } from "../../components/AddDeckRuleModal/AddDeckRuleModal";
import "./DeckRules.scss";

export const DeckRules = ({ rules, deckDetails, showModal, setShowModal }) => {
  return (
    <section>
      <h2>Rules</h2>
      {rules.length > 0 ? (
        <RuleList rules={rules} deckDetails={deckDetails} />
      ) : (
        <p>Add rules to this deck to start playing.</p>
      )}
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
