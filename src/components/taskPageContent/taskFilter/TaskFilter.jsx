import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../../redux/tasks/task-actions';
import { getFilter } from '../../../redux/tasks/task-selectors';
import styles from './TaskFilter.module.css';
import sprite from '../../../icons/symbol-defs.svg';

const TaskFilter = ({ handleChange }) => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  handleChange = event => {
    event.preventDefault();
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={handleChange}
        className={styles.searchInputActive}
      />
      <button type="submit" className={styles.searchBtn}>
        <svg className={styles.iconSearch}>
          <use href={sprite + '#icon-search'}></use>
        </svg>
      </button>
    </div>
  );
};

export default TaskFilter;
