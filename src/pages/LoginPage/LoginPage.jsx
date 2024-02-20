import { Button } from "../../components/Button/Button";
import { TextInput } from "../../components/TextInput/TextInput";
import { useLogin } from "../../hooks/useLogin";
import "./LoginPage.scss";

export const LoginPage = () => {
  const { formFields, formErrors, handleInputChange, handleLogin } = useLogin();

  return (
    <main className="login-page">
      <form onSubmit={handleLogin}>
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
        <Button label="Log in" />
      </form>
    </main>
  );
};
