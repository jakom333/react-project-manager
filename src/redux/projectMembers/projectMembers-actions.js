import { createAction } from '@reduxjs/toolkit';

const deleteMember = createAction('members/remove-member');

// fecth project members from data-base
const fecthMembersRequest = createAction('members/fecth-members');
const fecthMembersSuccess = createAction('members/fecth-members-success');
const fecthMembersError = createAction('members/fecth-members-failure');

//add new project member
s;
const addMemberRequest = createAction('members/add-member');
const addMemberSuccess = createAction('members/add-member-success');
const addMemberError = createAction('members/add-member-failure');

//remove project member
const deleteMemberRequest = createAction('members/delete-member-request');
const deleteMemberSuccess = createAction('members/delete-member-success');
const deleteMemberError = createAction('members/delete-member-error');

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
