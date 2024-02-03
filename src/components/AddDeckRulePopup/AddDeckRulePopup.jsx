import { useEffect, useState } from "react";
import { useAddRuleToDeck } from "../../hooks/useAddRuleToDeck";
import { useGetRules } from "../../hooks/useGetRules";
import { Select } from "../Select/Select";
import { FormPopupButtons } from "../FormPopupButtons/FormPopupButtons";
import { NumberInput } from "../NumberInput/NumberInput";
import "./AddDeckRulePopup.scss";

export const AddDeckRulePopup = ({
  setIsAdding,
  existingRules,
  deckDetails,
}) => {
  const { rules: allRules, isLoading, isError } = useGetRules();
  const [options, setOptions] = useState([]);
  const { formFields, formErrors, handleInputChange, addRuleToDeck } =
    useAddRuleToDeck();

  useEffect(() => {
    if (!isLoading) {
      const existingRuleIds = existingRules.map(({ id }) => id);
      const ruleOptions = allRules
        .filter(({ id }) => !existingRuleIds.includes(id))
        .map(({ id, name }) => ({ value: id, name }));
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
        onSubmit={(e) => {
          addRuleToDeck(e, deckDetails);
        }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h1 className="add-deck-rule__title">Add rule to deck</h1>
        <Select
          label="Select an existing rule"
          name="ruleId"
          value={formFields.ruleId}
          error={formErrors.ruleId}
          onChange={handleInputChange}
          options={options}
        />
        {formFields.ruleId && (
          <p className="add-deck-rule__description">
            {
              allRules.find((rule) => String(rule.id) === formFields.ruleId)
                .description
            }
          </p>
        )}
        {deckDetails.isCustom && (
          <NumberInput
            label="Occurences"
            name="occurences"
            value={formFields.occurences}
            error={formErrors.occurences}
            onChange={handleInputChange}
          />
        )}
        {deckDetails.isScored && (
          <NumberInput
            label="Penalty"
            name="penalty"
            value={formFields.penalty}
            error={formErrors.penalty}
            onChange={handleInputChange}
          />
        )}
        <FormPopupButtons setIsAdding={setIsAdding} submitLabel="Add rule" />
      </form>
    </section>
  );
};
