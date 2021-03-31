import React, { useState } from 'react';
import styles from './SprintsHeader.module.css';
import sprite from '../../../icons/symbol-defs.svg';
import RoundButton from '../../../shared/roundButton/RoundButton';
import ButtonShow from '../../../shared/buttonShow/ButtonShow';
import MainModal from '../../../shared/mainModal/MainModal';
import AddMember from '../../addMember/AddMember';

const SprintsHeader = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className={styles.boxHead}>
      <div className={styles.boxBack}>
        <ButtonShow />
        <p className={styles.showProject}>Show projects</p>
      </div>
      <div className={styles.head}>
        <div className={styles.titleBox}>
          <div className={styles.title}>
            <h2 className={styles.pageTitle}>PROJECT NAME</h2>
            <button type="button" className={styles.buttonFix}>
              <svg className={styles.iconPencil}>
                <use href={sprite + '#icon-pencil'}></use>
              </svg>
            </button>
          </div>
          <div className={styles.buttonBox}>
            <RoundButton onClick={() => setShowModal(true)} />
            <p className={styles.pageText}>Create sprint</p>
          </div>
        </div>
      </div>
      <p className={styles.description}>Короткий опис проекту</p>
      <div className={styles.addPeopleBox}>
        <button
          onClick={() => setShowModal(true)}
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
          onClose={() => setShowModal(false)}
        >
          <AddMember />
        </MainModal>
      </div>
    </div>
  );
};

export default SprintsHeader;
