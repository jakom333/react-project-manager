import { combineReducers } from 'redux';
import { createReducer} from '@reduxjs/toolkit';
import {
  projectsRequest,
  projectsSuccess,
  projectsError,
  addProjectRequest,
  addProjectSuccess,
  addProjectError,
  deleteProjectRequest,
  deleteProjectSuccess,
  deleteProjectError, } from './projects-actions';

const initialProjectsState = [];

const projects = createReducer(initialProjectsState, {
  [projectsSuccess]: (_, { payload }) => payload,
  [addProjectSuccess]: (state, { payload }) => [...state, payload],
  [deleteProjectSuccess]: (state, { payload }) => {
    const id = state.findIndex(sprint => sprint.id === payload);

    return [...state.slice(0, id), ...state.slice(id + 1)];
  },
});


const loading = createReducer(false, {
  [addProjectRequest]: () => true,
  [addProjectSuccess]: () => false,
  [addProjectError]: () => false,
  [deleteProjectRequest]: () => true,
  [deleteProjectSuccess]: () => false,
  [deleteProjectError]: () => false,
  [projectsRequest]: () => true,
  [projectsSuccess]: () => false,
  [projectsError]: () => false,
});


export default projects;


//
//export default combineReducers({
//  projects,
//  loading,
//});
