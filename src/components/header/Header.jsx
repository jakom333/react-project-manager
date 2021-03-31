import React from 'react';
import styles from './Header.module.css';
import logo from '../../images/Logo-mobile.png';
// import logo from '../../images/Logo-tablet.png';

const Header = () => {
  return (
    <div className={styles.header}>
      <a href="">
        <img src={logo} className={styles.headerLogo} alt="Logo" />
      </a>
    </div>
  );
};

export default Header;
