import axios from 'axios';
import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,

  //   logoutRequest,
  //   logoutSuccess,
  //   logoutError,
} from './auth-actions';

axios.defaults.baseURL = 'https://sbc-backend.goit.global';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = user => async dispatch => {
  dispatch(registerRequest());
  try {
    const response = await axios.post('/auth/register', user);

    token.set(response.data.token);

    dispatch(registerSuccess(response.data));
  } catch (error) {
    dispatch(registerError(error.message));
  }
};

const logIn = user => async dispatch => {
  dispatch(loginRequest());
  try {
    const response = await axios.post('/auth/login', user);

    token.set(response.data.token);

    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginError(error.message));
  }
};

export { register, logIn };
