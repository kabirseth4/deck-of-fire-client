import axios from "axios";
import { useState } from "react";

export const useAddRuleToDeck = () => {
  const baseApiUrl = import.meta.env.VITE_APP_BASE_API_URL;

  const [formFields, setFormFields] = useState({
    ruleId: "",
    occurences: "1",
    penalty: "1",
  });
  const [formErrors, setFormErrors] = useState({
    ruleId: "",
    occurences: "",
    penalty: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "ruleId" || value >= 0) {
      setFormFields((prevFormFields) => {
        return { ...prevFormFields, [name]: value };
      });
      setFormErrors((prevFormErrors) => {
        return { ...prevFormErrors, [name]: "" };
      });
    }
  };

  const validateForm = (deckDetails) => {
    let isValid = true;

    if (!formFields.ruleId) {
      setFormErrors((prevFormErrors) => {
        return {
          ...prevFormErrors,
          ruleId: "This field is required",
        };
      });
      isValid = false;
    }

    if (deckDetails.isCustom && !formFields.occurences) {
      setFormErrors((prevFormErrors) => {
        return {
          ...prevFormErrors,
          occurences: "This field is required",
        };
      });
      isValid = false;
    }

    if (deckDetails.isScored && !formFields.penalty) {
      setFormErrors((prevFormErrors) => {
        return {
          ...prevFormErrors,
          penalty: "This field is required",
        };
      });
      isValid = false;
    }

    return isValid;
  };

  const addRuleToDeck = async (e, deckDetails) => {
    e.preventDefault();

    if (!validateForm(deckDetails)) return;

    const ruleToAdd = {
      rule_id: formFields.ruleId,
    };
    if (deckDetails.isCustom) ruleToAdd.occurences = formFields.occurences;
    if (deckDetails.isScored) ruleToAdd.penalty = formFields.penalty;

    const headers = {
      headers: {
        Authorization: "1",
      },
    };

    try {
      await axios.post(
        `${baseApiUrl}/users/1/decks/${deckDetails.id}/rules`,
        [ruleToAdd],
        headers
      );
      window.location.reload(false);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    formFields,
    formErrors,
    handleInputChange,
    addRuleToDeck,
  };
};
