import axios from 'axios';
import {
  addMemberError,
  addMemberRequest,
  addMemberSuccess,
} from './projectMembers-actions';

axios.defaults.baseURL = 'https://sbc-backend.goit.global';

const addMember = ({ email }, projectId) => async dispatch => {
  dispatch(addMemberRequest());
  try {
    const { data } = await axios.post(
      `/project/contributor/${projectId}`,
      email,
    );
    console.log(data);
    dispatch(addMemberSuccess(data));
  } catch (error) {
    dispatch(addMemberError(error.message));
  }
};

export { addMember };
