import axios from 'axios';
import { projectsSuccess } from './projects-actions';

const getProjects = () => async (dispatch, getState) => {
  try {
    const response = await axios.get(
      'https://sbc-backend.goit.global/project',
      {
        headers: { Authorization: getState().auth.token?.accessToken },
      },
    );
    // console.log(response.data);

    dispatch(projectsSuccess(response.data));
  } catch (error) {
    const response = await axios.post(
      'https://sbc-backend.goit.global/auth/refresh',
      {
        headers: { Authorization: getState().auth.token?.refreshToken },
        data: getState().auth.token?.sid,
      },
    );
    console.log(response);
  }
};

export { getProjects };
