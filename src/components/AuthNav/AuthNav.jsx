import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const AuthNav = () => {
  return (
    <>
      <NavLink to="/register" className={buildLinkClass}>
        Register
      </NavLink>
      <NavLink to="/login" className={buildLinkClass}>
        LogIn
      </NavLink>
    </>
  );
};
export default AuthNav;
