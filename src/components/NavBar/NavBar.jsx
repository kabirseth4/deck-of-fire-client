import { NavLink } from "react-router-dom";
import "./NavBar.scss";

export const NavBar = () => {
  return (
    <nav className="nav-bar">
      <NavLink className="nav-bar__link" to="/decks">
        Decks
      </NavLink>
      <NavLink className="nav-bar__link" to="/rules">
        Rules
      </NavLink>
    </nav>
  );
};
