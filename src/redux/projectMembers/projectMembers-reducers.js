import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addMemberSuccess } from './projectMembers-actions';

const members = createReducer([], {
  [addMemberSuccess]: (state, { payload }) => [...state, payload],
});

// const error = createReducer('', {
//   [setError]: (_, { payload }) => payload,
//   [resetError]: () => '',
// });

export default combineReducers({ members });
