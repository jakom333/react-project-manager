import React from 'react';
import styles from './SprintsListItem.module.css';
import { Link, useRouteMatch } from 'react-router-dom';

const SprintListItem = ({ item }) => {
  const match = useRouteMatch();
  return (
    <div key={item.id}>
      <li className={styles.sprintListItem}>
        <Link to={`${match.url}/sprints/${item._id}`} id={item._id}>
          <div>
            <h3>title</h3>
            <p>Дата a начала</p>
            <p>Дата конца</p>
            <p>Дата длительность</p>
          </div>
        </Link>
      </li>
    </div>
  );
};

export default SprintListItem;
