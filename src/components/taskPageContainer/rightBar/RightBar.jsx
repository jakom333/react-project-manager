import React from 'react';
import styles from './RightBar.module.css';


const RightBar = ({ children }) => {
  return (
    <div className={styles.rightBarContainer}>
      {children}

    </div>
  );
};

export default RightBar;
