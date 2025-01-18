import { Formik, Form, ErrorMessage, Field } from 'formik';
import { AccentButton } from '../../Button/Button';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import css from './FilterForm.module.css';
import {
  camperEquipments,
  camperForms,
} from '../../../core/constants/filterConstants';
import { ReactSVG } from 'react-svg';
import getIconPath from '../../../core/utils/getIconPath';
import CheckBoxGroup, { RadioGroup } from '../../SwitchGroup/SwitchGroup';
import FormSectionTitle from '../FormSectionTitle/FormSectionTitle';
import SizedBox from '../../SizedBox/SizedBox';

const FilterForm = ({ initialFilter, actionApplyFilter }) => {
  const locationId = nanoid();

  const FilterSchema = Yup.object().shape({
    location: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!'),
  });

  const handleSubmit = values => {
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
          <label htmlFor={locationId} className={css.locationLabel}>
            Location
          </label>
          <div className={css.inputWrapper}>
            <Field
              type="text"
              name="location"
              placeholder="Kyiv, Ukraine"
              id={locationId}
              className={css.locationInput}
            />
            <ReactSVG
              src={getIconPath('map')}
              width={20}
              height={20}
              className={css.iconInput}
            />
          </div>

          <ErrorMessage name="location" component="span" />

          <p className={css.filtersTitle}>Filters</p>

          <FormSectionTitle className={css.formSectionTitle}>
            Vehicle equipment
          </FormSectionTitle>

          <CheckBoxGroup
            items={camperEquipments}
            name="equipment"
            values={values}
            setFieldValue={setFieldValue}
          />

          <FormSectionTitle className={css.formSectionTitle}>
            Vehicle type
          </FormSectionTitle>

          <RadioGroup
            items={camperForms}
            name="form"
            values={values}
            setFieldValue={setFieldValue}
          />

          <SizedBox height={'40px'} />
          <AccentButton type="submit">Search</AccentButton>
        </Form>
      )}
    </Formik>
  );
};

export default FilterForm;
