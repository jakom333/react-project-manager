import axios from 'axios';
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
  } catch (error) {
    const response = await axios.post(
      '/auth/refresh',
      { sid: getState().auth.token?.sid },
      {
        headers: { Authorization: getState().auth.token?.refreshToken },
      },
    );
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
    dispatch(createProjectSuccess({ ...data, _id: data.id }));
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
