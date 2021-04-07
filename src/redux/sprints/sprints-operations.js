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
  changeTitleRequest,
  changeTitleSuccess,
  changeTitleError,
} from './sprints-actions';

axios.defaults.baseURL = 'https://sbc-backend.goit.global';

const fetchSprints = projectId => async dispatch => {
  dispatch(fetchSprintsRequest());

  try {
    const { data } = await axios.get(`/sprint/${projectId}`);
    dispatch(fetchSprintsSucces(data.sprints ? data.sprints : []));
  } catch (error) {
    dispatch(fetchSprintsError(error?.message));
    refreshTemplate(() => fetchSprints(projectId), error, dispatch);
  }
};

const addSprint = (sprint, projectId) => async dispatch => {
  dispatch(addSprintRequest());
  try {
    const { data } = await axios.post(`/sprint/${projectId}`, sprint);
    dispatch(addSprintSucces({ ...data, _id: data.id }));
  } catch (error) {
    dispatch(addSprintError(error?.message));
    refreshTemplate(() => addSprint(sprint, projectId), error, dispatch);
  }
};

const deleteSprint = sprintId => async dispatch => {
  dispatch(deleteSprintRequest());

  try {
    axios.delete(`/sprint/${sprintId}`);

    dispatch(deleteSprintSucces(sprintId));
  } catch (error) {
    dispatch(deleteSprintError(error?.message));
    refreshTemplate(() => deleteSprint(sprintId), error, dispatch);
  }
};

const editTitle = (sprintId, title) => async dispatch => {
  dispatch(changeTitleRequest());

  try {
    await axios.patch(`/sprint/title/${sprintId}`, { title });
    dispatch(changeTitleSuccess({ sprintId, title }));
  } catch (error) {
    dispatch(changeTitleError(error?.message));
    refreshTemplate(() => editTitle(sprintId, title), error, dispatch);
  }
};

export { addSprint, deleteSprint, fetchSprints, editTitle };
