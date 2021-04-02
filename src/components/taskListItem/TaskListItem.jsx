import React from 'react';
import styles from './TaskListItem.module.css';
import sprite from '../../icons/symbol-defs.svg';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, changeTask } from '../../redux/tasks/task-operations.js';


const TaskListItem = ({ item }) => {
  const dispatch = useDispatch();
  const deleteItem = () => dispatch(deleteTask(item._id));

  const changeHours = e => {
    const hours = e.target.value;
    const data = item.hoursWastedPerDay[0].currentDay;
    
    console.log(item.hoursWastedPerDay[0].currentDay);
   
    dispatch(changeTask(hours, data, item._id));
  };

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{item.title}</h2>
      <ul className={styles.list}>
        <li className={styles.item}>
          <span className={styles.itemName}>Scheduled hours</span>
          <span>{item.hoursPlanned}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.itemName}>Hours spent / per day</span>
          <input className={styles.input} type="text" onChange={changeHours} />
        </li>
        <li className={styles.item}>
          <span className={styles.itemName}>Hours spent</span>
          <span>0</span>
        </li>
        <li className={styles.item}>
          <span></span>
          <button onClick={deleteItem} className={styles.button} type="button">
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
