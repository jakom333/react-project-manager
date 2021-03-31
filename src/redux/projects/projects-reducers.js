import { createReducer } from '@reduxjs/toolkit';
import { projectsSuccess } from './projects-actions';

const initialProjectsState = [];

const projects = createReducer(initialProjectsState, {
  [projectsSuccess]: (_, { payload }) => payload,
});

export default projects;
