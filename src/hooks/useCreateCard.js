import { useState } from "react";
import { useAxios } from "./useAxios";

export const useCreateCard = () => {
  const { axios, configureAxios } = useAxios();

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
    configureAxios();

    if (!validateForm()) return;

    const cardToAdd = {
      name: formFields.name,
      description: formFields.description,
    };

    try {
      await axios.post("cards", cardToAdd);
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
