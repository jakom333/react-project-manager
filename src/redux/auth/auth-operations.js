import axios from 'axios';
import {
  registerRequest,
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
    await axios.post('/auth/register', user);
    dispatch(logIn(user));
  } catch (error) {
    dispatch(registerError(error?.message));
  }
};

const logIn = user => async dispatch => {
  dispatch(loginRequest());
  try {
    const response = await axios.post('/auth/login', user);
    token.set(response.data.accessToken);
    dispatch(
      loginSuccess({
        accessToken: token.get(),
        refreshToken: `Bearer ${response.data.refreshToken}`,
        sid: response.data.sid,
        email: response.data.data.email,
      }),
    );
  } catch (error) {
    dispatch(loginError(error?.message));
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
    dispatch(logoutError(error?.message));
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
    dispatch(refreshError(error?.message));

    throw new Error(error?.message);
  }
};
export { register, logIn, logOut, refreshOperation };
