import { createAction } from '@reduxjs/toolkit';

const projectsRequest = createAction('projects/projectsRequest');
const projectsSuccess = createAction('projects/projectsSuccess');
const projectsError = createAction('projects/projectsError');

const createProjectRequest = createAction('projects/createProjectRequest');
const createProjectSuccess = createAction('projects/createProjectSuccess');
const createProjectError = createAction('projects/createProjectError');

const deleteProjectRequest = createAction('projects/delete-project-request');
const deleteProjectSuccess = createAction('projects/delete-project-success');
const deleteProjectError = createAction('projects/delete-project-error');

const changeTitleRequest = createAction('project/patch-title-request');
const changeTitleSuccess = createAction('project/patch-title-success');
const changeTitleError = createAction('project/patch-title-error');

export {
  projectsRequest,
  projectsSuccess,
  projectsError,
  createProjectRequest,
  createProjectSuccess,
  createProjectError,
  deleteProjectRequest,
  deleteProjectSuccess,
  deleteProjectError,
  changeTitleRequest,
  changeTitleSuccess,
  changeTitleError,
};
