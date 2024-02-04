import { RuleList } from "../RuleList/RuleList";
import { AddDeckRuleModal } from "../../components/AddDeckRuleModal/AddDeckRuleModal";
import "./DeckRules.scss";

export const DeckRules = ({ rules, deckDetails, showModal, setShowModal }) => {
  return (
    <section>
      <h2>Rules</h2>
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
