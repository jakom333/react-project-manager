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

const formSchema = Yup.object().shape({
  title: Yup.string().required('* Sprint name is a required field'),
  duration: Yup.number('* Duration has to be an appropriate number')
    .required('* Duration is a required field')
    .positive()
    .integer(),
});

const CreateSprintForm = ({ onClose }) => {
  const DatePickerField = () => {
    return (
      <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
    );
  };

  const dispatch = useDispatch();
  const params = useParams();
  const [startDate, setStartDate] = useState(new Date());
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
          addSprint(values);
          dispatch(addSprint(values, params.projectId));
          onClose();

          resetForm({});
          // написать здесь свою операцию  createSprint//
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
          <div className={styles.form}>
            <Field
              className={styles.checkbox}
              type='checkbox'
              name='pastDays'
              placeholder='Includes past days'
            />
            <label className={styles.checkboxLabel}>
              <span>Includes previous days</span>
              <Field
                className={styles.inputTime}
                name='endDate'
                type='text'
                placeholder='yyyy-mm-dd'
              />
            </label>

            <ErrorMessage
              className={styles.errorTime}
              component='span'
              name='endDate'
            />
            <label className={styles.checkboxLabel}>
              <span>Includes previous days</span>
              <Field
                className={styles.inputTime}
                name='duration'
                type='text'
                placeholder='Duration (days)'
              />
            </label>

            <ErrorMessage
              className={styles.errorTime}
              component='span'
              name='duration'
            />
          </div>
          <Button type='submit'>Done</Button>;
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
