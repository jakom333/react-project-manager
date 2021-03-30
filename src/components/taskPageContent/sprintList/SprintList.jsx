import React from 'react';
import styles from './SprintList.module.css';

const sprintsList = [
  {
    title: 'Sprint 1',
    id: '1',
  },
  {
    title: 'Sprint 2',
    id: '2',
  },
  {
    title: 'Sprint 3',
    id: '3',
  },
  {
    title: 'Sprint 4',
    id: '4',
  },
  {
    title: 'Sprint 5',
    id: '5',
  },
  {
    title: 'Sprint 6',
    id: '6',
  },
];

const SprintList = () => {
  return (
    <div className={styles.sprintsContainer}>
      <div className={styles.sprintsButtonBackContainer}>
        <button>Show sprints</button>
      </div>
      <div className={styles.leftPanelSprintsContainer}>
        <ul className={styles.sprintsList}>
          {sprintsList.map(({ title, id }) => (
            <li key={id} className={styles.item}>
              <div className={styles.sprintIcon}></div>
              <p>{title}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.sprintsButtonBackContainer}>
        <button>Button + </button>

        <p>create sprint</p>
      </div>
    </div>
  );
};

export default SprintList;
