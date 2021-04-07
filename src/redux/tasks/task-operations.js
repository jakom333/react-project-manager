import axios from 'axios';
import { refreshTemplate } from '../projects/projects-operations.js';
import {
  fetchTaskRequest,
  fetchTaskSuccess,
  fetchTaskError,
  createTaskRequest,
  createTaskSuccess,
  createTaskError,
  deleteTaskRequest,
  deleteTaskSuccess,
  deleteTaskError,
  changeTaskRequest,
  changeTaskSuccess,
  changeTaskError,
} from './task-actions.js';

axios.defaults.baseURL = 'https://sbc-backend.goit.global';

const fetchTasks = sprintId => async dispatch => {
  dispatch(fetchTaskRequest());
  try {
    const { data } = await axios.get(`/task/${sprintId}`);
    dispatch(fetchTaskSuccess(data.constructor.name === 'Array' ? data : []));
  } catch (error) {
    dispatch(fetchTaskError(error?.message));
    refreshTemplate(() => fetchTasks(sprintId), error, dispatch);
  }
};

const createTask = (task, sprintId) => async dispatch => {
  dispatch(createTaskRequest());
  try {
    const { data } = await axios.post(`/task/${sprintId}`, task);
    dispatch(createTaskSuccess({ ...data, _id: data.id }));
  } catch (error) {
    dispatch(createTaskError(error?.message));
    refreshTemplate(() => createTask(task, sprintId), error, dispatch);
  }
};

const deleteTask = taskId => async dispatch => {
  dispatch(deleteTaskRequest());
  try {
    await axios.delete(`/task/${taskId}`);
    dispatch(deleteTaskSuccess(taskId));
  } catch (error) {
    dispatch(deleteTaskError(error?.message));
    refreshTemplate(() => deleteTask(taskId), error, dispatch);
  }
};

const changeTask = (hoursWasted, taskId, currentDay) => async dispatch => {
  dispatch(changeTaskRequest());
  try {
    const { data } = await axios.patch(`/task/${taskId}`, {
      date: currentDay,
      hours: hoursWasted,
    });
    dispatch(
      changeTaskSuccess({
        currentDay: data.day.currentDay,
        singleHoursWasted: data.day.singleHoursWasted,
        hoursWasted: data.newWastedHours,
        taskId,
      }),
    );
  } catch (error) {
    dispatch(changeTaskError(error?.message));
    refreshTemplate(
      () => changeTask(hoursWasted, taskId, currentDay),
      error,
      dispatch,
    );
  }
};

export { fetchTasks, createTask, deleteTask, changeTask };
