import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../redux/auth/auth-operations.js';
import Button from '../../shared/button/Button.jsx';
import styles from './LoginForm.module.css';
import Background from '../background/Background.jsx';
import { Link } from 'react-router-dom';
import { getAuthError } from '../../redux/auth/auth-selectors.js';

const initialState = {
  email: '',
  password: '',
};
export default function LoginForm() {
  const [user, setUser] = useState(initialState);
  const dispatch = useDispatch();
  const error = useSelector(getAuthError);

  const handleChange = ({ target: { name, value } }) => {
    setUser(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(logIn(user));

    setUser(initialState);
  };

  return (
    <div className={styles.wrapper}>
      <Background />

      <form onSubmit={handleSubmit} className={styles.form}>
        <h1 className={styles.title}>Sign in</h1>
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
        {error ? (
          <span className={styles.warning}>This user does not exist</span>
        ) : (
          ''
        )}
        <label className={styles.label}>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            className={styles.inputPassword}
            placeholder="Password"
          />
        </label>
        {error ? (
          <span className={styles.warningPassword}>Wrong input</span>
        ) : (
          ''
        )}
        <div className={styles.button_wrapper}>
          <Button>Sign in</Button>
        </div>
        <p className={styles.textUnderbutton}>
          Don't have an account yet?
          <Link to="/registration" className={styles.underlined}>
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}
