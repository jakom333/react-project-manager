import axios from 'axios';
import {
  fecthMembersError,
  fecthMembersSuccess,
  fecthMembersRequest,
  addMemberError,
  addMemberRequest,
  addMemberSuccess,
  deleteMemberError,
  deleteMemberSuccess,
  deleteMemberRequest,
  deleteMember,
} from './projectMembers-actions';

axios.defaults.baseURL = 'https://sbc-backend.goit.global';

const fecthMembers = () => async dispatch => {
  dispatch(fecthMembersRequest());
  try {
    const { data } = await axios.get('');
    console.log(data);
    dispatch(fecthMembersSuccess(data));
  } catch (error) {
    dispatch(fecthMembersError(error.message));
  }
};

const addMember = ({ email }) => async dispatch => {
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

const deleteMember = id => async dispatch => {
  dispatch(deleteMemberRequest());
  try {
    await axios.delete(``);
    dispatch(deleteMemberSuccess(id));
  } catch (error) {
    dispatch(deleteMemberError(error.message));
  }
};

export { fecthMembers, deleteMember, addMember };
