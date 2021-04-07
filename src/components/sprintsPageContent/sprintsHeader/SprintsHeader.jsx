import React, { useEffect, useState } from 'react';
import styles from './SprintsHeader.module.css';
import sprite from '../../../icons/symbol-defs.svg';
import RoundButton from '../../../shared/roundButton/RoundButton';
import ButtonShow from '../../../shared/buttonShow/ButtonShow';
import MainModal from '../../../shared/mainModal/MainModal';
import AddMember from '../../addMember/AddMember';
import CreateSprintForm from '../../createSprintForm/CreateSprintForm';
import EditTitle from '../editTitle/EditTitle';
import { NavLink } from 'react-router-dom';

const SprintsHeader = () => {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = showModal ? 'hidden' : 'auto';
  }, [showModal]);
  return (
    <>
      <div className={styles.boxBack}>
        <NavLink to="/projects" className={styles.boxBackLink}>
          <ButtonShow />
          <p className={styles.showProject}>Show projects</p>
        </NavLink>
      </div>
      <div className={styles.boxHead}>
        <div className={styles.head}>
          <div className={styles.titleBox}>
            <div className={styles.title}>
              <EditTitle />
            </div>
            <div className={styles.buttonBox}>
              <RoundButton onClick={() => setShowModal('createSprint')} />
              <p className={styles.pageText}>Create sprint</p>
            </div>
          </div>
        </div>
        <div className={styles.addPeopleBox}>
          <button
            onClick={() => setShowModal('addPeople')}
            type="button"
            className={styles.buttonAddPeople}
          >
            <svg className={styles.iconAddPeople}>
              <use href={sprite + '#icon-add-group'}></use>
            </svg>
            <p className={styles.addPeopleText}>Add people</p>
          </button>
          <MainModal
            showModal={showModal}
            setShowModal={setShowModal}
            onClose={() => setShowModal('')}
          >
            {showModal === 'addPeople' && (
              <AddMember onClose={() => setShowModal('')} />
            )}
            {showModal === 'createSprint' && (
              <CreateSprintForm onClose={() => setShowModal('')} />
            )}
          </MainModal>
        </div>
      </div>
    </>
  );
};

export default SprintsHeader;
