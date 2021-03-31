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
} from './phonebook-actions';

axios.defaults.baseURL = 'https://sbc-backend.goit.global';

const fetchSprints = projectId => async dispatch => {
  dispatch(fetchSprintsRequest());

  try {
    const { data } = await axios.get(`/sprint/${projectId}`);
    dispatch(fetchSprintsSucces(data));
  } catch (error) {
    dispatch(fetchSprintsError(error.message));
  }
};

const addSprint = (data, endDate, duration, projectId) => async dispatch => {
  const items = {
    data,
    endDate,
    duration,
  };

  dispatch(addSprintRequest());

  try {
    const { data } = await axios.post(`/sprint/${projectId}`, items);
    dispatch(addSprintSucces(data));
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