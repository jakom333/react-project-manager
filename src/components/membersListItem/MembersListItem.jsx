import styles from './MembersListItem.module.css';
import DeleteButton from '../../shared/deleteButton/DeleteButton';
import { addMember } from '../../redux/projectMembers/projectMembers-operations';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

addMember;

const MembersListItem = ({ member, id }) => {
  const dispatch = useDispatch();
  const { projectId } = useParams();

  return (
    <li className={styles.membersListItem} key={id}>
      <p className={styles.memberEmail}> {member}</p>
      <DeleteButton />
      {/* onClick= dispatch(addMember(values, projectId)); */}
    </li>
  );
};

export default MembersListItem;
