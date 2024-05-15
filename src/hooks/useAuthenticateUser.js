import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../providers/authProvider";
import { validateEmail, validatePassword } from "../utils/validation.utils";

const BASE_API_URL = import.meta.env.VITE_APP_BASE_API_URL;

export const useAuthenticateUser = () => {
  const { setUser } = useAuthContext();
  const navigate = useNavigate();

  const [isLoggingIn, setIsLoggingIn] = useState(true);

  const fields = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const inputMaxLengths = {
    username: 25,
  };

  const [formFields, setFormFields] = useState({ ...fields });
  const [formErrors, setFormErrors] = useState({ ...fields });
  const [errorMessage, setErrorMessage] = useState("");

  const resetErrors = () => {
    setFormErrors({ ...fields });
    setErrorMessage("");
  };

  const toggleLoggingIn = () => {
    setIsLoggingIn((prev) => !prev);
    resetErrors();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name in inputMaxLengths && value.length > inputMaxLengths[name]) return;

    setFormFields((prevFormFields) => ({ ...prevFormFields, [name]: value }));
    setFormErrors((prevFormErrors) => ({ ...prevFormErrors, [name]: "" }));
    setErrorMessage("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    resetErrors();

    const { email, password } = formFields;

    const validateForm = () => {
      let isValid = true;

      if (!validateEmail(email)) {
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
        baseURL: BASE_API_URL,
        data: { email, password },
      });
      setUser(user);
      navigate("/");
    } catch (error) {
      switch (error.response.status) {
        case 401:
          setErrorMessage("Invalid email or password.");
          break;
        default:
          setErrorMessage("Something went wrong. Please try again later.");
      }
    }
  };

  const handleLogOut = () => {
    setUser(null);
    navigate("/");
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    resetErrors();

    const { username, email, password, confirmPassword } = formFields;

    const validateForm = () => {
      let isValid = true;

      if (!validateEmail(email)) {
        setFormErrors((prevFormErrors) => ({
          ...prevFormErrors,
          email: "Email should be a valid format.",
        }));
        isValid = false;
      }

      const passwordValidation = validatePassword(password);
      if (!passwordValidation.isValid) {
        setFormErrors((prevFormErrors) => ({
          ...prevFormErrors,
          password: passwordValidation.message,
        }));
        isValid = false;
      } else if (password !== confirmPassword) {
        setFormErrors((prevFormErrors) => ({
          ...prevFormErrors,
          confirmPassword: "Passwords do not match.",
        }));
        isValid = false;
      }

      for (const field in fields) {
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
        baseURL: BASE_API_URL,
        data: { username, email, password },
      });
      await handleLogin(e);
    } catch (error) {
      switch (error.response.status) {
        case 409:
          if (error.response.data.type === "USERNAME_TAKEN") {
            setFormErrors((prevFormErrors) => ({
              ...prevFormErrors,
              username: "Username is already taken.",
            }));
          }

          if (error.response.data.type === "EMAIL_TAKEN") {
            setErrorMessage(
              "Email is already associated with an account. Please log in."
            );
          }

          break;
        default:
          setErrorMessage("Something went wrong. Please try again later.");
      }
    }
  };

  return {
    isLoggingIn,
    formFields,
    formErrors,
    inputMaxLengths,
    errorMessage,
    toggleLoggingIn,
    handleInputChange,
    handleLogin,
    handleLogOut,
    handleRegister,
  };
};
