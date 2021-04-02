import axios from 'axios';
import { refreshError } from '../auth/auth-actions';
import { refreshOperation, token } from '../auth/auth-operations';
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
  } catch (error) {}
};

const createProject = project => async dispatch => {
  token.set('')
  dispatch(createProjectRequest());

  try {
    const { data } = await axios.post(
      'https://sbc-backend.goit.global/project',
      project,
    );
    console.log(data);
    dispatch(createProjectSuccess({ ...data, _id: data.id }));
  } catch (error) {
    dispatch(createProjectError(error.message));
    if (error.response.status === 401 || error.response.status === 404) {
      try {
        await dispatch(refreshOperation());
        await dispatch(createProject(project));
      } catch (error) {
        token.unset();
        // dispatch(refreshError(error.message))
      }
    }
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
