import "./LoginPage.scss";
import { Button, Input } from "components";
import { useAuthenticateUser } from "hooks";

export const LoginPage = () => {
  const {
    isLoggingIn,
    formFields,
    formErrors,
    inputMaxLengths,
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
            <Input
              className={`login-page__input${
                isLoggingIn ? " login-page__input--hidden" : ""
              }`}
              name="username"
              value={formFields.username}
              error={formErrors.username}
              count={inputMaxLengths.username}
              onChange={handleInputChange}
              tabIndex={isLoggingIn ? -1 : 0}
              disabled={isLoggingIn}
            />
            <Input
              className="login-page__input"
              name="email"
              value={formFields.email}
              error={formErrors.email}
              onChange={handleInputChange}
            />
            <Input
              className="login-page__input login-page__input--password"
              type="password"
              name="password"
              value={formFields.password}
              error={formErrors.password}
              onChange={handleInputChange}
            />
            <Input
              className={`login-page__input login-page__input--password${
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
          <p>
            {isLoggingIn ? "New to Deck of Fire?" : "Have an account?"}
            &nbsp;
            <button
              className="login-page__button-link"
              type="button"
              onClick={toggleLoggingIn}
            >
              {isLoggingIn ? "Register" : "Log in"}
            </button>
          </p>
          <Button label={isLoggingIn ? "Log in" : "Register"} />
        </form>
      </div>
    </main>
  );
};
