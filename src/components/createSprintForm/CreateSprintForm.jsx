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
  date: Yup.string()
    .matches(
      /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/,
      'Invalid date (yyyy-mm-dd)',
    )
    .required(' Date is a required field')
    .typeError(' Pick a date'),
});

// const date = '2020-4-1';
// const response = date
//   .split('-')
//   .map(item => (item.length < 2 ? (item = '0' + item) : item))
//   .join('-');

// console.log(response);

const CreateSprintForm = ({ onClose }) => {
  const [startDate, setStartDate] = useState(new Date());

  const dispatch = useDispatch();
  const params = useParams();
  return (
    <div className={styles.formContainer}>
      <h2 className={styles.titleForm}>Create a sprint</h2>

      <Formik
        initialValues={{
          title: '',
          endDate: '',
          duration: '',
        }}
        validationSchema={formSchema}
        onSubmit={async (values, { resetForm }) => {
          const { title, date, duration } = values;
          const endDate = date.replace(/\b0/g, '');
          console.log(date);
          addSprint(title, endDate, duration);
          dispatch(addSprint({ title, endDate, duration }, params.projectId));
          onClose();
          resetForm({});
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
          <label>
            <p className={styles.checkboxLabel}>Include previous days</p>
            <Field
              className={styles.checkbox}
              type="checkbox"
              name="pastDays"
              placeholder="Includes past days"
            />
          </label>
          <div className={styles.form}>
            <Field
              className={styles.inputTime}
              name="date"
              type="text"
              placeholder="yyyy-mm-dd"
            />

            <ErrorMessage
              className={styles.errorTime}
              component="span"
              name="date"
            />

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
          <Button type="submit">Done</Button>
        </Form>
      </Formik>
    </div>
  );
};

export default CreateSprintForm;

// const СreateSprintForm = () => {
//   const [startDate, setStartDate] = useState(new Date());

//   return (
//     <div>
//       <form className={styles.form}>
//         <h2 className={styles.title}>Create sprint</h2>
//         <label>
//           <span>Sprint name</span>
//           <input className={styles.input} type="text"></input>
//         </label>

//         <label>
//           <input className={styles.checkbox} type="checkbox" />
//           <span>Previous days</span>
//         </label>
//         <label>
//           <span>Finish date</span>
//           <input className={styles.input} type="date" />
//         </label>
//         <label>
//           <span>Duration</span>
//           <input className={styles.input} type="number" />
//         </label>

//         <DatePicker
//           selected={startDate}
//           onChange={date => setStartDate(date)}
//         />
//       </form>
//     </div>
//   );
// };

// export default СreateSprintForm;
