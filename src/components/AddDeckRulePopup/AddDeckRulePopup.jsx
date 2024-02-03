import { useEffect, useState } from "react";
import { useAddRuleToDeck } from "../../hooks/useAddRuleToDeck";
import { useGetRules } from "../../hooks/useGetRules";
import { Select } from "../Select/Select";
import "./AddDeckRulePopup.scss";

export const AddDeckRulePopup = ({ setIsAdding }) => {
  const { rules, isLoading, isError } = useGetRules();
  const [options, setOptions] = useState([]);
  const { formFields, formErrors, handleInputChange, addRuleToDeck } =
    useAddRuleToDeck();

  useEffect(() => {
    if (!isLoading) {
      const ruleOptions = rules.map(({ id, name }) => ({ value: id, name }));
      setOptions(ruleOptions);
    }
  }, [isLoading]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Something went wrong. Please try again later.</div>;

  return (
    <section
      className="add-deck-rule"
      onClick={() => {
        setIsAdding(false);
      }}
    >
      <form
        className="add-deck-rule__container"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h1 className="add-deck-rule__title">Add rule to deck</h1>
        <Select
          label="Select rule"
          name="ruleId"
          value={formFields.ruleId}
          error={formErrors.ruleId}
          onChange={handleInputChange}
          options={options}
        />
      </form>
    </section>
  );
};
