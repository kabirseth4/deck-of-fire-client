import axios from "axios";
import { useState } from "react";

export const useAddCardToDeck = () => {
  const baseApiUrl = import.meta.env.VITE_APP_BASE_API_URL;

  const [formFields, setFormFields] = useState({
    cardId: "",
    occurences: "",
    penalty: "",
  });
  const [formErrors, setFormErrors] = useState({
    cardId: "",
    occurences: "",
    penalty: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "cardId" || value >= 0) {
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

    if (!formFields.cardId) {
      setFormErrors((prevFormErrors) => {
        return {
          ...prevFormErrors,
          cardId: "This field is required",
        };
      });
      isValid = false;
    }

    if (
      deckDetails.isCustom &&
      (formFields.occurences < 1 || formFields.occurences > 10)
    ) {
      setFormErrors((prevFormErrors) => {
        return {
          ...prevFormErrors,
          occurences: "Enter a value between 0 and 10",
        };
      });
      isValid = false;
    }

    if (
      deckDetails.isScored &&
      (formFields.penalty < 1 || formFields.penalty > 10)
    ) {
      setFormErrors((prevFormErrors) => {
        return {
          ...prevFormErrors,
          penalty: "Enter a value between 0 and 10",
        };
      });
      isValid = false;
    }

    return isValid;
  };

  const addCardToDeck = async (e, deckDetails) => {
    e.preventDefault();

    if (!validateForm(deckDetails)) return;

    const cardToAdd = {
      card_id: formFields.cardId,
    };
    if (deckDetails.isCustom) cardToAdd.occurences = formFields.occurences;
    if (deckDetails.isScored) cardToAdd.penalty = formFields.penalty;

    const headers = {
      headers: {
        Authorization: "1",
      },
    };

    try {
      await axios.post(
        `${baseApiUrl}/users/1/decks/${deckDetails.id}/cards`,
        [cardToAdd],
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
    addCardToDeck,
  };
};
