// import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  // addSprintRequest,
  addSprintSucces,
  // addSprintError,
  // deleteSprintRequest,
  deleteSprintSucces,
  // deleteSprintError,
  // fetchSprintsRequest,
  fetchSprintsSucces,
  // fetchSprintsError,
} from './sprints-actions';

const sprints = createReducer([], {
  [fetchSprintsSucces]: (_, { payload }) => payload,
  [addSprintSucces]: (state, { payload }) => [...state, payload],
  [deleteSprintSucces]: (state, { payload }) =>
    state.filter(item => item._id !== payload),
});

// const loading = createReducer(false, {
//   [addSprintRequest]: () => true,
//   [addSprintSucces]: () => false,
//   [addSprintError]: () => false,
//   [deleteSprintRequest]: () => true,
//   [deleteSprintSucces]: () => false,
//   [deleteSprintError]: () => false,
//   [fetchSprintsRequest]: () => true,
//   [fetchSprintsSucces]: () => false,
//   [fetchSprintsError]: () => false,
// });

// const error = createReducer(null, {  });

// export default combineReducers({
//   sprints,
//   loading,
// });

export default sprints;
