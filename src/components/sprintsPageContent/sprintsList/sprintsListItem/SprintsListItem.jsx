import React from 'react';
import styles from './SprintsListItem.module.css';
import { Link, useRouteMatch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteSprint } from '../../../../redux/sprints/sprints-operations';
import sprite from '../../../../icons/symbol-defs.svg';

const SprintListItem = ({ item }) => {
  const months = [
    '',
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ];

  const match = useRouteMatch();
  const dispatch = useDispatch();
  const deleteItem = () => dispatch(deleteSprint(item._id));
  const { title, duration, endDate, startDate } = item;

  const dateStart = startDate.split('-')[2];
  const monthStart = months[startDate.split('-')[1].replace(/(^|\s)0/g, '$1')];

  const dateEnd = endDate.split('-')[2].padStart(2, '0');
  const monthEnd = months[endDate.split('-')[1]];

  const start = `${dateStart} ${monthStart}`;
  const end = `${dateEnd} ${monthEnd}`;

  return (
    <div>
      <li className={styles.sprintListItem}>
        <Link
          className={styles.projectLink}
          to={`${match.url}/sprints/${item._id}`}
          id={item._id}
        >
          <div className={styles.date}>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardDateContainer}>
              Start date <span className={styles.cardDate}>{start}</span>
            </p>
            <p className={styles.cardDateContainer}>
              End date <span className={styles.cardDate}>{end}</span>
            </p>
            <p className={styles.cardDateContainer}>
              Duration <span className={styles.cardDate}>{duration}</span>
            </p>
          </div>
        </Link>
        <button
          type="button"
          className={styles.buttonDelete}
          onClick={deleteItem}
        >
          <svg className={styles.deleteIcon}>
            <use href={sprite + '#icon-delete-bin'}></use>
          </svg>
        </button>
      </li>
    </div>
  );
};

export default SprintListItem;
