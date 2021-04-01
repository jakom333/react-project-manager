import { createReducer } from '@reduxjs/toolkit';
import { addMemberSuccess } from './projectMembers-actions';

const members = createReducer([], {
  [addMemberSuccess]: (state, { payload }) => [...state, payload],
});

export default members;

// state.projects.members
