import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import css from './ReviewsForm.module.css';
import { AccentButton } from '../../Button/Button';
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { useState } from 'react';

const ReviewsForm = ({submitReview}) => {
  const initialValues = {
    name: '',
    email: '',
    bookingDate: '',
    comment: '',
  };

  const today = new Date();
  today.setHours(0,0,0,0);

  const ReviewsSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Name is required!'),
    email: Yup.string()
      .min(3, 'Too Short!')
      .email('Please, enter valid email!')
      .required('Email is required!'),
      bookingDate: Yup.date()
      .min(today, 'Date must be today or later!')
      .required('Booking date is required!'),
    comment: Yup.string(),
  });

  const handleSubmit = (values, { resetForm }) => {
    submitReview(values);
    resetForm();
  };

  // const [startDate, setStartDate] = useState('');

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={ReviewsSchema}
      >
        <Form className={css.reviewsForm}>
          <Field type="text" name="name" placeholder="Name*" />
          <ErrorMessage name="name" component="span" />

          <Field type="email" name="email" placeholder="Email*" />
          <ErrorMessage name="email" component="span" />

          <Field type="text" name="bookingDate" placeholder="Booking date*" onFocus={(e) => (e.target.type = "date")} onBlur={(e) => (e.target.type = "text")}/>
          {/* <DatePicker name="bookingDate" selected={startDate} onChange={(date) => setStartDate(date)} placeholderText='Booking date*' /> */}
          <ErrorMessage name="bookingDate" component="span" />


          <Field as="textarea" name="comment" placeholder="Comment*" className={css.reviewComment} />
          <AccentButton type="submit">Send</AccentButton>
        </Form>
      </Formik>
    </>
  );
};

export default ReviewsForm;
