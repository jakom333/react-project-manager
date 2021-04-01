import { createAction } from '@reduxjs/toolkit';

const projectsRequest = createAction('projects/projectsRequest');
const projectsSuccess = createAction('projects/projectsSuccess');
const projectsError = createAction('projects/projectsError');

const createProjectRequest = createAction('projects/createProjectRequest');
const createProjectSuccess = createAction('projects/createProjectSuccess');
const createProjectError = createAction('projects/createProjectError');

export {
  projectsRequest,
  projectsSuccess,
  projectsError,
  createProjectRequest,
  createProjectSuccess,
  createProjectError,
};
