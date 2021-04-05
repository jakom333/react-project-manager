import { createAction } from '@reduxjs/toolkit';

const fetchTaskRequest = createAction('tasks/fetchTaskRequest');
const fetchTaskSuccess = createAction('tasks/fetchTaskSuccess');
const fetchTaskError = createAction('tasks/fetchTaskError');

const createTaskRequest = createAction('tasks/createTaskRequest');
const createTaskSuccess = createAction('tasks/createTaskSuccess');
const createTaskError = createAction('tasks/createTaskError');

const deleteTaskRequest = createAction('tasks/deleteTaskRequest');
const deleteTaskSuccess = createAction('tasks/deleteTaskSuccess');
const deleteTaskError = createAction('tasks/deleteTaskError');

const changeTaskRequest = createAction('tasks/changeTaskRequest');
const changeTaskSuccess = createAction('tasks/changeTaskSuccess');
const changeTaskError = createAction('tasks/changeTaskError');

const changeFilter = createAction('tasks/changeFilter');

const changeCurrentDay = createAction('tasks/changeCurrentDay');

export {
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
  changeFilter,
  changeCurrentDay,
};
