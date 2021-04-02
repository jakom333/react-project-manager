import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { logIn } from '../../redux/auth/auth-operations.js';
import Button from '../../shared/button/Button.jsx';
import Background from '../background/Background.jsx';
import styles from './LoginForm.module.css';

const formSchema = Yup.object().shape({
  email: Yup.string()
    .required('* Email is a required field')
    .email('* Email must be valid'),
  password: Yup.string()
    .min(6, 'Too weak password!')
    .required('* Password is a required field'),
});
const LoginFormik = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.wrapper}>
      <Background />
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={formSchema}
        onSubmit={async (values, { resetForm }) => {
          alert(JSON.stringify(values, null, 2));
          dispatch(logIn(values));
          resetForm({});
        }}
      >
        <Form className={styles.form}>
          <h1 className={styles.title}>Sign in</h1>
          <Field
            type="text"
            name="email"
            className={styles.input}
            placeholder="E-mail"
          />
          <ErrorMessage
            className={styles.warning}
            component="span"
            name="email"
          />
          <Field
            type="password"
            name="password"
            className={styles.input}
            placeholder="Password"
          />
          <ErrorMessage
            className={styles.warning}
            component="span"
            name="password"
          />
          <Button>Sign in</Button>
          <p className={styles.textUnderbutton}>
            Don't yet have an account?
            <Link to="/registration" className={styles.underlined}>
              Sign up
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};
export default LoginFormik;
