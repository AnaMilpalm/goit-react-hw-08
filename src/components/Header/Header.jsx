import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from "./Header.module.css";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <header className={css.header}>
      <h3>Phonebook</h3>
      {isLoggedIn && <div>{user.email}</div>}
      <ul className={css.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/contacts" className={buildLinkClass}>
          Contacts
        </NavLink>
        {!isLoggedIn && (
          <>
            <NavLink to="/register" className={buildLinkClass}>
              Register
            </NavLink>
            <NavLink to="/login" className={buildLinkClass}>
              LogIn
            </NavLink>
          </>
        )}
        {isLoggedIn && (
          <button onClick={() => dispatch(logout())}>Logout</button>
        )}
      </ul>
    </header>
  );
};

export default Header;
