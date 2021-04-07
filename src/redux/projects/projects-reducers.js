import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  projectsRequest,
  projectsSuccess,
  projectsError,
  createProjectRequest,
  createProjectSuccess,
  createProjectError,
  deleteProjectRequest,
  deleteProjectSuccess,
  deleteProjectError,
  editProjectTitleRequest,
  editProjectTitleSuccess,
  editProjectTitleError,
  addMemberSuccess,
} from './projects-actions';

const initialProjectsState = [];

const projectsReducers = createReducer(initialProjectsState, {
  [projectsSuccess]: (_, { payload }) => payload,
  [createProjectSuccess]: (state, { payload }) => [...state, payload],

  [editProjectTitleSuccess]: (state, { payload }) => {
    const idx = state.findIndex(item => item._id === payload.projectId);
    const project = state[idx];
    return [
      ...state.slice(0, idx),
      { ...project, title: payload.title },
      ...state.slice(idx + 1),
    ];
  },
  [addMemberSuccess]: (state, { payload }) =>
    state.map(project =>
      project._id === payload.projectId
        ? { ...project, members: payload.members }
        : project,
    ),
  [deleteProjectSuccess]: (state, { payload }) =>
    state.filter(item => item._id !== payload),
});

const loadingReducer = createReducer(false, {
  [projectsRequest]: () => true,
  [projectsSuccess]: () => false,
  [projectsError]: () => false,
  [createProjectRequest]: () => true,
  [createProjectSuccess]: () => false,
  [createProjectError]: () => false,
  [deleteProjectRequest]: () => true,
  [deleteProjectSuccess]: () => false,
  [deleteProjectError]: () => false,
  [editProjectTitleRequest]: () => true,
  [editProjectTitleSuccess]: () => false,
  [editProjectTitleError]: () => false,
});

const handleError = (_, { payload }) => payload?.response?.data;
const clearError = () => null;

const errorReducers = createReducer(null, {
  [projectsRequest]: clearError,
  [projectsError]: handleError,
  [createProjectRequest]: clearError,
  [createProjectError]: handleError,
  [deleteProjectRequest]: clearError,
  [deleteProjectError]: handleError,
  [editProjectTitleRequest]: clearError,
  [editProjectTitleError]: handleError,
});

//const errorReducers = createReducer(null, {});

const projects = combineReducers({
  projects: projectsReducers,
  loading: loadingReducer,
  error: errorReducers,
});
export default projects;
