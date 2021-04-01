import React from 'react';
import styles from './Header.module.css';
import logo from '../../images/Logo-mobile.png';
import { Link } from 'react-router-dom';
// import logo from '../../images/Logo-tablet.png';

const Header = () => {
  return (
    <div className={styles.header}>
      <Link to="/projects">
        <img src={logo} className={styles.headerLogo} alt="Logo" />
      </Link>
    </div>
  );
};

export default Header;
