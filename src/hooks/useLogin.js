import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../providers/authProvider";
import { validateEmail } from "../utils/validation.utils";

export const useLogin = () => {
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormFields((prevFormFields) => ({ ...prevFormFields, [name]: value }));
    setFormErrors((prevFormErrors) => ({ ...prevFormErrors, [name]: "" }));
    setErrorMessage("");
  };

  const validateForm = () => {
    let isValid = true;

    if (!validateEmail(formFields.email)) {
      setFormErrors((prevFormErrors) => ({
        ...prevFormErrors,
        email: "Email should be a valid format.",
      }));
      isValid = false;
    }

    for (const field in formFields) {
      if (!formFields[field]) {
        setFormErrors((prevFormErrors) => ({
          ...prevFormErrors,
          [field]: "This field is required.",
        }));
        isValid = false;
      }
    }

    return isValid;
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const { data: user } = await axios({
        method: "post",
        url: "/users/login",
        baseURL: import.meta.env.VITE_APP_BASE_API_URL,
        data: {
          email: formFields.email,
          password: formFields.password,
        },
      });
      setUser(user);
      navigate("/");
    } catch (error) {
      console.error(error);
      if (error.response.status === 401) {
        setErrorMessage("Invalid email or password.");
      }
    }
  };

  return {
    formFields,
    formErrors,
    errorMessage,
    handleInputChange,
    handleLogin,
  };
};
