import { useState } from "react";
import { RuleList } from "../../components/RuleList/RuleList";
import { useGetRules } from "../../hooks/useGetRules";
import { LinkButton } from "../../components/LinkButton/LinkButton";
import { Button } from "../../components/Button/Button";
import { CreateRuleModal } from "../../components/CreateRuleModal/CreateRuleModal";
import "./RulesPage.scss";

export const RulesPage = () => {
  const [showModal, setShowModal] = useState(false);
  const { rules, isLoading, isError } = useGetRules();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong. Please try again later.</p>;

  return (
    <>
      <main
        className={`rules-page${showModal ? " rules-page--no-scroll" : ""}`}
      >
        <h1 className="rules-page__title">Rules</h1>
        {rules.length > 0 ? (
          <RuleList rules={rules} />
        ) : (
          <p>Create rules to add to your decks.</p>
        )}
        {showModal && <CreateRuleModal setShowModal={setShowModal} />}
      </main>
      <section className="rules-page__page-buttons">
        <LinkButton
          to="/decks"
          className="link-button--secondary rules-page__page-button"
          label="Decks"
        />
        <Button
          label="Create rule"
          className="rules-page__page-button"
          onClick={() => {
            setShowModal(true);
          }}
        />
      </section>
    </>
  );
};
