import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/auth-operations.js';
import styles from './RegistrationPage.module.css';

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
    dispatch(register(user));
    setUser(initialState);
  };

  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.headerLogo}>Logo</span>
        </header>
        <h1 className={styles.title}>Sign up</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label className={styles.label}>
            <span className={styles.text}>E-mail</span>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className={styles.input}
              placeholder="Your_email@sample.com"
            />
          </label>

          <label className={styles.label}>
            <span className={styles.text}>Password</span>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              className={styles.input}
              placeholder="*********"
            />
          </label>
          <p className={styles.text}>
            Don't have an account?<a> Sign up</a>
          </p>

          <button type="submit" className={styles.button}>
            Sign up
          </button>
        </form>
      </div>
    </>
  );
}
