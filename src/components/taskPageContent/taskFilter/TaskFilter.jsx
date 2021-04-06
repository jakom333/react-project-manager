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
    <div className={styles.search}>
      <label className={styles.searchCointainer}>
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={handleChange}
          className={styles.searchInputActive}
        />
        <span className={styles.searchBtn}>
          <svg className={styles.iconSearch}>
            <use href={sprite + '#icon-search'}></use>
          </svg>
        </span>
      </label>
    </div>
  );
};

export default TaskFilter;
