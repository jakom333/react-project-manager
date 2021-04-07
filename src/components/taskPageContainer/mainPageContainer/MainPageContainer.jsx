import React from 'react';
import { container } from '../../../container.module.css';

import styles from './MainPageContainer.module.css';

const MainPageContainer = ({ children }) => {
  return (
    <div className={container}>
      <div className={styles.mainPageContainer}>{children}</div>
    </div>
  );
};

export default MainPageContainer;
