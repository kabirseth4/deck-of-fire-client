import { Button } from "../../components/Button/Button";
import { TextInput } from "../../components/TextInput/TextInput";
import { useAuthenticateUser } from "../../hooks/useAuthenticateUser";
import "./LoginPage.scss";

export const LoginPage = () => {
  const {
    isLoggingIn,
    formFields,
    formErrors,
    errorMessage,
    toggleLoggingIn,
    handleInputChange,
    handleLogin,
    handleRegister,
  } = useAuthenticateUser();

  return (
    <main className="login-page">
      <div className="login-page__container">
        <form
          className="login-page__form"
          onSubmit={isLoggingIn ? handleLogin : handleRegister}
        >
          <h1 className="login-page__title">
            {isLoggingIn ? "Log In" : "Register"}
          </h1>
          <div className="login-page__input-container">
            <TextInput
              className={`login-page__input${
                isLoggingIn ? " login-page__input--hidden" : ""
              }`}
              label="Username"
              name="username"
              value={formFields.username}
              error={formErrors.username}
              onChange={handleInputChange}
              tabIndex={isLoggingIn ? -1 : 0}
              disabled={isLoggingIn}
            />
            <TextInput
              className="login-page__input"
              label="Email"
              name="email"
              value={formFields.email}
              error={formErrors.email}
              onChange={handleInputChange}
            />
            <TextInput
              className="login-page__input"
              type="password"
              label="Password"
              name="password"
              value={formFields.password}
              error={formErrors.password}
              onChange={handleInputChange}
            />
            <TextInput
              className={`login-page__input${
                isLoggingIn ? " login-page__input--hidden" : ""
              }`}
              type="password"
              label="Confirm password"
              name="confirmPassword"
              value={formFields.confirmPassword}
              error={formErrors.confirmPassword}
              onChange={handleInputChange}
              tabIndex={isLoggingIn ? -1 : 0}
              disabled={isLoggingIn}
            />
          </div>
          {errorMessage && <p className="login-page__error">{errorMessage}</p>}
          <div className="login-page__toggle">
            <p className="login-page__toggle-message">
              {isLoggingIn ? "New to Deck of Fire?" : "Have an account?"}
              &nbsp;
            </p>
            <button
              className="login-page__button-link"
              type="button"
              onClick={toggleLoggingIn}
            >
              {isLoggingIn ? "Register" : "Log in"}
            </button>
          </div>
          <Button label={isLoggingIn ? "Log in" : "Register"} />
        </form>
      </div>
    </main>
  );
};
