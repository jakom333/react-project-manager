import React from 'react';
import styles from './RightBar.module.css';
import ChartModal from '../../graph/modal/ChartModal';

const RightBar = ({ children }) => {
  return (
    <div className={styles.rightBarContainer}>
      {children}
      <ChartModal />
    </div>
  );
};

export default RightBar;
