import { createReducer } from '@reduxjs/toolkit';
import {
  createProjectSuccess,
  projectsSuccess,
  deleteProjectSuccess,
  editProjectTitleSuccess,
} from './projects-actions';

const initialProjectsState = [];

const projects = createReducer(initialProjectsState, {
  [projectsSuccess]: (_, { payload }) => payload,
  [createProjectSuccess]: (state, { payload }) => [...state, payload],
  [deleteProjectSuccess]:  (state, { payload }) =>
    state.filter(item => item.id !== payload),

  [editProjectTitleSuccess]: (state, { payload }) => {
    const idx = state.findIndex(item => item._id === payload.projectId);
    const project = state[idx];
    return [
      ...state.slice(0, idx),
      { ...project, title: payload.title },
      ...state.slice(idx + 1),
    ];
  },

//  [deleteContactSuccess]: (state, { payload }) => {
//  return [...state.filter(item => item.id.toString() !== payload.toString())];
//},

//  [deleteProjectSuccess]: (state, { payload }) => {
//    const id = state.findIndex(project => project.id === payload);
//
//    return [...state.slice(0, id), ...state.slice(id + 1)];
//  },
});

export default projects;

//
//export default combineReducers({
//  projects,
//  loading,
//});
