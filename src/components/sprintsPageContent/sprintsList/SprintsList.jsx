import React, { useEffect } from 'react';
import styles from './SprintsList.module.css';
import SprintsListItem from './sprintsListItem/SprintsListItem';

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
];

const SprintsList = () => {

  return (
    <div>
      <div>
        <ul className={styles.sprintList}>
          {sprintsList.map(({ title, id }) => (
            <SprintsListItem key={id} title={title} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SprintsList;
