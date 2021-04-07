import React, { useCallback } from 'react';
import styles from './Header.module.css';
import logo from '../../images/Logo-mobile.png';
import { Link } from 'react-router-dom';
import sprite from '../../icons/symbol-defs.svg';
import { useDispatch, useSelector } from 'react-redux';
import {
  getIsAuthenticated,
  getUsername,
} from '../../redux/auth/auth-selectors';
import { logOut } from '../../redux/auth/auth-operations';
import { useDevice } from '../../hooks/useDevice.js';

const Header = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUsername);
  const onLogOut = useCallback(() => {
    dispatch(logOut());
  }, [dispatch]);

  const { isMobileDevice } = useDevice();

  const isAuthenticated = useSelector(getIsAuthenticated);

  return (
    <div className={styles.header}>
      <Link to="/projects">
        <img src={logo} className={styles.headerLogo} alt="Logo" />
      </Link>

      {isAuthenticated && (
        <div className={styles.logOutData}>
          {!isMobileDevice ? (
            <>
              <span>
                <b>{name}</b>
              </span>
              <button
                type="button"
                onClick={onLogOut}
                className={styles.logOutBtn}
              >
                <svg className={styles.iconLogOut}>
                  <use href={sprite + '#icon-logout'}></use>
                </svg>

                <span>Log out</span>
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={onLogOut}
                className={styles.logOutBtnMobile}
              >
                <svg className={styles.iconLogOut}>
                  <use href={sprite + '#icon-logout'}></use>
                </svg>
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
