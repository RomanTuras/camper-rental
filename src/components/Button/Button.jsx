import clsx from 'clsx';
import css from './Button.module.css';

export const Button = ({ isAccent = false, action, children }) => {
  const buildButtonClass = () => {
    return clsx(css.button, isAccent && css.accent);
  };

  const handleClick = () => {
    if (action) {
      action();
    }
  };

  return (
    <button onClick={handleClick} className={buildButtonClass()}>
      {children}
    </button>
  );
};

export const AccentButton = ({ action, children }) => {
  return (
    <Button isAccent={true} action={action}>
      {children}
    </Button>
  );
};