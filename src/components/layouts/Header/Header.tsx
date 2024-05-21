import "./Header.scss";
import { Link } from "react-router-dom";
import { useAuthContext } from "providers";
import { Button } from "components";
import { images } from "assets";
import { useAuthenticateUser } from "hooks";

export const Header = () => {
  const { user } = useAuthContext();
  const { handleLogOut } = useAuthenticateUser();

  return (
    <header className={`header${!user ? " header--center" : ""}`}>
      <Link className="header__logo-link" to="/">
        <h2 className="header__logo">Deck&nbsp;</h2>
        <img className="header__logo-image" src={images.logo} alt="Logo" />
        <h2 className="header__logo">f Fire</h2>
      </Link>
      {user && (
        <Button
          label="Log out"
          className="log-out-button button--negative"
          onClick={handleLogOut}
        />
      )}
    </header>
  );
};
