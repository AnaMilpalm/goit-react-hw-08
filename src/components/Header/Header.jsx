import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from "./Header.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Header = () => {
  return (
    <nav className={css.nav}>
      <NavLink to="/" className={buildLinkClass}>
        Home
      </NavLink>
      <NavLink to="/contacts" className={buildLinkClass}>
        Contacts
      </NavLink>
      <NavLink to="/register" className={buildLinkClass}>
        Register
      </NavLink>
      <NavLink to="/login" className={buildLinkClass}>
        LogIn
      </NavLink>
    </nav>
  );
};

export default Header;
