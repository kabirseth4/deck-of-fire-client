import { useState } from "react";
import { useAxios } from "hooks";
import { DeckWithCards } from "types";

export const useAddCardToDeck = () => {
  const axios = useAxios();

  const [formFields, setFormFields] = useState<{ [k: string]: string }>({
    cardId: "",
    occurrences: "",
    penalty: "",
  });
  const [formErrors, setFormErrors] = useState<{ [k: string]: string }>({
    cardId: "",
    occurrences: "",
    penalty: "",
  });

  const handleInputChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement
  > = (e) => {
    const { name, value } = e.target;

    if (name === "cardId" || Number(value) >= 0) {
      setFormFields((prevFormFields) => {
        return { ...prevFormFields, [name]: value };
      });
      setFormErrors((prevFormErrors) => {
        return { ...prevFormErrors, [name]: "" };
      });
    }
  };

  const validateForm = (deck: DeckWithCards) => {
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
      deck.is_custom &&
      (Number(formFields.occurrences) < 1 ||
        Number(formFields.occurrences) > 10)
    ) {
      setFormErrors((prevFormErrors) => {
        return {
          ...prevFormErrors,
          occurrences: "Enter a value between 1 and 10",
        };
      });
      isValid = false;
    }

    if (
      deck.is_scored &&
      (Number(formFields.penalty) < 0 || Number(formFields.penalty) > 10)
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

  const addCardToDeck: (
    deck: DeckWithCards
  ) => React.FormEventHandler<HTMLFormElement> = (deck) => async (e) => {
    e.preventDefault();

    if (!validateForm(deck)) return;

    const cardToAdd = {
      card_id: formFields.cardId,
      occurrences: deck.is_custom ? Number(formFields.occurrences) : null,
      penalty: deck.is_scored ? Number(formFields.penalty) : null,
    };

    try {
      await axios.post(`decks/${deck.id}/cards`, [cardToAdd]);
      window.location.reload();
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
