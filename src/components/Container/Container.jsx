import css from './Container.module.css';
import clsx from 'clsx';

const Container = ({ isAside = false, mt = true, children }) => {
  const buildContainerClass = () => {
    return clsx(css.container, isAside && css.aside, mt && css.mt);
  };

  return <div className={buildContainerClass()}>{children}</div>;
};

export const AsideContainer = ({ children }) => {
  return <Container isAside={true}>{children}</Container>;
};

export default Container;
