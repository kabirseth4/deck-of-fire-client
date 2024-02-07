import axios from "axios";
import { useState } from "react";

export const useCreateCard = () => {
  const baseApiUrl = import.meta.env.VITE_APP_BASE_API_URL;

  const [formFields, setFormFields] = useState({
    name: "",
    description: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    description: "",
  });
  const inputMaxLengths = {
    name: 25,
    description: 100,
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

  const validateForm = () => {
    let isValid = true;

    for (const field in formFields) {
      if (!formFields[field]) {
        setFormErrors((prevFormErrors) => {
          return {
            ...prevFormErrors,
            [field]: "This field is required",
          };
        });
        isValid = false;
      }
    }
    return isValid;
  };

  const createCard = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const cardToAdd = {
      name: formFields.name,
      description: formFields.description,
    };

    const headers = {
      headers: {
        Authorization: "1",
      },
    };

    try {
      await axios.post(`${baseApiUrl}/users/1/cards`, cardToAdd, headers);
      window.location.reload(false);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    formFields,
    formErrors,
    inputMaxLengths,
    handleInputChange,
    createCard,
  };
};
