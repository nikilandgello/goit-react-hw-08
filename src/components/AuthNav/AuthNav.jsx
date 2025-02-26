import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
  return clsx('link', isActive && 'active');
};

const AuthNav = () => {
  return (
    <div className={css.authLink}>
      <NavLink className={buildLinkClass} to="/register">
        Register
      </NavLink>
      <NavLink className={buildLinkClass} to="/login">
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;
