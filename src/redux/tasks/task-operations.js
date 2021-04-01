import axios from 'axios';
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
    dispatch(fetchTaskSuccess(data));
  } catch (error) {
    dispatch(fetchTaskError(error.message));
  }
};

const createTask = (task, sprintId) => async dispatch => {
  dispatch(createTaskRequest());
  try {
    const { data } = await axios.post(`/task/${sprintId}`, task);
    dispatch(createTaskSuccess(data));
  } catch (error) {
    dispatch(createTaskError(error.message));
  }
};

const deleteTask = taskId => async dispatch => {
  dispatch(deleteTaskRequest());
  try {
    await axios.delete(`/task/${taskId}`);
    dispatch(deleteTaskSuccess(taskId));
  } catch (error) {
    dispatch(deleteTaskError(error.message));
  }
};

const changeTask = (date, hours, taskId) => async dispatch => {
  const task = {
    date,
    hours,
  };
  dispatch(changeTaskRequest());
  try {
    const { data } = await axios.patch(`/task/${taskId}`, task);
    dispatch(changeTaskSuccess(data));
  } catch (error) {
    dispatch(changeTaskError(error.message));
  }
};

export { fetchTasks, createTask, deleteTask, changeTask };
