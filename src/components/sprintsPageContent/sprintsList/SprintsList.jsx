import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './SprintsList.module.css';
import SprintsListItem from './sprintsListItem/SprintsListItem';
import {
  getSprintsSelector,
  loaderSelector,
} from '../../../redux/sprints/sprints-selectors';
import { fetchSprints } from '../../../redux/sprints/sprints-operations';
import { useParams, useHistory } from 'react-router-dom';
import Loader from '../../loader/Loader';

const SprintsList = () => {
  const params = useParams();
  const sprints = useSelector(getSprintsSelector);
  const isLoading = useSelector(loaderSelector);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const getResult = async () => {
      await dispatch(fetchSprints(params.projectId));
    };
    getResult();
  }, [dispatch, params.projectId, history]);

  useEffect(() => {}, []);

  return (
    <div>
      <div>
        <ul className={styles.sprintList}>
          {isLoading ? (
            <Loader />
          ) : sprints.length ? (
            sprints.map((item, idx) => (
              <SprintsListItem item={item} key={idx} />
            ))
          ) : (
            !isLoading && (
              <h2 className={styles.emptyMessage}>
                Your sprint collection is empty, use the "Create sprint" button.
              </h2>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default SprintsList;
