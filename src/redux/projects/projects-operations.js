import axios from 'axios';
import { refreshOperation, token } from '../auth/auth-operations';
import {
  createProjectError,
  createProjectRequest,
  createProjectSuccess,
  projectsSuccess,
  deleteProjectRequest,
  deleteProjectSuccess,
  deleteProjectError,
  editProjectTitleRequest,
  editProjectTitleSuccess,
  editProjectTitleError,
  projectsRequest,
  addMemberError,
  addMemberRequest,
  addMemberSuccess,
  projectsError,
} from './projects-actions';

export const refreshTemplate = async (callback, error, dispatch) => {
  if (error.response?.status === 401 || error.response?.status === 404) {
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

    dispatch(
      projectsSuccess(
        response.data.constructor.name === 'Array' ? response.data : [],
      ),
    );
  } catch (error) {
    dispatch(projectsError(error?.message));
    refreshTemplate(getProjects, error, dispatch);
  }
};

const createProject = project => async dispatch => {
  dispatch(createProjectRequest());

  try {
    const { data } = await axios.post(
      'https://sbc-backend.goit.global/project',
      project,
    );
    dispatch(createProjectSuccess({ ...data, _id: data.id }));
  } catch (error) {
    dispatch(createProjectError(error?.message));
    refreshTemplate(() => createProject(project), error, dispatch);
  }
};

const deleteProject = projectId => async dispatch => {
  const newID = projectId;
  dispatch(deleteProjectRequest());

  try {
    axios.delete(`https://sbc-backend.goit.global/project/${newID}`);

    dispatch(deleteProjectSuccess(newID));
  } catch (error) {
    dispatch(deleteProjectError(error?.message));
    refreshTemplate(() => deleteProject(projectId), error, dispatch);
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
    dispatch(
      addMemberSuccess({
        members: data.newMembers,
        projectId,
      }),
    );
  } catch (error) {
    dispatch(addMemberError(error?.message));
    refreshTemplate(() => addMember(email, projectId), error, dispatch);
  }
};

const editTitle = (projectId, title) => async dispatch => {
  dispatch(editProjectTitleRequest());

  try {
    await axios.patch(`/project/title/${projectId}`, { title });
    dispatch(editProjectTitleSuccess({ projectId, title }));
  } catch (error) {
    dispatch(editProjectTitleError(error?.message));
    refreshTemplate(() => editTitle(projectId, title), error, dispatch);
  }
};

export { getProjects, createProject, deleteProject, editTitle, addMember };
