import React from 'react';
import styles from './Task.module.css';
import sprite from '../../icons/symbol-defs.svg';

const Task = () => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>KN-1 Configure project</h2>
      <ul className={styles.list}>
        <li className={styles.item}>
          <span>Заплановано годин </span>
          <span>0</span>
        </li>
        <li className={styles.item}>
          <span>Витрачено год / день </span>
          <input className={styles.input} type="text" />
        </li>
        <li className={styles.item}>
          <span>Витрачено годин </span>
          <span>0</span>
        </li>

        <li className={styles.item}>
          <button className={styles.button} type="button">
            <svg className={styles.icon}>
              <use href={sprite + '#icon-delete-bin'} />
            </svg>
          </button>
        </li>
      </ul>

      {/* <button className={styles.button} type="button">
        <svg className={styles.icon}>
          <use href={sprite + '#icon-delete-bin'} />
        </svg>
      </button> */}
    </div>
  );
};

export default Task;
