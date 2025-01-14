import css from './AppBar.module.css';
import Navigation from '../Navigation/Navigation';
import logo from '../../assets/images/logo.svg';

const AppBar = () => {
  return (
    <section className={css.appBar}>
      <div className={css.appBarContainer}>
        <img src={logo} alt="Campers rental" width={136} />
        <Navigation />
      </div>
    </section>
  );
};
export default AppBar;
