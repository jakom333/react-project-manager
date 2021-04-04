import React, { useState } from 'react';
import styles from './TaskHeader.module.css';
import MainModal from '../../../shared/mainModal/MainModal';
import TaskForm from '../../taskForm/TaskForm';
import ChangeTitle from '../../titleEditor/TitleEditor';
import RoundButton from '../../../shared/roundButton/RoundButton';
import TaskFilter from '../taskFilter/TaskFilter';
// import moment from 'moment';

export default function SprintHeader() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.headerWrapper}>
      <section className={styles.sprintHeader}>
        <div className={styles.controlAndSearchBlock}>
          <div className={styles.controlPanel}>
            <div className={styles.switch}>
              <div className={styles.leftArrow}>&#5176;</div>
              <span className={styles.day}>1</span>
              <span className={styles.separator}>/</span>
              <span className={styles.totalDays}>22</span>
              <div className={styles.rightArrow}>&#5171;</div>
            </div>
            <span className={styles.date}>02.04.2021</span>
          </div>
        </div>
        <div className={styles.control}>
          <div className={styles.baseWrapper}>
            <ChangeTitle />
          </div>
          <div className={styles.buttonBox}>
            <RoundButton onClick={() => setShowModal(true)} />
            <p className={styles.buttonDescription}>Create task</p>
          </div>
        </div>

        <div className={styles.tasksHeader}>
          <p className={styles.tasksHeaderText}>Task</p>
          <p className={styles.tasksHeaderText}>
            Scheduled <br />
            hours
          </p>
          <p className={styles.tasksHeaderText}>Hours spent / per day </p>
          <p className={styles.tasksHeaderText}>Hours spent</p>

          <TaskFilter />
        </div>
      </section>
      <MainModal
        showModal={showModal}
        setShowModal={setShowModal}
        onClose={() => setShowModal(false)}
      >
        <TaskForm onClose={() => setShowModal('')} />
      </MainModal>
    </div>
  );
}
