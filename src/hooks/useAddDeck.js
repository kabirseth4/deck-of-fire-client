import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAxios } from "hooks";

export const useAddDeck = () => {
  const navigate = useNavigate();
  const axios = useAxios();

  const [formFields, setFormFields] = useState({
    name: "",
    isCustom: false,
    isScored: false,
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
  });
  const inputMaxLengths = {
    name: 25,
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (value.length <= inputMaxLengths[name]) {
      setFormFields((prevFormFields) => {
        return { ...prevFormFields, [name]: value };
      });
      setFormErrors((prevFormErrors) => {
        return { ...prevFormErrors, [name]: "" };
      });
    }
  };

  const handleRadioChange = (e) => {
    const boolValue = e.target.value === "true" ? true : false;

    setFormFields((prevFormFields) => {
      return { ...prevFormFields, [e.target.name]: boolValue };
    });
  };

  const validateForm = () => {
    if (!formFields.name) {
      setFormErrors((prevFormErrors) => {
        return {
          ...prevFormErrors,
          name: "This field is required",
        };
      });
      return false;
    }

    if (formFields.name.length > 25) {
      setFormErrors((prevFormErrors) => {
        return {
          ...prevFormErrors,
          name: "This field is required",
        };
      });
      return false;
    }

    return true;
  };

  const addNewDeck = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const deckToAdd = {
      name: formFields.name,
      is_custom: formFields.isCustom,
      is_scored: formFields.isScored,
    };

    try {
      const { data: newDeck } = await axios.post("/decks", deckToAdd);
      navigate(`/decks/${newDeck.id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    formFields,
    formErrors,
    inputMaxLengths,
    handleInputChange,
    handleRadioChange,
    addNewDeck,
  };
};
