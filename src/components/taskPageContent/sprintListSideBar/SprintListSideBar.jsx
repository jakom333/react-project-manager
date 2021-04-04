import React, { useState, useEffect } from 'react';
import RoundButton from '../../../shared/roundButton/RoundButton';
import sprite from '../../../icons/symbol-defs.svg';
import styles from './SprintListSideBar.module.css';
import MainModal from '../../../shared/mainModal/MainModal';
import СreateSprintForm from '../../createSprintForm/CreateSprintForm';
import { useSelector, useDispatch } from 'react-redux';
import { getSprintsSelector } from '../../../redux/sprints/sprints-selectors';
import { fetchSprints } from '../../../redux/sprints/sprints-operations';
import { useParams, Link, NavLink } from 'react-router-dom';
import ButtonShow from '../../../shared/buttonShow/ButtonShow';

// import { NavLink } from 'react-router-dom';

const SprintList = () => {
  const [showModal, setShowModal] = useState(false);
  const sprintsList = useSelector(getSprintsSelector);

  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSprints(params.projectId));
  }, [dispatch, params.projectId, params.history]);

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
          {sprintsList.map(({ title, _id }) => (
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
          ))}
        </ul>
      </div>
      <div className={styles.sideButtonBox}>
        <RoundButton onClick={() => setShowModal(true)} />

        <p>create sprint</p>
        <MainModal
          showModal={showModal}
          setShowModal={setShowModal}
          onClose={() => setShowModal(false)}
        >
          <СreateSprintForm />
        </MainModal>
      </div>
    </div>
  );
};

export default SprintList;
