import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../providers/authProvider";

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormFields((prevFormFields) => ({ ...prevFormFields, [name]: value }));
    setFormErrors((prevFormErrors) => ({ ...prevFormErrors, [name]: "" }));
  };

  const validateForm = () => {
    let isValid = true;

    for (let field in formFields) {
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
    }
  };

  return { formFields, formErrors, handleInputChange, handleLogin };
};
