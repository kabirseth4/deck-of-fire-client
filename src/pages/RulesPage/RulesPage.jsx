import { useState } from "react";
import { RuleList } from "../../components/RuleList/RuleList";
import { useGetRules } from "../../hooks/useGetRules";
import { Button } from "../../components/Button/Button";
import { AddRulePopup } from "../../components/AddRulePopup/AddRulePopup";
import "./RulesPage.scss";

export const RulesPage = () => {
  const [isAdding, setIsAdding] = useState(false);
  const { rules, isLoading, isError } = useGetRules();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong. Please try again later.</p>;

  return (
    <main className={`rules-page${isAdding ? " rules-page--no-scroll" : ""}`}>
      <h1 className="rules-page__titles">Rules</h1>
      <Button
        label="Add rule"
        onClick={() => {
          setIsAdding(true);
        }}
      />
      <RuleList rules={rules} />
      {isAdding && <AddRulePopup setIsAdding={setIsAdding} />}
    </main>
  );
};