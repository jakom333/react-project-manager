import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
import styles from './TaskHeader.module.css';
import MainModal from '../../../shared/mainModal/MainModal';
import TaskForm from '../../taskForm/TaskForm';
import ChangeTitle from '../../titleEditor/TitleEditor';
import RoundButton from '../../../shared/roundButton/RoundButton';
import TaskFilter from '../taskFilter/TaskFilter';
import moment from 'moment';

export default function SprintHeader({ dateArr }) {
  const [showModal, setShowModal] = useState(false);

  const sprintEndDay = dateArr.length;
  const today = moment(new Date()).format('MMM Do');
  const todayIs = moment(new Date()).format('DD.MM.YYYY');
  function currentDay(today, dateArr) {
    const dayOf = dateArr.indexOf(today);
    if (dayOf === -1) {
      return 1;
    } else {
      return dayOf + 1;
    }
  }
  const dayOf = currentDay(today, dateArr);

  return (
    <div className={styles.headerWrapper}>
      <section className={styles.sprintHeader}>
        <div className={styles.controlAndSearchBlock}>
          <div className={styles.controlPanel}>
            <div className={styles.switch}>
              <div className={styles.leftArrow}>&#5176;</div>
              <span className={styles.day}>{dayOf}</span>
              <span className={styles.separator}>/</span>
              <span className={styles.totalDays}>{sprintEndDay}</span>
              <div className={styles.rightArrow}>&#5171;</div>
            </div>
            <span className={styles.date}>{todayIs}</span>
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
