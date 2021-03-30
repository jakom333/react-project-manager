import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/auth-operations.js';
import Button from '../../shared/button/Button.jsx';
import styles from './LoginForm.module.css';

import Background from '../../components/background/Background.jsx';

const initialState = {
  email: '',
  password: '',
};
export default function RegistrationPage() {
  const [user, setUser] = useState(initialState);
  const dispatch = useDispatch();

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

        <Button>Sign in</Button>
        <p className={styles.textUnderbutton}>
          Don't yet have an account?
          <a className={styles.underlined}> Sign up</a>
        </p>
      </form>
    </div>
  );
}
