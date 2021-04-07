import React, { useEffect, useState } from 'react';
import styles from './TaskHeader.module.css';
import MainModal from '../../../shared/mainModal/MainModal';
import TaskForm from '../../taskForm/TaskForm';
import ChangeTitle from '../../titleEditor/TitleEditor';
import RoundButton from '../../../shared/roundButton/RoundButton';
import TaskFilter from '../taskFilter/TaskFilter';
import { useSelector } from 'react-redux';
import { getSprintsSelector } from '../../../redux/sprints/sprints-selectors';
import { useParams } from 'react-router-dom';
import { getCurrentDay } from '../../../redux/tasks/task-selectors';

export default function SprintHeader({ setTaskDate }) {
  const [showModal, setShowModal] = useState(false);
  const sprints = useSelector(getSprintsSelector);
  const { sprintId } = useParams();
  const startDate = sprints.find(item => item._id === sprintId)?.startDate;
  const duration = sprints.find(item => item._id === sprintId)?.duration;
  const endDate = sprints.find(item => item._id === sprintId)?.endDate;
  const _MS_PER_DAY = 1000 * 60 * 60 * 24;
  const [currentDay, setCurrentDay] = useState(Date.now());
  const [sprintDay, setSprintDay] = useState(0);
  const curDay = useSelector(getCurrentDay);

  useEffect(() => {
    const result = (Date.now() - Date.parse(startDate)) / _MS_PER_DAY;
    setSprintDay(Math.floor(result + 1));
  }, [startDate, _MS_PER_DAY, sprintId]);

  useEffect(() => {
    setCurrentDay(curDay);
  }, [sprintId, curDay]);

  useEffect(() => {
    setTaskDate(currentDay);
  }, [sprintDay, setTaskDate, currentDay]);

  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = showModal ? 'hidden' : 'auto';
  }, [showModal]);

  const onDecrement = () => {
    setCurrentDay(prev => prev - _MS_PER_DAY);
    setSprintDay(prev => prev - 1);
  };

  const onIncrement = () => {
    setCurrentDay(prev => prev + _MS_PER_DAY);
    setSprintDay(prev => prev + 1);
  };

  return (
    <div className={styles.headerWrapper}>
      <section className={styles.sprintHeader}>
        <div className={styles.controlAndSearchBlock}>
          <div className={styles.controlPanel}>
            {!!sprintDay && !!duration && Date.parse(startDate) <= currentDay && (
              <div className={styles.switch}>
                {new Date(startDate).getDate() !==
                new Date(currentDay).getDate() ? (
                  <button
                    type="button"
                    className={styles.leftArrow}
                    onClick={onDecrement}
                  >
                    &#5176;
                  </button>
                ) : (
                  <span className={styles.invisibleArrow}></span>
                )}

                <span className={styles.day}>{sprintDay}</span>
                <span className={styles.separator}>/</span>
                <span className={styles.totalDays}>{duration}</span>

                {new Date(endDate).getDate() !==
                new Date(currentDay).getDate() ? (
                  <button
                    type="button"
                    className={styles.rightArrow}
                    onClick={onIncrement}
                  >
                    &#5171;
                  </button>
                ) : (
                  <span className={styles.invisibleArrow}></span>
                )}
              </div>
            )}
            <span className={styles.date}>
              {new Date(currentDay)
                .toJSON()
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('.')}
            </span>
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
