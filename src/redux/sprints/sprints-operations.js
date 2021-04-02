import axios from 'axios';
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
  }
};

const addSprint = (sprint, projectId) => async dispatch => {
  dispatch(addSprintRequest());
  try {
    const { data } = await axios.post(`/sprint/${projectId}`, sprint);
    console.log(data, ' data');
    dispatch(addSprintSucces({ ...data, _id: data.id }));
  } catch (error) {
    dispatch(addSprintError(error.message));
  }
};

const deleteSprint = sprindId => async dispatch => {
  dispatch(deleteSprintRequest());

  try {
    axios.delete(`/sprint/${sprindId}`);

    dispatch(deleteSprintSucces(sprindId));
  } catch (error) {
    dispatch(deleteSprintError(error.message));
  }
};

export { addSprint, deleteSprint, fetchSprints };
