import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from 'clsx';

const Navigation = () => {

  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <nav>
      <NavLink to="/" className={buildLinkClass}>home</NavLink>
      <NavLink to="/catalog" className={buildLinkClass}>catalog</NavLink>
    </nav>
  );
};

export default Navigation;