import { Formik, Form, ErrorMessage, Field } from 'formik';
import { AccentButton } from '../../Button/Button';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import css from './FilterForm.module.css';
import {
  camperEquipments,
  camperForms,
} from '../../../core/constants/filterConstants';

const FilterForm = ({ initialFilter, actionApplyFilter }) => {

  const locationId = nanoid();

  const FilterSchema = Yup.object().shape({
    location: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!'),
  });

  const handleSubmit = (values) => {
    actionApplyFilter?.(values);
  };

  return (
    <Formik
      initialValues={initialFilter}
      onSubmit={handleSubmit}
      validationSchema={FilterSchema}
      enableReinitialize
    >
      {({ values, setFieldValue }) => (
        <Form className={css.filterForm}>
          <label htmlFor={locationId}>Location</label>
          <Field type="text" name="location" id={locationId} />
          <ErrorMessage name="location" component="span" />

          {camperEquipments.map(item => (
            <label key={item}>
              <Field
                type="checkbox"
                name="equipment"
                value={item}
                checked={values.equipment.includes(item)}
                onChange={() => {
                  const newValue = values.equipment.includes(item)
                    ? values.equipment.filter(e => e !== item)
                    : [...values.equipment, item];
                  setFieldValue('equipment', newValue);
                }}
              />
              {item}
            </label>
          ))}

          <Field as="select" name="form">
            {camperForms.map(item => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </Field>

          <AccentButton type="submit">Search</AccentButton>
        </Form>
      )}
    </Formik>
  );
};

export default FilterForm;
