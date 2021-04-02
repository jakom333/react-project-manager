import React, { useEffect } from 'react';
import styles from './TaskList.module.css';
import TaskListItem from '../../../components/taskListItem/TaskListItem';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getTasks } from '../../../redux/tasks/task-selectors';
import { fetchTasks } from '../../../redux/tasks/task-operations';


const TaskList = () => {
  const params = useParams();
  const tasks = useSelector(getTasks);
  const dispatch = useDispatch();

  console.log(tasks);
  
  useEffect(() => {
    dispatch(fetchTasks(params.sprintId));
  }, [dispatch, params.sprintId]);

  return (
      <ul className={styles.taskList}>
        {tasks.map(item => (
          <li key={item._id} className={styles.taskCard}>
            <TaskListItem item={item}/>
          </li>
        ))}
      </ul>   
  );
};

export default TaskList;

// ===============================================================

// const TaskList = () => {
//   const TaskCards = [
//     {
//       title: 'Task 1',
//       hoursPlanned: 1,
//       hoursWasted: 0,
//       hoursWastedPerDay: [
//         {
//           singleHoursWasted: 0,
//         },
//       ],
//       _id: '1',
//     },
    
//   ];

//   return (
//     <div>
//       <ul className={styles.taskList}>
//         {/* <Task /> */}
//         {TaskCards.map(
//           ({ _id, title, hoursPlanned, hoursWasted, hoursWastedPerDay }) => (
//             <li key={_id} className={styles.taskCard}>
//               <TaskListItem />
//             </li>
//           ),
//         )}
//       </ul>
//     </div>
//   );
// };

// export default TaskList;
