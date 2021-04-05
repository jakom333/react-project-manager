import axios from 'axios';
import { projectsSuccess } from '../projects/projects-actions';
import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  refreshRequest,
  refreshSuccess,
  refreshError,
} from './auth-actions';

axios.defaults.baseURL = 'https://sbc-backend.goit.global';

export const token = {
  token: '',

  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.token = `Bearer ${token}`;
  },
  get() {
    return this.token;
  },
  refresh(refreshToken) {
    this.token = refreshToken;
    axios.defaults.headers.common.Authorization = refreshToken;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
    this.token = '';
  },
};

const register = user => async dispatch => {
  dispatch(registerRequest());
  try {
    const response = await axios.post('/auth/register', user);
    // console.log(response);
    token.set(response.data.accessToken);

    dispatch(
      registerSuccess({
        accessToken: token.get(),
        refreshToken: `Bearer ${response.data.refreshToken}`,
        sid: response.data.sid,
      }),
    );
  } catch (error) {
    dispatch(registerError(error.message));
  }
};

const logIn = user => async dispatch => {
  dispatch(loginRequest());
  try {
    const response = await axios.post('/auth/login', user);
    // console.log(response)
    token.set(response.data.accessToken);
    dispatch(
      loginSuccess({
        accessToken: token.get(),
        refreshToken: `Bearer ${response.data.refreshToken}`,
        sid: response.data.sid,
        email: response.data.data.email,
      }),
    );
    const responseProjects = await axios.get('/project', {
      headers: { Authorization: token.get() },
    });

    dispatch(projectsSuccess(responseProjects.data));
  } catch (error) {
    dispatch(loginError(error.message));
  }
};

const logOut = () => async dispatch => {
  dispatch(logoutRequest());
  try {
    await axios.post('/auth/logout');
    token.unset();
    dispatch(logoutSuccess());
    window.location.reload();
  } catch (error) {
    dispatch(logoutError(error.message));
  }
};

const refreshOperation = () => async (dispatch, getState) => {
  const { refreshToken, sid } = getState().auth.token;
  token.refresh(refreshToken);
  dispatch(refreshRequest());

  try {
    const response = await axios.post('auth/refresh', { sid: sid });

    dispatch(
      refreshSuccess({
        accessToken: `Bearer ${response.data.newAccessToken}`,
        refreshToken: `Bearer ${response.data.newRefreshToken}`,
        sid: response.data.newSid,
      }),
    );
  } catch (error) {
    dispatch(refreshError(error.message));

    throw new Error(error.message);
  }
};
export { register, logIn, logOut, refreshOperation };
