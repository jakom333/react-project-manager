<<<<<<< Updated upstream
import React from 'react';
=======
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
>>>>>>> Stashed changes
import styles from './ProjectForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { createProject } from '../../redux/projects/projects-operations';
<<<<<<< Updated upstream
import projects from '../../redux/projects/projects-reducers';
=======

import Button from '../../shared/button/Button';
>>>>>>> Stashed changes

const formSchema = Yup.object().shape({
  name: Yup.string().required('* Project Name is a required field'),
  description: Yup.string().required('* Description is a required field'),
});

const ProjectForm = () => {
  return (
    <div className={styles.formContainer}>
      <h2 className={styles.titleForm}>Create new project</h2>
      <Formik
        initialValues={{
          name: '',
          description: '',
        }}
        validationSchema={formSchema}
        onSubmit={async (values, { resetForm }) => {
          // alert(JSON.stringify(values, null, 2));
          console.log(values);
          resetForm({});
          createProject(projects());
        }}
      >
        <Form className={styles.form}>
          <Field
            className={styles.inputName}
<<<<<<< Updated upstream
            name="name"
            type="text"
            placeholder="Project name"
          />
          <ErrorMessage
            className={styles.errorName}
            component="span"
            name="name"
=======
            name='title'
            type='text'
            placeholder='Project name'
          />
          <ErrorMessage
            className={styles.errorName}
            component='span'
            name='title'
>>>>>>> Stashed changes
          />

          <Field
            className={styles.inputDescription}
            name='description'
            type='text'
            placeholder='Project description'
          />

          <ErrorMessage
            className={styles.errorDescription}
            component='span'
            name='description'
          />
<<<<<<< Updated upstream

          <button type="submit">Submit</button>
=======
          <Button type='submit'>Done</Button>
>>>>>>> Stashed changes
        </Form>
      </Formik>
    </div>
  );
};

export default ProjectForm;
