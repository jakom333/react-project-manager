import { createAction } from '@reduxjs/toolkit';

const fetchSprintsRequest = createAction('contacts/fetchSprintsRequest');
const fetchSprintsSucces = createAction('contacts/fetchSprintsSuccess');
const fetchSprintsError = createAction('contacts/fetchContactsError');

const addSprintRequest = createAction('phonebook/addSprintRequest');
const addSprintSucces = createAction('phonebook/addSprintSucces');
const addSprintError = createAction('phonebook/addSprintError');

const deleteSprintRequest = createAction('phonebook/deleteSprintRequest');
const deleteSprintSucces = createAction('phonebook/deleteSprintSucces');
const deleteSprintError = createAction('phonebook/deleteSprintError');

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
};
