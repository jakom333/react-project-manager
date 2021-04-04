import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './SprintsList.module.css';
import SprintsListItem from './sprintsListItem/SprintsListItem';
import { getSprintsSelector } from '../../../redux/sprints/sprints-selectors';
import { fetchSprints } from '../../../redux/sprints/sprints-operations';
import { useParams, useHistory } from 'react-router-dom';

const SprintsList = () => {
  const params = useParams();
  const sprints = useSelector(getSprintsSelector);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const getResult = async () => {
      await dispatch(fetchSprints(params.projectId));
    };
    getResult();
  }, [dispatch, params.projectId, history]);

  return (
    <div>
      <div>
        <ul className={styles.sprintList}>
          {sprints.map((item, idx) => (
            <SprintsListItem item={item} key={idx} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SprintsList;
