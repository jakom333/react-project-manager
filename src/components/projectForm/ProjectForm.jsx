import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import styles from './ProjectForm.module.css';
import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup';
import { createProject } from '../../redux/projects/projects-operations';
//import { getIsAuthenticated } from '../../redux/auth/auth-selectors';

// const TextInput = ({ className, ...props }) => {
//   const [field, meta] = useField(props);
//   return <input {...props} {...field} />;
// };

const formSchema = Yup.object().shape({
  name: Yup.string().required('* Project Name is a required field'),
  description: Yup.string().required('* Description is a required field'),
});


const initialState = {
  title: "",
  description: "",
};

const ProjectForm = () => {
  const [project, setProject] = useState(initialState);
  const dispatch = useDispatch();

//  const { title, description } = projectItem;////  const [errors, setErrors] = useState({});

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
          alert(JSON.stringify(values, null, 2));
          // resetForm({ email: '' });
          createProject(values)
//          setProject(setProject => ({
//            ...setProject,
//            [values.title]: values.value,
//          }));
          dispatch(createProject(project));
          setProject(initialState);
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

//
//const mapStateToProps = (state) => ({
//  email: getIsAuthenticated(state),
//});
//
//const mapDispatchToProps = {
//  createProject: createProject,
//};

export default ProjectForm;

//
//
//import React, { useState } from 'react';
//import { useDispatch } from 'react-redux';
//import { connect } from 'react-redux';
////import React from 'react';
//import styles from './ProjectForm.module.css';
//import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
//import * as Yup from 'yup';
//import { createProject } from '../../redux/projects/projects-operations';
//import { getIsAuthenticated } from '../../redux/auth/auth-selectors';
//
//// const TextInput = ({ className, ...props }) => {
////   const [field, meta] = useField(props);
////   return <input {...props} {...field} />;
//// };
//
//const formSchema = Yup.object().shape({
//  title: Yup.string().required('* Project Name is a required field'),
//  description: Yup.string().required('* Description is a required field'),
//});
//
//const initialState = {
//  title: '',
//  description: '',
//};
//const [projectItem, setProjectItem] = useState(initialState);
//
//const { title, description } = projectItem;
//
//const project = {
//  title,
//  description,
//};
//
//const ProjectForm = ({ createProject }) => {
//  return (
//    <div className={styles.formContainer}>
//      <h2 className={styles.titleForm}>Create new project</h2>
//      <Formik
//        initialValues={{
//          title: '',
//          description: '',
//        }}
//        validationSchema={formSchema}
//        onSubmit={values => {
//          alert(JSON.stringify(values, null, 2));
//
//          createProject(project);
//          setProjectItem(initialState);
//        }}
//      >
//        <Form className={styles.memberForm}>
//          <Field className={styles.input} name="title" type="text" placeholder="Project name" />
//          <ErrorMessage className={styles.error} component="small" name="title" />
//
//          <Field
//            className={styles.input}
//            name="description"
//            type="text"
//            placeholder="Project description"
//          />
//
//          <ErrorMessage className={styles.error} component="small" name="description" />
//          <button type="submit">Submit</button>
//        </Form>
//      </Formik>
//    </div>
//  );
//};
//
//const mapStateToProps = state => ({
//  email: getIsAuthenticated(state),
//});
//
//const mapDispatchToProps = {
//  createProject: createProject,
//};
//
//export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm);
