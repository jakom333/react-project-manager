import { createAction } from '@reduxjs/toolkit';

const projectsSuccess = createAction('auth/registerSuccess');
const projectsError = createAction('auth/registerError');

export { projectsSuccess, projectsError };
