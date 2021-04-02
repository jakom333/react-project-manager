import React from 'react';
import styles from './TaskForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { createTask } from '../../redux/tasks/task-operations';
import Button from '../../shared/button/Button';
import { useParams } from 'react-router-dom';

const formSchema = Yup.object().shape({
  title: Yup.string().required('* Task name is a required field'),
  hoursPlanned: Yup.number('* Scheduled time has to be a number')
    // .matches(/^0*([1-9]|8)$/, 'Must be less than 8h')
    .lessThan(8, 'Must be less than 8h')
    .required('* Description is a required field')
    .positive('Must be a positive number')
    .integer(),
});
// ====================================== Stas

const TaskForm = ({ onClose }) => {
  const { sprintId } = useParams();
  const dispatch = useDispatch();

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.titleForm}>Create new task</h2>
      <Formik
        initialValues={{
          title: '',
          hoursPlanned: '',
        }}
        validationSchema={formSchema}
        onSubmit={values => {
          createTask(values, sprintId);
          dispatch(createTask(values, sprintId));
          onClose();
        }}
      >
        <Form className={styles.form}>
          <Field
            className={styles.inputName}
            name="title"
            type="text"
            placeholder="Task name"
          />
          <ErrorMessage
            className={styles.errorName}
            component="span"
            name="title"
          />

          <Field
            className={styles.inputTime}
            name="hoursPlanned"
            type="number"
            placeholder="Scheduled hours"
          />

          <ErrorMessage
            className={styles.errorTime}
            component="span"
            name="hoursPlanned"
          />
          <Button type="submit">Done</Button>
        </Form>
      </Formik>
    </div>
  );
};

export default TaskForm;

// ================================ Mila START
// const TaskForm = () => {
//   return (
//     <div className={styles.formContainer}>
//       <h2 className={styles.titleForm}>Create new task</h2>
//       <Formik
//         initialValues={{
//           name: '',
//           time: '',
//         }}
//         validationSchema={formSchema}
//         onSubmit={async (values, { resetForm }) => {
//           alert(JSON.stringify(values, null, 2));
//           // console.log(values);
//           resetForm({});
//           //createTask//
//         }}
//       >
//         <Form className={styles.form}>
//           <Field
//             className={styles.inputName}
//             name="name"
//             type="text"
//             placeholder="Task name"
//           />
//           <ErrorMessage
//             className={styles.errorName}
//             component="span"
//             name="name"
//           />

//           <Field
//             className={styles.inputTime}
//             name="time"
//             type="text"
//             placeholder="Scheduled hours"
//           />

//           <ErrorMessage
//             className={styles.errorTime}
//             component="span"
//             name="time"
//           />
//           <button type="submit"> done </button>
//         </Form>
//       </Formik>
//     </div>
//   );
// };

// export default TaskForm;

// ============================================= Mila END

// const TaskForm = () => {
//   return (
//       <form onSubmit="">
//         <h1 className={styles.title}>Task creation</h1>
//         <label className={styles.label}>
//           The name of the task *
//           <input
//             className={styles.input}
//             type="text"
//             name="name"
//             onChange=""
//             //   value=""
//             required
//           />
//         </label>

//         <label className={styles.label}>
//           Scheduled hours *
//           <input
//             className={styles.inputHours}
//             type="text"
//             name="hours"
//             onChange=""
//             //   value=""
//             required
//           />
//         </label>
//         <button className={styles.button} type="submit">
//           Done
//         </button>
//         <button className={styles.buttonCancel} type="button">
//           Cancel
//         </button>
//       </form>
//   );
// };

// export default TaskForm;
