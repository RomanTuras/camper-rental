import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './InnerNavigation.module.css';

const InnerNavigation = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <ul className={css.innerNav}>
      <li>
        <NavLink to="features" className={buildLinkClass}>
          Features
        </NavLink>
      </li>
      <li>
        <NavLink to="reviews" className={buildLinkClass}>
          Reviews
        </NavLink>
      </li>
    </ul>
  );
};

export default InnerNavigation;
