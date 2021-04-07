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
  registerRequest,
  loginRequest,
  logoutRequest,
} from './auth-actions';

// const initialUserState = { email: null, password: null };

// const user = createReducer(initialUserState, {
//   [registerSuccess]: (_, { payload }) => payload.user,
//   [loginSuccess]: (_, { payload }) => payload,
//   [refreshSuccess]: (_, { payload }) => payload,
//   [logoutSuccess]: () => null,
//   [refreshError]: () => initialUserState,
// });

const token = createReducer(null, {
  [registerSuccess]: (_, { payload }) => payload,
  [loginSuccess]: (_, { payload }) => payload,
  [refreshSuccess]: (_, { payload }) => payload,
  [logoutSuccess]: () => null,
  [refreshError]: () => null,
});

const setError = (_, { payload }) => payload?.response?.data;
const clearError = () => null;

const error = createReducer(null, {
  [registerRequest]: clearError,
  [registerError]: setError,
  [loginRequest]: clearError,
  [loginError]: setError,
  [refreshError]: setError,
  [logoutRequest]: clearError,
  [logoutError]: setError,
  [refreshError]: setError,
});

export default combineReducers({
  token,
  error,
  // user,
});
