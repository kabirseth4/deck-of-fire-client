import { useState } from "react";
import { useAxios } from "hooks";

export const useCreateCard = () => {
  const axios = useAxios();
  const [formFields, setFormFields] = useState<{ [k: string]: string }>({
    name: "",
    description: "",
  });
  const [formErrors, setFormErrors] = useState<{ [k: string]: string }>({
    name: "",
    description: "",
  });
  const inputMaxLengths: { [k: string]: number } = {
    name: 25,
    description: 100,
  };

  const handleInputChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
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

  const createCard: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const cardToAdd = {
      name: formFields.name,
      description: formFields.description,
    };

    try {
      await axios.post("cards", cardToAdd);
      window.location.reload();
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
