import React, { useEffect, useState } from 'react';
import styles from './TaskListItem.module.css';
import sprite from '../../icons/symbol-defs.svg';
import { useDispatch } from 'react-redux';
import { deleteTask, changeTask } from '../../redux/tasks/task-operations.js';

const TaskListItem = ({ item, taskDate }) => {
  const dispatch = useDispatch();
  const deleteItem = () => dispatch(deleteTask(item._id));
  const [hours, setHours] = useState(0);

  useEffect(() => {
    setHours(
      item.hoursWastedPerDay.find(
        item =>
          new Date(item.currentDay).getDate() === new Date(taskDate).getDate(),
      )?.singleHoursWasted,
    );
  }, [taskDate, item]);

  const onHandleChange = e => {
    const hours = Number(e.target.value);
    if (hours > 8) return;

    if (hours) {
      setHours(hours);
    }
  };

  const onHandleSubmit = e => {
    e.preventDefault();
    const date = new Date(taskDate);
    const day = `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
    dispatch(changeTask(hours, item._id, day));
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
          {new Date(item?.hoursWastedPerDay[0].currentDay).getDate() >
          new Date(taskDate).getDate() ? (
            <span className={styles.itemName}>0</span>
          ) : (
            <input
              className={styles.input}
              type="number"
              onChange={onHandleChange}
              onBlur={onHandleSubmit}
              value={hours}
            />
          )}
        </li>
        <li className={styles.item}>
          <span className={styles.itemName}>Hours spent</span>
          <span>{item.hoursWasted}</span>
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
