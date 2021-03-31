import React from 'react';
import styles from './TaskHeader.module.css';

import ChangeTitle from '../../titleEditor/TitleEditor';
import style from '../sprintList/SprintList.module.css';
import RoundButton from '../../../shared/roundButton/RoundButton';
import sprite from '../../../icons/symbol-defs.svg';
// import moment from 'moment';

export default function SprintHeader() {
  return (
    <div className={styles.headerWrapper}>
      <section className={styles.sprintHeader}>
        <div className={styles.controlAndSearchBlock}>
          <div className={styles.controlPanel}>
            <div className={styles.switch}>
              <div className={styles.leftArrow}>&#5176;</div>
              <span className={styles.day}>1</span>
              <span className={styles.separator}>/</span>
              <span className={styles.totalDays}>28</span>
              <div className={styles.rightArrow}>&#5171;</div>
            </div>
            <span className={styles.date}>30.03.2021</span>
          </div>
        </div>
        <div className={styles.control}>
          <ChangeTitle />
          <div className={style.buttonBox}>
            <RoundButton />
            <p className={style.pageText}>Create sprint</p>
          </div>
        </div>

        <div className={styles.tasksHeader}>
          <p className={styles.tasksHeaderText}>Task</p>
          <p className={styles.tasksHeaderText}>
            Scheduled <br />
            hours
          </p>
          <p className={styles.tasksHeaderText}>
            Hours spent / <br /> per day{' '}
          </p>
          <p className={styles.tasksHeaderText}>Hours spent</p>
          <button>
            <svg className={styles.iconSearch}>
              <use href={sprite + '#icon-search'}></use>
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
}
