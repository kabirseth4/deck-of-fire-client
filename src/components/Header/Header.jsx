import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./Header.scss";

export const Header = () => {
  return (
    <header className="header">
      <Link className="header__logo-link" to="/">
        <h2 className="header__logo">Deck&nbsp;</h2>
        <img className="header__logo-image" src={logo} alt="Logo" />
        <h2 className="header__logo">f Fire</h2>
      </Link>
    </header>
  );
};
