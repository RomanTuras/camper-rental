import clsx from 'clsx';
import css from './Button.module.css';

export const Button = ({
  isAccent = false,
  action,
  type = 'button',
  children,
}) => {
  const buildButtonClass = () => {
    return clsx(css.button, isAccent && css.accent);
  };

  const handleClick = () => {
    if (action) {
      action();
    }
  };

  return (
    <button onClick={handleClick} type={type} className={buildButtonClass()}>
      {children}
    </button>
  );
};

export const AccentButton = ({ action, type = 'button', children }) => {
  return (
    <Button isAccent={true} action={action} type={type}>
      {children}
    </Button>
  );
};
