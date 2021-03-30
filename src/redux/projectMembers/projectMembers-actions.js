import { createAction } from '@reduxjs/toolkit';

const deleteMember = createAction('project/remove-member');

// fecth project members from data-base
const fecthMembersRequest = createAction('project/fecth-members');
const fecthMembersSuccess = createAction('projectfecth-members-success');
const fecthMembersError = createAction('project/fecth-members-failure');

//add new project member

const addMemberRequest = createAction('project/add-member');
const addMemberSuccess = createAction('project/add-member-success');
const addMemberError = createAction('project/add-member-failure');

//remove project member
const deleteMemberRequest = createAction('project/delete-member-request');
const deleteMemberSuccess = createAction('project/delete-member-success');
const deleteMemberError = createAction('project/delete-member-error');

// errors
// const setError = createAction('project/setError');
// const resetError = createAction('project/resetError');

export {
  fecthMembersError,
  fecthMembersSuccess,
  fecthMembersRequest,
  addMemberError,
  addMemberRequest,
  addMemberSuccess,
  deleteMemberError,
  deleteMemberSuccess,
  deleteMemberRequest,
  deleteMember,
};
