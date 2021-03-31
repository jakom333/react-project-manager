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

const createTask = sprintId => async dispatch => {
  dispatch(createTaskRequest());
  try {
    const { data } = await axios.post(`/task/${sprintId}`);
    dispatch(createTaskSuccess(data));
  } catch (error) {
    dispatch(createTaskError(error.message));
  }
};

const deleteTask = taskId => async dispatch => {
  dispatch(deleteTaskRequest());
  try {
    const { data } = await axios.delete(`/task/${taskId}`);
    dispatch(deleteTaskSuccess(data));
  } catch (error) {
    dispatch(deleteTaskError(error.message));
  }
};

const changeTask = taskId => async dispatch => {
  dispatch(changeTaskRequest());
  try {
    const { data } = await axios.patch(`/task/${taskId}`);
    dispatch(changeTaskSuccess(data));
  } catch (error) {
    dispatch(changeTaskError(error.message));
  }
};

export { fetchTasks, createTask, deleteTask, changeTask };
