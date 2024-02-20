import { Button } from "../../components/Button/Button";
import { TextInput } from "../../components/TextInput/TextInput";
import { useLogin } from "../../hooks/useLogin";
import "./LoginPage.scss";

export const LoginPage = () => {
  const {
    formFields,
    formErrors,
    errorMessage,
    handleInputChange,
    handleLogin,
  } = useLogin();

  return (
    <main className="login-page">
      <div className="login-page__container">
        <form className="login-page__form" onSubmit={handleLogin}>
          <TextInput
            label="Email"
            name="email"
            value={formFields.email}
            error={formErrors.email}
            onChange={handleInputChange}
          />
          <TextInput
            type="password"
            label="Password"
            name="password"
            value={formFields.password}
            error={formErrors.password}
            onChange={handleInputChange}
          />
          {errorMessage && <p className="login-page__error">{errorMessage}</p>}
          <Button label="Log in" />
        </form>
      </div>
    </main>
  );
};
