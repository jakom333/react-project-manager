import React from 'react';
import styles from './RightItemBar.module.css';

const RightItemBar = ({ children }) => {
  return <div className={styles.rightBarContainer}>{children}</div>;
};

export default RightItemBar;
