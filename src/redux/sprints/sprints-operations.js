import axios from 'axios';
import { refreshTemplate } from '../projects/projects-operations';
import {
  addSprintRequest,
  addSprintSucces,
  addSprintError,
  deleteSprintRequest,
  deleteSprintSucces,
  deleteSprintError,
  fetchSprintsRequest,
  fetchSprintsSucces,
  fetchSprintsError,
} from './sprints-actions';

// process.env.REACT_APP_BASE_URL;
axios.defaults.baseURL = 'https://sbc-backend.goit.global';

const fetchSprints = projectId => async dispatch => {
  dispatch(fetchSprintsRequest());

  try {
    const { data } = await axios.get(`/sprint/${projectId}`);
    dispatch(fetchSprintsSucces(data.sprints ? data.sprints : []));
  } catch (error) {
    dispatch(fetchSprintsError(error.message));
    refreshTemplate(() => fetchSprints(projectId), error, dispatch);
  }
};

const addSprint = (sprint, projectId) => async dispatch => {
  dispatch(addSprintRequest());
  try {
    const { data } = await axios.post(`/sprint/${projectId}`, sprint);
    dispatch(addSprintSucces({ ...data, _id: data.id }));
  } catch (error) {
    dispatch(addSprintError(error.message));
    refreshTemplate(() => addSprint(sprint, projectId), error, dispatch);
  }
};

const deleteSprint = sprindId => async dispatch => {
  dispatch(deleteSprintRequest());

  try {
    axios.delete(`/sprint/${sprindId}`);

    dispatch(deleteSprintSucces(sprindId));
  } catch (error) {
    dispatch(deleteSprintError(error.message));
    refreshTemplate(() => deleteSprint(sprindId), error, dispatch);
  }
};

export { addSprint, deleteSprint, fetchSprints };
