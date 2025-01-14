import { NavLink } from 'react-router-dom';

const AppBar = () => {
  return (
    <nav className="AppBar">
      <span>logo</span>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/catalog">Catalog</NavLink>
    </nav>
  );
};
export default AppBar;
