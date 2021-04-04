import React, { useState } from 'react';
import styles from './TaskHeader.module.css';
import MainModal from '../../../shared/mainModal/MainModal';
import TaskForm from '../../taskForm/TaskForm';
import ChangeTitle from '../../titleEditor/TitleEditor';
// import style from '../sprintList/SprintList.module.css';
import RoundButton from '../../../shared/roundButton/RoundButton';
import TaskFilter from '../taskFilter/TaskFilter';
import { useSelector } from 'react-redux';
import { getSprintsSelector } from '../../../redux/sprints/sprints-selectors';
import { useParams } from 'react-router';

export default function SprintHeader() {
  const [showModal, setShowModal] = useState(false);
  const today = new Date().toJSON().slice(0, 10).split('-').reverse().join('.'); //today
  const sprints = useSelector(getSprintsSelector);
  console.log(sprints);
  const { sprintId } = useParams();
  console.log(sprintId);
  const startDate = sprints.find(item => item._id === sprintId).startDate;
  // console.log(startDate);

  const todayReverse = today.split('.').reverse().join('-');
  // console.log(todayReverse);

  const _MS_PER_DAY = 1000 * 60 * 60 * 24;
  // a and b are javascript Date objects
  function dateDiffInDays(a, b) {
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
  }
  // test it
  const a = new Date(todayReverse), //today
    b = new Date(startDate), // startDate
    difference = dateDiffInDays(a, b);
  const positiveDifference = Math.abs(difference);

  console.log(difference);

  return (
    <div className={styles.headerWrapper}>
      <section className={styles.sprintHeader}>
        <div className={styles.controlAndSearchBlock}>
          <div className={styles.controlPanel}>
            <div className={styles.switch}>
              <div className={styles.leftArrow}>&#5176;</div>
              <span className={styles.day}>{positiveDifference}</span>
              <span className={styles.separator}>/</span>
              <span className={styles.totalDays}>4</span>
              <div className={styles.rightArrow}>&#5171;</div>
            </div>
            <span className={styles.date}>{today}</span>
          </div>
        </div>
        <div className={styles.control}>
          <ChangeTitle />
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
