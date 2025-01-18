import clsx from 'clsx';
import css from './SwitchGroup.module.css';
import { Field } from 'formik';
import formatCamelCase from '../../core/utils/formatCamelCase';
import getIconPath from '../../core/utils/getIconPath';

const CheckBoxGroup = ({
  items,
  name,
  type = 'checkbox',
  values,
  setFieldValue,
}) => {
  const buildHolderClass = isActive => {
    return clsx(css.label, isActive && css.active);
  };

  return (
    <div className={css.switchHolder}>
      {items.map(item => (
        <label
          key={item}
          className={buildHolderClass(values[name].includes(item))}
        >
          <Field
            type={type}
            name={name}
            className={css.input}
            value={item}
            checked={values[name].includes(item)}
            onChange={() => {
              const newValue =
                type === 'checkbox'
                  ? values[name].includes(item)
                    ? values[name].filter(e => e !== item)
                    : [...values[name], item]
                  : [item];
              setFieldValue(name, newValue);
            }}
          />
          <img src={getIconPath(item)} width={32} />
          <span className={css.switchName}>{formatCamelCase(item)}</span>
        </label>
      ))}
    </div>
  );
};

export default CheckBoxGroup;

export const RadioGroup = ({ items, name, values, setFieldValue }) => {
  return (
    <CheckBoxGroup
      items={items}
      name={name}
      type="radio"
      values={values}
      setFieldValue={setFieldValue}
    />
  );
};
