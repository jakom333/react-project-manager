import React from 'react';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import './datepicker.css';
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
    .typeError('* Duration has to be a number')
    .required('* Duration is a required field')
    .positive('* Duration must be a positive number')
    .integer('* Duration must be an integer'),
});

const CreateSprintForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const params = useParams();
  const [startDate, setStartDate] = useState(new Date());
  const [check, setCheck] = useState(false);

  const minDate = check ? '' : new Date();

  const onHandleSubmit = (title, endDate, duration) => {
    addSprint(title, endDate, duration);
    dispatch(addSprint({ title, endDate, duration }, params.projectId));
  };

  const onCheck = event => {
    setCheck(prev => !prev);
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
          const endDate = `${startDate.getFullYear()}-${
            1 + startDate.getMonth()
          }-${startDate.getDate()}`;
          onHandleSubmit(title, endDate, duration);
          onClose();
        }}
      >
        <Form className={styles.form}>
          <Field
            className={styles.inputName}
            name="title"
            type="text"
            placeholder="The name of the sprint"
          />
          <ErrorMessage
            className={styles.errorName}
            component="span"
            name="title"
          />
          <label className={styles.checkbox}>
            <Field
              type="checkbox"
              name="pastDays"
              checked={check}
              onClick={onCheck}
              placeholder="Includes past days"
            />
            <div className={styles.checkbox__text}>Include previous days</div>
          </label>
          <div className={styles.tabletContainer}>
            <div>
              <label htmlFor="picker" className={styles.dataPickerContainer}>
                <span className={styles.dataPickerLabel}>End date</span>
              </label>

              <DatePicker
                className={styles.dataPicker}
                selected={startDate}
                onChange={date => setStartDate(date)}
                minDate={minDate}
                id="picker"
                dateFormat="MMMM dd"
              />
            </div>

            <div className={styles.formDuration}>
              <Field
                className={styles.inputTime}
                name="duration"
                type="text"
                placeholder="Duration (days)"
              />

              <ErrorMessage
                className={styles.errorTime}
                component="span"
                name="duration"
              />
            </div>
          </div>
          <Button>Done</Button>
        </Form>
      </Formik>
    </div>
  );
};

export default CreateSprintForm;
