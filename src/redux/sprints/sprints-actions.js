import { createAction } from '@reduxjs/toolkit';

const fetchSprintsRequest = createAction('sprints/fetchSprintsRequest');
const fetchSprintsSucces = createAction('sprints/fetchSprintsSuccess');
const fetchSprintsError = createAction('sprints/fetchContactsError');

const addSprintRequest = createAction('sprints/addSprintRequest');
const addSprintSucces = createAction('sprints/addSprintSucces');
const addSprintError = createAction('sprints/addSprintError');

const deleteSprintRequest = createAction('sprints/deleteSprintRequest');
const deleteSprintSucces = createAction('sprints/deleteSprintSucces');
const deleteSprintError = createAction('sprints/deleteSprintError');

const changeTitleRequest = createAction('sprints/changeTitleRequest');
const changeTitleSuccess = createAction('sprints/changeTitleSuccess');
const changeTitleError = createAction('sprints/changeTitleError');

export {
  addSprintRequest,
  addSprintSucces,
  addSprintError,
  deleteSprintRequest,
  deleteSprintSucces,
  deleteSprintError,
  fetchSprintsRequest,
  fetchSprintsSucces,
  fetchSprintsError,
  changeTitleRequest,
  changeTitleSuccess,
  changeTitleError,
};
