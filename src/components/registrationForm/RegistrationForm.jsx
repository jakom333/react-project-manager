import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/auth-operations.js';
import styles from './RegistrationForm.module.css';
import Background from '../background/Background.jsx';
import { Link } from 'react-router-dom';

const initialState = {
  email: '',
  password: '',
  confirm_password: '',
};

export default function RegistrationForm() {
  const [user, setUser] = useState(initialState);
  const [formErrors, setFormErrors] = useState({});
  const dispatch = useDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setUser(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    setFormErrors(validate(user));
    setIsSubmitting(true);
  };

  const validate = user => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!user.email) {
      errors.email = (
        <span className={styles.warning}> Email is a required field</span>
      );
    } else if (!regex.test(user.email)) {
      errors.email = (
        <span className={styles.warning}>Invalid email format</span>
      );
    }
    if (!user.password) {
      errors.password = (
        <span className={styles.warning}> Password is a required field</span>
      );
    } else if (user.password.length < 6) {
      errors.password = (
        <span className={styles.warning}>
          Password must be more than 6 characters
        </span>
      );
    } else if (user.password !== user.confirm_password) {
      errors.confirm_password = (
        <span className={styles.warning}>Passwords don't match</span>
      );
    }
    return errors;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      const submitForm = () => {
        dispatch(
          register({
            email: user.email,
            password: user.password,
          }),
        );
      };
      submitForm();
    }
  }, [formErrors, isSubmitting, user.email, user.password, dispatch]);

  return (
    <div className={styles.wrapper}>
      <Background />

      <form onSubmit={handleSubmit} className={styles.form}>
        <h1 className={styles.title}>Sign up</h1>
        <label className={styles.label}>
          <input
            style={{
              color: formErrors.email
                ? 'rgba(204, 32, 41, 0.6)'
                : 'rgba(24, 28, 39, 0.6)',
              borderBottom: formErrors.email
                ? '1px solid rgba(204, 32, 41, 0.6)'
                : '1px solid rgba(24, 28, 39, 0.2)',
            }}
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            className={styles.input}
            placeholder="E-mail"
          />
        </label>
        {formErrors.email}

        <label className={styles.label}>
          <input
            style={{
              color: formErrors.password
                ? 'rgba(204, 32, 41, 0.6)'
                : 'rgba(24, 28, 39, 0.6)',
              borderBottom: formErrors.password
                ? '1px solid rgba(204, 32, 41, 0.6)'
                : '1px solid rgba(24, 28, 39, 0.2)',
            }}
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            className={styles.input}
            placeholder="Password"
          />
        </label>
        {formErrors.password}

        <label className={styles.label}>
          <input
            style={{
              color: formErrors.confirm_password
                ? 'rgba(204, 32, 41, 0.6)'
                : 'rgba(24, 28, 39, 0.6)',
              borderBottom: formErrors.confirm_password
                ? '1px solid rgba(204, 32, 41, 0.6)'
                : '1px solid rgba(24, 28, 39, 0.2)',
            }}
            type="password"
            name="confirm_password"
            value={user.confirm_password}
            onChange={handleChange}
            className={styles.input}
            placeholder="Confirm password"
          />
        </label>
        {formErrors.confirm_password}

        <div className={styles.button_wrapper}>
          <button className={styles.button} type="submit">
            Sign up
          </button>
        </div>
        <p className={styles.textUnderbutton}>
          Already have an account?
          <Link to="/login" className={styles.underlined}>
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
}
