import { Link } from "react-router-dom";
import "./Header.scss";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <Link className="header__logo-link" to="/">
          <h2 className="header__logo">Deck of Fire</h2>
        </Link>
      </div>
    </header>
  );
};
