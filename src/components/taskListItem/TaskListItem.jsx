import React from 'react';
import styles from './TaskListItem.module.css';
import sprite from '../../icons/symbol-defs.svg';

const TaskListItem = ({item}) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{item.title}</h2>
      <ul className={styles.list}>
        <li className={styles.item}>
          <span className={styles.itemName}>Scheduled hours</span>
          <span>0</span>
        </li>
        <li className={styles.item}>
          <span className={styles.itemName}>Spent hours / day</span>
          <input className={styles.input} type="text" />
        </li>
        <li className={styles.item}>
          <span className={styles.itemName}>Spent hours</span>
          <span>0</span>
        </li>
        <li className={styles.item}>
          <span></span>
          <button className={styles.button} type="button">
            <svg className={styles.icon}>
              <use href={sprite + '#icon-delete-bin'} />
            </svg>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default TaskListItem;
