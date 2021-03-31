import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from './SprintsList.module.css';
import SprintsListItem from './sprintsListItem/SprintsListItem';
import { getSprintsSelector } from '../../../redux/sprints/sprints-selectors';
import { fetchSprints } from '../../../redux/sprints/sprints-operations';
// const sprintsList = [
//   {
//     title: 'Sprint 1',
//     id: '1',
//   },
//   {
//     title: 'Sprint 2',
//     id: '2',
//   },
//   {
//     title: 'Sprint 3',
//     id: '3',
//   },
//   {
//     title: 'Sprint 4',
//     id: '4',
//   },
// ];

const SprintsList = () => {
  const sprintsList = useSelector(getSprintsSelector);
  useEffect(() => {
    fetchSprints('60648ec4c94bd96215a20430');
  }, []);
  console.log(sprintsList);
  return (
    <div>
      <div>
        <ul className={styles.sprintList}>
          {sprintsList.map(({ title, _id }) => (
            <SprintsListItem key={_id} title={title} id={_id} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SprintsList;
