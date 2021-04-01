import styles from './MembersListItem.module.css';
import DeleteButton from '../../shared/deleteButton/DeleteButton';

const MembersListItem = ({ member }) => {
  return (
    <li className={styles.memberListItem}>
      <span className={styles.memberEmail}> {member}</span>
      <DeleteButton />
    </li>
  );
};

export default MembersListItem;
