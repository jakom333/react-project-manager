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
  changeCurrentDay,
} from './task-actions.js';

const tasks = createReducer([], {
  [fetchTaskSuccess]: (_, { payload }) => payload,
  [createTaskSuccess]: (state, { payload }) => [...state, payload],
  [deleteTaskSuccess]: (state, { payload }) => [
    ...state.filter(item => item._id !== payload),
  ],

  [changeTaskSuccess]: (state, { payload }) => [
    ...state.map(task =>
      task._id === payload.taskId
        ? {
            ...task,
            hoursWasted: payload.hoursWasted,
            hoursWastedPerDay: [
              ...task.hoursWastedPerDay.map(item =>
                item.currentDay === payload.currentDay
                  ? { ...item, singleHoursWasted: payload.singleHoursWasted }
                  : item,
              ),
            ],
          }
        : task,
    ),
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

const currentDay = createReducer(Date.now(), {
  [changeCurrentDay]: (_, { payload }) => payload,
});

const handleError = (_, { payload }) => payload?.response?.data;
const clearError = () => null;

const error = createReducer(null, {
  [fetchTaskRequest]: clearError,
  [fetchTaskError]: handleError,
  [createTaskRequest]: clearError,
  [createTaskError]: handleError,
  [deleteTaskRequest]: clearError,
  [deleteTaskError]: handleError,
  [changeTaskRequest]: clearError,
  [changeTaskError]: handleError,
});

// const error = createReducer(null, {});

export default combineReducers({
  tasks,
  filter,
  currentDay,
  loading,
  error,
});
