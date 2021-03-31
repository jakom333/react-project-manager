import React from 'react';
import styles from './SprintsListItem.module.css';
import { useHistory, useRouteMatch } from 'react-router-dom';

const SprintListItem = ({ title }) => {
  const match = useRouteMatch();
  const history = useHistory();

  const onHandleClick = evt => {
    const { id } = evt.target;
    console.log('object');
    history.push({
      pathname: `${match.url}/sprints/123`,
      state: { projectId: id },
    });
  };

  return (
    <div>
      <li
        className={styles.sprintListItem}
        id='12312423534543'
        onClick={onHandleClick}
      >
        <div>
          <h3>{title}</h3>
          <p>Дата a начала</p>
          <p>Дата конца</p>
          <p>Дата длительность</p>
        </div>
      </li>
    </div>
  );
};

export default SprintListItem;
