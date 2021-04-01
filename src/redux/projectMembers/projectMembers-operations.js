import axios from 'axios';
import {
  addMemberError,
  addMemberRequest,
  addMemberSuccess,
} from './projectMembers-actions';

axios.defaults.baseURL = 'https://sbc-backend.goit.global';

const addMember = ({ email }) => async dispatch => {
  const projectId = '60648ec4c94bd96215a20430';
  console.log(email, projectId);
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
