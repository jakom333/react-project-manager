import React from 'react';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from '../../shared/button/Button';
import { addSprint } from '../../redux/sprints/sprints-operations';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import styles from './CreateSprintForm.module.css';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const formSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, 'Too short!')
    .required('* Sprint name is a required field'),
  duration: Yup.number()
    .typeError(' Duration has to be a number')
    .required(' Duration is a required field')
    .positive('Duration must be a positive number')
    .integer('Duration must be an integer'),
});

const CreateSprintForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const params = useParams();
  const [startDate, setStartDate] = useState(new Date());

  const onHandleSubmit = (title, endDate, duration) => {
    addSprint(title, endDate, duration);
    dispatch(addSprint({ title, endDate, duration }, params.projectId));
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.titleForm}>Create a sprint</h2>

      <Formik
        initialValues={{
          title: '',
          duration: '',
        }}
        validationSchema={formSchema}
        onSubmit={async values => {
          const { title, duration } = values;
          const endDate = `${startDate.getFullYear()}-${1 +
            startDate.getMonth()}-${startDate.getDate()}`;
          onHandleSubmit(title, endDate, duration);
          onClose();
        }}
      >
        <Form className={styles.form}>
          <Field
            className={styles.inputName}
            name='title'
            type='text'
            placeholder='The name of the sprint'
          />
          <ErrorMessage
            className={styles.errorName}
            component='span'
            name='title'
          />
          <label>
            <p className={styles.checkboxLabel}>Include previous days</p>
            <Field
              className={styles.checkbox}
              type='checkbox'
              name='pastDays'
              placeholder='Includes past days'
            />
          </label>
          <label className={styles.dataPickerContainer}>
            <span className={styles.dataPickerLabel}>End date</span>
            <DatePicker
              selected={startDate}
              onChange={date => setStartDate(date)}
            />
          </label>
          <div className={styles.form}>
            <Field
              className={styles.inputTime}
              name='duration'
              type='text'
              placeholder='Duration (days)'
            />

            <ErrorMessage
              className={styles.errorTime}
              component='span'
              name='duration'
            />
          </div>
          <Button type='submit'>Done</Button>
        </Form>
      </Formik>
    </div>
  );
};

export default CreateSprintForm;
