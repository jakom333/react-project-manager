import axios from 'axios';
import {
  projectsRequest,
  projectsSuccess,
  projectsError,
  addProjectError,
  addProjectRequest,
  addProjectSuccess,
  deleteProjectError,
  deleteProjectRequest,
  deleteProjectSuccess,
} from './projects-actions';

axios.defaults.baseURL = 'https://sbc-backend.goit.global';

const getProjects = () => async (dispatch, getState) => {
  try {
    const response = await axios.get('/project',
      {
        headers: { Authorization: getState().auth.token?.accessToken },
      },
    );
    // console.log(response.data);

    dispatch(projectsSuccess(response.data));
  } catch (error) {
    const response = await axios.post('/auth/refresh',
      {
        headers: { Authorization: getState().auth.token?.refreshToken },
        data: getState().auth.token?.sid,
      },
    );
    console.log(response);
  }
};


const addProject = (title, description) => async dispatch => {
  const items = {
    title,
    description,
  };

  dispatch(addProjectRequest());

  try {
    const { data } = await axios.post(`/project`, items);
    dispatch(addProjectSuccess(data));
  } catch (error) {
    dispatch(addProjectError(error.message));
  }
};

const deleteProject = (projectId) => async dispatch => {
  dispatch(deleteProjectRequest());

  try {
    axios.delete(`/project`);

    dispatch(deleteProjectSuccess(projectId));
  } catch (error) {
    dispatch(deleteProjectError(error.message));
  }
};

export { addProject, getProjects, deleteProject };
