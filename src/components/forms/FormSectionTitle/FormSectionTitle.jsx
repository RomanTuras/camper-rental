import css from './FormSectionTitle.module.css';

const FormSectionTitle = ({ children }) => (
  <h3 className={css.formSectionTitle}>{children}</h3>
);

export default FormSectionTitle;
