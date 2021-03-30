import React from 'react';
import styles from './LeftBar.module.css';

const LeftBar = ({ children }) => {
  return <div className={styles.leftBarContainer}>{children}</div>;
};

export default LeftBar;
