import styles from './MembersListItem.module.css';
import DeleteButton from '../../shared/deleteButton/DeleteButton';

const MembersListItem = ({ member, id }) => {
  return (
    <li className={styles.membersListItem} key={id}>
      <p className={styles.memberEmail}> {member}</p>
      <DeleteButton />
    </li>
  );
};

export default MembersListItem;
