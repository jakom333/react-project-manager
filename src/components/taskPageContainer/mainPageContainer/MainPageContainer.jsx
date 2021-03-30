import React from 'react';
import styles from './MainPageContainer.module.css';

const MainPageContainer = ({ children }) => {
  return <div className={styles.mainPageContainer}>{children}</div>;
};

export default MainPageContainer;
