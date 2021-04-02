import React from 'react';
import styles from './SprintsListItem.module.css';
import { Link, useRouteMatch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteSprint } from '../../../../redux/sprints/sprints-operations';
import sprite from '../../../../icons/symbol-defs.svg';

const SprintListItem = ({ item }) => {
  // const date = '2020-4-1';
  //   const response = date
  //   .split('-')
  //   .map(item => (item.length < 2 ? (item = '0' + item) : item))
  //   .join('-');

  // console.log(response);

  const match = useRouteMatch();
  const dispatch = useDispatch();
  const deleteItem = () => dispatch(deleteSprint(item._id));

  return (
    <div>
      <li className={styles.sprintListItem}>
        <Link
          className={styles.projectLink}
          to={`${match.url}/sprints/${item._id}`}
          id={item._id}
        >
          <div>
            <h3>{item.title}</h3>
            <p>Start date{item.startDate}</p>
            <p>End date{item.endDate}</p>
            <p>Duration{item.duration}</p>
          </div>
        </Link>
        <button
          type='button'
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
