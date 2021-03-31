import { createAction } from '@reduxjs/toolkit';

const projectsRequest = createAction('projects/projectsRequest');
const projectsSuccess = createAction('projects/projectsSuccess');
const projectsError = createAction('projects/projectsError');

const addProjectRequest = createAction('projects/add-project');
const addProjectSuccess = createAction('projects/add-project-success');
const addProjectError = createAction('projects/add-project-failure');

const deleteProjectRequest = createAction('projects/delete-project-request');
const deleteProjectSuccess = createAction('projects/delete-project-success');
const deleteProjectError = createAction('projects/delete-project-error');

export {
  projectsRequest,
  projectsSuccess,
  projectsError,
  addProjectRequest,
  addProjectSuccess,
  addProjectError,
  deleteProjectRequest,
  deleteProjectSuccess,
  deleteProjectError,
};
