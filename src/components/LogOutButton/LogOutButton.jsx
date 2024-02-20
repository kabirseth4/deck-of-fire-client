import { useNavigate } from "react-router-dom";
import { useAuth } from "../../providers/authProvider";
import { Button } from "../Button/Button";
import "./LogOutButton.scss";

export const LogOutButton = () => {
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <Button
      label="Log out"
      className="log-out-button button--negative"
      onClick={handleLogOut}
    />
  );
};
