import React from 'react';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import styles from './CreateSprintForm.module.css';

const formSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short!')
    .required('* Sprint name is a required field'),
  time: Yup.number()
    .typeError('* Duration has to be an appropriate number')
    .required('* Duration is a required field')
    .positive()
    .integer(),
});

const CreateSprintForm = () => {
  return (
    <div className={styles.formContainer}>
      <h2 className={styles.titleForm}>Create a sprint</h2>
      <Formik
        initialValues={{
          name: '',
          time: '',
        }}
        validationSchema={formSchema}
        onSubmit={async (values, { resetForm }) => {
          alert(JSON.stringify(values, null, 2));
          // console.log(values);
          resetForm({});
          // написать здесь свою операцию  createSprint//
        }}
      >
        <Form className={styles.form}>
          <Field
            className={styles.inputName}
            name="name"
            type="text"
            placeholder="The name of the sprint"
          />
          <ErrorMessage
            className={styles.errorName}
            component="span"
            name="name"
          />
          <div className={styles.form}>
            <Field
              className={styles.checkbox}
              type="checkbox"
              name="pastDays"
              placeholder="Includes past days"
            />
            <label className={styles.checkboxLabel}>
              <span>Include previous days</span>
              <Field
                className={styles.inputTime}
                name="time"
                type="text"
                placeholder="Duration (days)"
              />
            </label>

            <ErrorMessage
              className={styles.errorTime}
              component="span"
              name="time"
            />
          </div>
          <button type="submit"> done </button>
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
