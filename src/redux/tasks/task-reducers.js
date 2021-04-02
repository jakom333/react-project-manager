import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
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
  changeFilter,
} from './task-actions.js';

const tasks = createReducer([], {
  [fetchTaskSuccess]: (_, { payload }) => payload,
  [createTaskSuccess]: (state, { payload }) => {
    console.log(payload);
    return [...state, payload];
  },
  [deleteTaskSuccess]: (state, { payload }) => [
    ...state.filter(item => item.id !== payload),
  ],

  [changeTaskSuccess]: (state, { payload }) => [
    ...state.map(item => (item.id === payload.id ? payload : item)),
  ],
});

const loading = createReducer(false, {
  [fetchTaskRequest]: () => true,
  [fetchTaskSuccess]: () => false,
  [fetchTaskError]: () => false,
  [createTaskRequest]: () => true,
  [createTaskSuccess]: () => false,
  [createTaskError]: () => false,
  [deleteTaskRequest]: () => true,
  [deleteTaskSuccess]: () => false,
  [deleteTaskError]: () => false,
  [changeTaskRequest]: () => true,
  [changeTaskSuccess]: () => false,
  [changeTaskError]: () => false,
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default tasks;

// export default combineReducers({ tasks, filter});

// const handleError = (_, { payload }) => payload.response.data;
// const clearError = () => null;

// const error = createReducer(null, {
//   [fetchTaskRequest]: clearError,
//   [fetchTaskError]: handleError,
//   [createTaskRequest]: clearError,
//   [createTaskError]: handleError,
//   [deleteTaskRequest]: clearError,
//   [deleteTaskError]: handleError,
//   [changeTaskRequest]: clearError,
//   [changeTaskError]: handleError,
// });

// const error = createReducer(null, {});

// export default combineReducers({
//   tasks,
//   loading,
//   error,
// });
