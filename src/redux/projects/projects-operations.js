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
  addMemberError,
  addMemberRequest,
  addMemberSuccess,
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

axios.defaults.baseURL = 'https://sbc-backend.goit.global';

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
