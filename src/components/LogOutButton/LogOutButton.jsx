import { useAuthenticateUser } from "hooks";
import { Button } from "components";
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
