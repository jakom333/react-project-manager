import { createAction } from '@reduxjs/toolkit';

//add new project member

const addMemberRequest = createAction('project/add-member');
const addMemberSuccess = createAction('project/add-member-success');
const addMemberError = createAction('project/add-member-failure');

// errors
// const setError = createAction('project/setError');
// const resetError = createAction('project/resetError');

export { addMemberError, addMemberRequest, addMemberSuccess };
