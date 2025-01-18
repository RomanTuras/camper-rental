import css from './AppBar.module.css';
import Navigation from '../Navigation/Navigation';
import getIconPath from '../../core/utils/getIconPath';

const AppBar = () => {
  return (
    <section className={css.appBar}>
      <div className={css.appBarContainer}>
        <img src={getIconPath('logo')} alt="Campers rental" width={136} />
        <Navigation />
      </div>
    </section>
  );
};
export default AppBar;
