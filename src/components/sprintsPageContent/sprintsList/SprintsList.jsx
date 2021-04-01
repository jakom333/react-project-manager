import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './SprintsList.module.css';
import SprintsListItem from './sprintsListItem/SprintsListItem';
import { getSprintsSelector } from '../../../redux/sprints/sprints-selectors';
import { fetchSprints } from '../../../redux/sprints/sprints-operations';
import { useParams } from 'react-router-dom';

const SprintsList = () => {
  const params = useParams();
  const sprints = useSelector(getSprintsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSprints(params.projectId));
  }, [dispatch, params.projectId]);
  return (
    <div>
      <div>
        <ul className={styles.sprintList}>
          {sprints.map(item => (
            <SprintsListItem key={item._id} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SprintsList;
