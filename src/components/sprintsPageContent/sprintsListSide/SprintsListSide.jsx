import React from 'react';
import SprintsHeader from '../sprintsHeader/SprintsHeader';
import SprintsList from '../sprintsList/SprintsList';
import styles from './SprintsListSide.module.css'
const SprintsListSide = () => {
  return (
    <div className={styles.box}>
      <SprintsHeader />
      <SprintsList />
    </div>
  );
};

export default SprintsListSide;
