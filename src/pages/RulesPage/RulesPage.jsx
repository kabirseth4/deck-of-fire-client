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
        <h1 className="rules-page__titles">Rules</h1>
        <RuleList rules={rules} />
        {showModal && <CreateRuleModal setShowModal={setShowModal} />}
      </main>
      <section className="rules-page__page-buttons">
        <LinkButton
          to="/decks"
          className="button--secondary rules-page__page-button"
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
