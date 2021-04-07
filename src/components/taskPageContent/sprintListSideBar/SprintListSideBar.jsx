import React, { useState, useEffect } from 'react';
import RoundButton from '../../../shared/roundButton/RoundButton';
import styles from './SprintListSideBar.module.css';
import MainModal from '../../../shared/mainModal/MainModal';
import СreateSprintForm from '../../createSprintForm/CreateSprintForm';
import { useSelector, useDispatch } from 'react-redux';
import {
  getSprintsSelector,
  loaderSelector,
} from '../../../redux/sprints/sprints-selectors';
import { fetchSprints } from '../../../redux/sprints/sprints-operations';
import { useParams, Link, NavLink } from 'react-router-dom';
import ButtonShow from '../../../shared/buttonShow/ButtonShow';
import Loader from '../../loader/Loader';

const SprintList = () => {
  const [showModal, setShowModal] = useState(false);
  const sprintsList = useSelector(getSprintsSelector);
  const isLoading = useSelector(loaderSelector);

  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSprints(params.projectId));
  }, [dispatch, params.projectId, params.history]);

  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = showModal ? 'hidden' : 'auto';
  }, [showModal]);

  return (
    <div className={styles.sprintsContainer}>
      <Link
        className={styles.sprintsButtonBackContainer}
        to={`/projects/${params.projectId}`}
      >
        <ButtonShow />
        <p className={styles.showProject}>Show sprints</p>
      </Link>

      <div className={styles.leftPanelSprintsContainer}>
        <ul className={styles.sprintsList}>
          {isLoading ? (
            <Loader />
          ) : (
            sprintsList.map(({ title, _id }) => (
              <li key={_id}>
                <NavLink
                  className={styles.item}
                  activeClassName={styles.activeItem}
                  to={`${_id}`}
                >
                  <div className={styles.sprintIcon}></div>
                  <p>{title}</p>
                </NavLink>
              </li>
            ))
          )}
        </ul>
      </div>
      <div className={styles.sideButtonBox}>
        <RoundButton onClick={() => setShowModal(true)} />

        <p className={styles.buttonTag}>Create sprint</p>
        <MainModal
          showModal={showModal}
          setShowModal={setShowModal}
          onClose={() => setShowModal(false)}
        >
          <СreateSprintForm onClose={() => setShowModal(false)} />
        </MainModal>
      </div>
    </div>
  );
};

export default SprintList;
