import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './TaskList.module.css';
import TaskListItem from '../../../components/taskListItem/TaskListItem';
import { getTasks } from '../../../redux/tasks/task-selectors';
import { fetchTasks } from '../../../redux/tasks/task-operations';
import { useParams } from 'react-router-dom';

const TaskList = () => {
  const { sprintId } = useParams();
  const tasks = useSelector(getTasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks(sprintId));
  }, [dispatch, sprintId]);

  return (
    <ul className={styles.taskList}>
      {tasks.map(item => (
        <li key={item._id} className={styles.taskCard}>
          <TaskListItem item={item} />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
