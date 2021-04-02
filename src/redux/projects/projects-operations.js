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
  projectsRequest,
  addMemberError,
  addMemberRequest,
  addMemberSuccess,
} from './projects-actions';

axios.defaults.baseURL = 'https://sbc-backend.goit.global';
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
    const response = await axios.get('/project');

    dispatch(projectsSuccess(response.data));
  } catch (error) {}
};

const createProject = project => async dispatch => {
  token.set('');
  dispatch(createProjectRequest());

  try {
    const { data } = await axios.post('/project', project);
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

const addMember = (email, projectId) => async dispatch => {
  dispatch(addMemberRequest());
  try {
    const { data } = await axios.patch(
      `/project/contributor/${projectId}`,
      email,
    );
    console.log(data);
    dispatch(
      addMemberSuccess({
        members: data.newMembers,
        projectId,
      }),
    );
  } catch (error) {
    dispatch(addMemberError(error.message));
  }
};

export { getProjects, createProject, deleteProject, addMember };
