import React from 'react';
import {useDispatch } from 'react-redux';
import styles from './ProjectForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { createProject } from '../../redux/projects/projects-operations';


const formSchema = Yup.object().shape({
  title: Yup.string().required('* Project Name is a required field'),
  description: Yup.string().required('* Description is a required field'),
});


const initialState = {
  title: "",
  description: "",
};

const ProjectForm = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.titleForm}>Create new project</h2>
      <Formik
        initialValues={{
          title: '',
          description: '',
        }}
        validationSchema={formSchema}
        onSubmit={values => {
          createProject(values)
          dispatch(createProject(values));

        }}
      >
        <Form className={styles.form}>
          <Field
            className={styles.inputName}
            name="title"
            type="text"
            placeholder="Project name"
          />
          <ErrorMessage
            className={styles.errorName}
            component="span"
            name="title"
          />

          <Field
            className={styles.inputDescription}
            name="description"
            type="text"
            placeholder="Project description"
          />

          <ErrorMessage
            className={styles.errorDescription}
            component="span"
            name="description"
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};


export default ProjectForm;
