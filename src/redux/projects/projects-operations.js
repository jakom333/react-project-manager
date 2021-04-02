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
  projectsError,
  projectsRequest,
} from './projects-actions';

export const refreshTemplate = async (callback, error, dispatch) => {
  if (error.response.status >= 400 && error.response.status < 500) {
    try {
      await dispatch(refreshOperation());
      dispatch(callback());
    } catch (error) {
      token.unset();
    }
  }
};

const getProjects = () => async dispatch => {
  dispatch(projectsRequest());
  try {
    const response = await axios.get('https://sbc-backend.goit.global/project');

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
    refreshTemplate(() => deleteProject(projectId), error, dispatch);
  }
};

export { getProjects, createProject, deleteProject };
