import { createReducer } from '@reduxjs/toolkit';
import { createProjectSuccess, projectsSuccess, deleteProjectSuccess } from './projects-actions';

const initialProjectsState = [];

const projects = createReducer(initialProjectsState, {
  [projectsSuccess]: (_, { payload }) => payload,
  [createProjectSuccess]: (state, { payload }) => [...state, payload],
  [deleteProjectSuccess]: (state, { payload }) => {
    const id = state.findIndex(sprint => sprint.id === payload);

    return [...state.slice(0, id), ...state.slice(id + 1)];
  },
});


export default projects;


//
//export default combineReducers({
//  projects,
//  loading,
//});
