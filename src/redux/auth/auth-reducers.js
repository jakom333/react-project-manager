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

const initialUserState = { email: null, password: null };

const user = createReducer(initialUserState, {
  [registerSuccess]: (_, { payload }) => payload.user,
  [loginSuccess]: (_, { payload }) => payload.user,
});

const token = createReducer(null, {
  [registerSuccess]: (_, { payload }) => payload.token,
  [loginSuccess]: (_, { payload }) => payload.token,
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [registerError]: setError,
  [loginError]: setError,
});

const isLoggedIn = createReducer(false, {
  [registerSuccess]: () => true,
  [loginSuccess]: () => true,

  [registerError]: () => false,
  [loginError]: () => false,
});

export default combineReducers({
  user,
  isLoggedIn,
  token,
  error,
});
