export const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const validatePassword = (password: string) => {
  let isValid = true,
    message = "";

  if (!/[^A-Za-z0-9]/.test(password)) {
    isValid = false;
    message = "Must include a special character.";
  }

  if (!/[\d]/.test(password)) {
    isValid = false;
    message = "Must include at least one number.";
  }

  if (!/[\d]/.test(password)) {
    isValid = false;
    message = "Must include a number.";
  }

  if (!/[A-Z]/.test(password)) {
    isValid = false;
    message = "Must include an uppercase letter.";
  }

  if (!/[a-z]/.test(password)) {
    isValid = false;
    message = "Must include a lowercase letter.";
  }

  if (password.length < 8) {
    isValid = false;
    message = "Must be more than 8 characters.";
  }

  return { isValid, message };
};
