import { useDispatch } from 'react-redux';
import styles from './MembersListItem.module.css';
import sprite from '../../icons/symbol-defs.svg';

const MembersListItem = ({ id, email }) => {
  const dispatch = useDispatch();

  return (
    <li className={styles.memberListItem}>
      <span className={styles.memberEmail}> {email}</span>
      <button
        type="button"
        className={styles.deleteBtn}
        // onClick={() => dispatch(removeContact(id))}
      >
        <svg className={styles.deleteIcon}>
          <use href={sprite + '#icon-delete-bin'}></use>
        </svg>
      </button>
    </li>
  );
};

export default MembersListItem;
