import sprite from '../../icons/symbol-defs.svg';
import styles from './DeleteButton.module.css';

const DeleteButton = () => {
  return (
    <button type="button" className={styles.deleteBtn}>
      <svg className={styles.deleteIcon}>
        <use href={sprite + '#icon-delete-bin'}></use>
      </svg>
    </button>
  );
};

export default DeleteButton;
