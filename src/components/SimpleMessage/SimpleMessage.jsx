import css from './SimpleMessage.module.css';
import clsx from 'clsx';

const SimpleMessage = ({ children, error = false }) => {
  const buildMessageClass = () => {
    return clsx(css.message, error && css.error);
  };

  return <p className={buildMessageClass()}>{children}</p>;
};

export default SimpleMessage;
