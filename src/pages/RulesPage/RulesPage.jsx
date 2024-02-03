import { useState } from "react";
import { RuleList } from "../../components/RuleList/RuleList";
import { useGetRules } from "../../hooks/useGetRules";
import { Button } from "../../components/Button/Button";
import { CreateRuleModal } from "../../components/CreateRuleModal/CreateRuleModal";
import "./RulesPage.scss";

export const RulesPage = () => {
  const [showModal, setShowModal] = useState(false);
  const { rules, isLoading, isError } = useGetRules();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong. Please try again later.</p>;

  return (
    <main className={`rules-page${showModal ? " rules-page--no-scroll" : ""}`}>
      <h1 className="rules-page__titles">Rules</h1>
      <Button
        label="Create rule"
        onClick={() => {
          setShowModal(true);
        }}
      />
      <RuleList rules={rules} />
      {showModal && <CreateRuleModal setShowModal={setShowModal} />}
    </main>
  );
};
