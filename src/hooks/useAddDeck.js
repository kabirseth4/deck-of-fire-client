import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useAddDeck = () => {
  const baseApiUrl = import.meta.env.VITE_APP_BASE_API_URL;
  const navigate = useNavigate();

  const [formFields, setFormFields] = useState({
    name: "",
    isCustom: false,
    isScored: false,
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
  });

  const handleNameChange = (e) => {
    if (e.target.value.length <= 25) {
      setFormFields((prevFormFields) => {
        return { ...prevFormFields, name: e.target.value };
      });
      setFormErrors((prevFormErrors) => {
        return { ...prevFormErrors, name: "" };
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

    console.log(deckToAdd);

    const headers = {
      headers: {
        Authorization: "1",
      },
    };

    try {
      const { data: newDeck } = await axios.post(
        `${baseApiUrl}/users/1/decks`,
        deckToAdd,
        headers
      );
      navigate(`/decks/${newDeck.id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    formFields,
    formErrors,
    handleNameChange,
    handleRadioChange,
    addNewDeck,
  };
};
