import axios from 'axios';
import {
  createProjectError,
  createProjectRequest,
  createProjectSuccess,
  projectsSuccess,
  deleteProjectRequest,
  deleteProjectSuccess,
  deleteProjectError,
} from './projects-actions';

const getProjects = () => async (dispatch, getState) => {
  try {
    const response = await axios.get(
      'https://sbc-backend.goit.global/project',
      // {
      //   headers: { Authorization: getState().auth.token?.accessToken },
      // },
    );

    dispatch(projectsSuccess(response.data));
  } catch (error) {
    const response = await axios.post('/auth/refresh', {
      headers: { Authorization: getState().auth.token?.refreshToken },
      data: getState().auth.token?.sid,
    });
    console.log(response);
  }
};

const createProject = project => async dispatch => {
  dispatch(createProjectRequest());

  try {
    const { data } = await axios.post(
      'https://sbc-backend.goit.global/project',
      project,
    );
    console.log(data);
    dispatch(createProjectSuccess(data));
  } catch (error) {
    dispatch(createProjectError(error));
  }
};

const deleteProject = projectId => async dispatch => {
  const newID = projectId;
  dispatch(deleteProjectRequest());

  try {
    axios.delete(`/project/${newID}`);

    dispatch(deleteProjectSuccess(newID));
  } catch (error) {
    dispatch(deleteProjectError(error.message));
  }
};

export { getProjects, createProject, deleteProject };
