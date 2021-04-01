import React from 'react';
import styles from './TaskList.module.css';
import Task from '../../../components/task/Task';

const TaskList = () => {
  const TaskCards = [
    {
      title: 'Task 1',
      hoursPlanned: 1,
      hoursWasted: 0,
      hoursWastedPerDay: [
        {
          singleHoursWasted: 0,
        },
      ],
      _id: '1',
    },
    {
      title: 'Task 2',
      hoursPlanned: 2,
      hoursWasted: 3,
      hoursWastedPerDay: [
        {
          singleHoursWasted: 3,
        },
      ],
      _id: '2',
    },
    {
      title: 'Task 3',
      hoursPlanned: 2,
      hoursWasted: 4,
      hoursWastedPerDay: [
        {
          singleHoursWasted: 4,
        },
      ],
      _id: '3',
    },
    {
      title: 'Task 4',
      hoursPlanned: 5,
      hoursWasted: 6,
      hoursWastedPerDay: [
        {
          singleHoursWasted: 6,
        },
      ],
      _id: '4',
    },
    {
      title: 'Task 5',
      hoursPlanned: 5,
      hoursWasted: 6,
      hoursWastedPerDay: [
        {
          singleHoursWasted: 6,
        },
      ],
      _id: '5',
    },
    {
      title: 'Task 6',
      hoursPlanned: 5,
      hoursWasted: 6,
      hoursWastedPerDay: [
        {
          singleHoursWasted: 6,
        },
      ],
      _id: '6',
    },
  ];

  return (
    <div>
      <ul className={styles.taskList}>
        {/* <Task /> */}
        {TaskCards.map(
          ({ _id, title, hoursPlanned, hoursWasted, hoursWastedPerDay }) => (
            <li key={_id} className={styles.taskCard}>
              <Task />
            </li>
          ),
        )}
      </ul>
    </div>
  );
};

export default TaskList;
