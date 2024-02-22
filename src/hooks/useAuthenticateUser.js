import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../providers/authProvider";
import { validateEmail } from "../utils/validation.utils";

export const useAuthenticateUser = () => {
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const [isLoggingIn, setIsLoggingIn] = useState(true);

  const fields = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formFields, setFormFields] = useState({ ...fields });
  const [formErrors, setFormErrors] = useState({ ...fields });
  const [errorMessage, setErrorMessage] = useState("");

  const toggleLoggingIn = () => {
    setIsLoggingIn((prev) => !prev);
    setFormErrors({ ...fields });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormFields((prevFormFields) => ({ ...prevFormFields, [name]: value }));
    setFormErrors((prevFormErrors) => ({ ...prevFormErrors, [name]: "" }));
    setErrorMessage("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const validateForm = () => {
      let isValid = true;

      if (!validateEmail(formFields.email)) {
        setFormErrors((prevFormErrors) => ({
          ...prevFormErrors,
          email: "Email should be a valid format.",
        }));
        isValid = false;
      }

      ["email", "password"].forEach((field) => {
        if (!formFields[field]) {
          setFormErrors((prevFormErrors) => ({
            ...prevFormErrors,
            [field]: "This field is required.",
          }));
          isValid = false;
        }
      });

      return isValid;
    };

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

  const handleLogOut = () => {
    setUser(null);
    navigate("/");
  };

  const handleRegister = async (e) => {
    e.preventDefault();

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

    if (!validateForm()) return;

    try {
      await axios({
        method: "post",
        url: "/users/register",
        baseURL: import.meta.env.VITE_APP_BASE_API_URL,
        data: {
          username: formFields.username,
          email: formFields.email,
          password: formFields.password,
        },
      });
      await handleLogin();
    } catch (error) {
      console.error(error);
    }
  };

  return {
    isLoggingIn,
    formFields,
    formErrors,
    errorMessage,
    toggleLoggingIn,
    handleInputChange,
    handleLogin,
    handleLogOut,
    handleRegister,
  };
};
