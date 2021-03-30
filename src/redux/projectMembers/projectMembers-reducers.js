import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  fecthMembersSuccess,
  addMemberSuccess,
  deleteMemberSuccess,
} from './projectMembers-actions';

const members = createReducer([], {
  [fecthMembersSuccess]: (_, { payload }) => payload,
  [addMemberSuccess]: (state, { payload }) => [...state, payload],
  [deleteMemberSuccess]: (state, { payload }) =>
    state.filter(item => item.id !== payload),
});

// const error = createReducer('', {
//   [setError]: (_, { payload }) => payload,
//   [resetError]: () => '',
// });

export default combineReducers({ members });
