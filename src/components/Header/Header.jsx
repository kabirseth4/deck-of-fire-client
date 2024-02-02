import { NavLink, Link } from "react-router-dom";
import "./Header.scss";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <Link className="header__logo-link" to="/">
          <h2 className="header__logo">Deck of Fire</h2>
        </Link>
        <nav className="header__nav">
          <NavLink className="header__link" to="/decks">
            Decks
          </NavLink>
          <NavLink className="header__link" to="/rules">
            Rules
          </NavLink>
        </nav>
      </div>
    </header>
  );
};
