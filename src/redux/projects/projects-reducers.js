import { createReducer } from '@reduxjs/toolkit';
import {
  createProjectSuccess,
  projectsSuccess,
  deleteProjectSuccess,
  editProjectTitleSuccess,
  addMemberSuccess,
} from './projects-actions';

const initialProjectsState = [];

const projects = createReducer(initialProjectsState, {
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

export default projects;

