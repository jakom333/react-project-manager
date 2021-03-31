import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  registerSuccess,
  registerError,
  loginSuccess,
  loginError,
  //   logoutSuccess,
  //   logoutError,
} from './auth-actions';
import { projectsSuccess } from '../projects/projects-actions';

const initialUserState = { email: null, password: null };

const user = createReducer(initialUserState, {
  [registerSuccess]: (_, { payload }) => payload.user,
  [loginSuccess]: (_, { payload }) => payload.user,
});

const token = createReducer(null, {
  [registerSuccess]: (_, { payload }) => payload,
  [loginSuccess]: (_, { payload }) => payload,
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [registerError]: setError,
  [loginError]: setError,
});

const isAuthenticated = createReducer(false, {
  [projectsSuccess]: () => true,
  [registerSuccess]: () => true,
  [loginSuccess]: () => true,

  [registerError]: () => false,
  [loginError]: () => false,
});

export default combineReducers({
  user,
  isAuthenticated,
  token,
  error,
});
