import styles from './MembersListItem.module.css';

const MembersListItem = ({ id, email }) => {
  return (
    <li className={styles.memberListItem}>
      <span className={styles.memberEmail}> {email}</span>
      <button onClick={() => removeContact(id)} className={styles.btnRemove}>
        Delete
      </button>
    </li>
  );
};
