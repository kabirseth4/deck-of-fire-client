import { useAuthenticateUser } from "../../hooks/useAuthenticateUser";
import { Button } from "../Button/Button";
import "./LogOutButton.scss";

export const LogOutButton = () => {
  const { handleLogOut } = useAuthenticateUser();

  return (
    <Button
      label="Log out"
      className="log-out-button button--negative"
      onClick={handleLogOut}
    />
  );
};
