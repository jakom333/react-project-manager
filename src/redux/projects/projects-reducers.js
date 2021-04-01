import { createReducer } from '@reduxjs/toolkit';
import { createProjectSuccess, projectsSuccess } from './projects-actions';

const initialProjectsState = [];

const projects = createReducer(initialProjectsState, {
  [projectsSuccess]: (_, { payload }) => payload,
  [createProjectSuccess]: (state, { payload }) => [...state, payload],
});

export default projects;
