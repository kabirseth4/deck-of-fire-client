import { Header } from "../../components/Header/Header";
import { LinkButton } from "../../components/LinkButton/LinkButton";
import { RuleList } from "../../components/RuleList/RuleList";
import { useGetRules } from "../../hooks/useGetRules";
import "./RulesPage.scss";

export const RulesPage = () => {
  const { rules, isLoading, isError } = useGetRules();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong. Please try again later.</p>;

  return (
    <>
      <Header />
      <main className="rules-page">
        <h1 className="rules-page__titles">Rules</h1>
        <LinkButton to="/rules/add" label="Add rule" />
        <RuleList rules={rules} />
      </main>
    </>
  );
};
