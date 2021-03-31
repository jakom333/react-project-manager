import React from 'react';
import RoundButton from '../../../shared/roundButton/RoundButton';
import sprite from '../../../icons/symbol-defs.svg';
import styles from './SprintListSideBar.module.css';

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
        <button type='button' className={styles.buttonBack}>
          <svg className={styles.iconBack}>
            <use href={sprite + '#icon-Arrow-1'}></use>
          </svg>
          <p className={styles.showProject}>Show sprints</p>
        </button>
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
      <div className={styles.sprintsButtonCreateContainer}>
        <RoundButton>Button + </RoundButton>

        <p>create sprint</p>
      </div>
    </div>
  );
};

export default SprintList;
