import React, { useCallback } from 'react';
import styles from './Header.module.css';
import logo from '../../images/Logo-mobile.png';
import { Link } from 'react-router-dom';
import sprite from '../../icons/symbol-defs.svg';
import { useDispatch, useSelector } from 'react-redux';
import { getUsername } from '../../redux/auth/auth-selectors';
import { logOut } from '../../redux/auth/auth-operations';

const Header = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUsername);
  const onLogOut = useCallback(() => {
    dispatch(logOut());
  }, [dispatch]);

  return (
    <div className={styles.header}>
      <Link to="/projects">
        <img src={logo} className={styles.headerLogo} alt="Logo" />
      </Link>
      <span>{name} </span>

      <a onClick={onLogOut} className={styles.logOutBtn}>
        <svg className={styles.iconSearch}>
          <use href={sprite + '#icon-logout'}></use>
        </svg>

        <span className={styles.underlined}>Log out</span>
      </a>
    </div>
  );
};

export default Header;
