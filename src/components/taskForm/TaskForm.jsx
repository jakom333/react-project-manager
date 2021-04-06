import React from 'react';
import styles from './TaskForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { createTask } from '../../redux/tasks/task-operations';
import Button from '../../shared/button/Button';
import { useParams } from 'react-router-dom';

const formSchema = Yup.object().shape({
  title: Yup.string().required('Task name is a required field'),
  hoursPlanned: Yup.number('Planned hours must be a number')
    .lessThan(9, 'Must be less or iqual to 8h')
    .required('Planned hours  is a required field')
    .positive('Planned hours  must be a positive number')
    .integer('Planned hours  must be an integer'),
});

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
            placeholder="Planned hours "
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
