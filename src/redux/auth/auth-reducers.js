import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  registerSuccess,
  registerError,
  loginSuccess,
  loginError,
  logoutSuccess,
  logoutError,
  refreshSuccess,
  refreshError,
} from './auth-actions';

const initialUserState = { email: null, password: null };

const user = createReducer(initialUserState, {
  [registerSuccess]: (_, { payload }) => payload.user,
  [loginSuccess]: (_, { payload }) => payload,
  [logoutSuccess]: () => initialUserState,
  [refreshError]: () => initialUserState,
});

const token = createReducer(null, {
  [registerSuccess]: (_, { payload }) => payload,
  [loginSuccess]: (_, { payload }) => payload,
  [refreshSuccess]: (_, { payload }) => payload,
  [logoutSuccess]: () => null,
  [refreshError]: () => null,
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [registerError]: setError,
  [loginError]: setError,
  [logoutError]: setError,
  [refreshError]: setError,
});

export default combineReducers({
  user,
  token,
  error,
});
