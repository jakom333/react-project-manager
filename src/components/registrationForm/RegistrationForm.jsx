import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/auth-operations.js';
import Button from '../../shared/button/Button.jsx';
import styles from './RegistrationForm.module.css';

import Background from '../background/Background.jsx';
import { Link } from 'react-router-dom';

const initialState = {
  email: 'test@mail.com',
  password: 'qwerty',
  confirm_password: 'qwerty',
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
      errors.email = 'Cannot be blank';
    } else if (!regex.test(user.email)) {
      errors.email = 'Invalid email format';
    }
    if (!user.password) {
      errors.password = 'Cannot be blank';
    } else if (user.password.length < 4) {
      errors.password = 'Password must be more than 4 characters';
    } else if (user.password !== user.confirm_password) {
      errors.confirm_password = 'Passwords should match';
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
        setUser(initialState);
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
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            className={styles.input}
            placeholder="E-mail"
          />
        </label>
        <span>{formErrors.email}</span>

        <label className={styles.label}>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            className={styles.input}
            placeholder="Password"
          />
        </label>
        {formErrors.password && <span>{formErrors.password}</span>}

        <label className={styles.label}>
          <input
            type="password"
            name="confirm_password"
            value={user.confirm_password}
            onChange={handleChange}
            className={styles.input}
            placeholder="Confirm password"
          />
        </label>
        <span>{formErrors.confirm_password}</span>

        <Button>Sign up</Button>
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
