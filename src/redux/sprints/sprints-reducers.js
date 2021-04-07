import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addSprintRequest,
  addSprintSucces,
  addSprintError,
  deleteSprintRequest,
  deleteSprintSucces,
  deleteSprintError,
  fetchSprintsRequest,
  fetchSprintsSucces,
  changeTitleSuccess,
  fetchSprintsError,
} from './sprints-actions';

const sprintsReducer = createReducer([], {
  [changeTitleSuccess]: (state, { payload }) => {
    const idx = state.findIndex(item => item._id === payload.sprintId);
    const sprint = state[idx];
    return [
      ...state.slice(0, idx),
      { ...sprint, title: payload.title },
      ...state.slice(idx + 1),
    ];
  },
  [fetchSprintsSucces]: (_, { payload }) => payload,
  [addSprintSucces]: (state, { payload }) => [...state, payload],
  [deleteSprintSucces]: (state, { payload }) =>
    state.filter(item => item._id !== payload),
});

const loading = createReducer(false, {
  [addSprintRequest]: () => true,
  [addSprintSucces]: () => false,
  [addSprintError]: () => false,
  [deleteSprintRequest]: () => true,
  [deleteSprintSucces]: () => false,
  [deleteSprintError]: () => false,
  [fetchSprintsRequest]: () => true,
  [fetchSprintsSucces]: () => false,
  [fetchSprintsError]: () => false,
});

const handleError = (_, { payload }) => payload?.response?.data;
const clearError = () => null;

const error = createReducer(null, {
  [fetchSprintsRequest]: clearError,
  [fetchSprintsError]: handleError,
  [addSprintRequest]: clearError,
  [addSprintError]: handleError,
  [deleteSprintRequest]: clearError,
  [deleteSprintError]: handleError,
});

// const error = createReducer(null, {});

export default combineReducers({
  sprintsReducer,
  loading,
  error,
});
