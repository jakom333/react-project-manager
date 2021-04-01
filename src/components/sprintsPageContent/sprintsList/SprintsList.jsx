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
  }, [dispatch]);
  return (
    <div>
      <div>
        <ul className={styles.sprintList}>
          {sprints.map(({ title, _id }) => (
            <SprintsListItem key={_id} title={title} id={_id} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SprintsList;
