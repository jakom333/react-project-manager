import React from 'react';
import styles from './ProjectForm.module.css';
import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup';

// const TextInput = ({ className, ...props }) => {
//   const [field, meta] = useField(props);
//   return <input {...props} {...field} />;
// };

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
        onSubmit={values => {
          alert(JSON.stringify(values, null, 2));
          // resetForm({ email: '' });
          //addProject//
        }}
      >
        <Form className={styles.form}>
          <Field
            className={styles.input}
            name="name"
            type="text"
            placeholder="Project name"
          />
          <ErrorMessage
            className={styles.error}
            component="small"
            name="name"
          />

          <Field
            className={styles.input}
            name="description"
            type="text"
            placeholder="Project description"
          />

          <ErrorMessage
            className={styles.error}
            component="small"
            name="description"
          />
        </Form>
      </Formik>
    </div>
  );
};

export default ProjectForm;
