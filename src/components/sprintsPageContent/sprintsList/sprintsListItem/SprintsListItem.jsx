import React from 'react';
import styles from './SprintsListItem.module.css';
import { Link, useRouteMatch } from 'react-router-dom';

const SprintListItem = ({ item }) => {
  const match = useRouteMatch();

  return (
    <div>
      <Link to={`${match.url}/sprints/${item._id}`} id={item._id}>
        <li className={styles.sprintListItem}>
          <div>
            <h3>{item.title}</h3>
            <p>Start date{item.startDate}</p>
            <p>End date{item.endDate}</p>
            <p>Duration{item.duration}</p>
          </div>
        </li>
      </Link>
    </div>
  );
};

export default SprintListItem;
