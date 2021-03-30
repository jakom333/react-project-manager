import React from 'react';
//import styles from '../../shared/roundButton/RoundButton.module.css';
import styles from './SprintsList.module.css';
import RoundButton from '../../shared/roundButton/RoundButton';
import sprite from '../../icons/symbol-defs.svg';

const SprintsList = () => {

  return (
    <div className={styles.box}>
      <div className={styles.boxBack}>
        <button type='button' className={styles.buttonBack}>
          <svg className={styles.iconBack}>
            <use href={sprite + '#icon-Arrow-1'}></use>
          </svg>
          <p className={styles.showProject}>Show projects</p>
        </button>
      </div>
      <div className={styles.sideLeft}>
        <ul className={styles.sideLeftList}>
          <li className={styles.sideItem}>
            <div className={styles.sideItemBox}></div>
            <p className={styles.sideItemName}>React project</p>
          </li>
        </ul>
        <div className={styles.sideButtonBox}>
          <RoundButton/>
          <p className={styles.sidePlusText}>Створити проект</p>
        </div>
      </div>
      <div className={styles.projectDetails}>
        <div className={styles.head}>
          <div className={styles.titleBox}>
            <h2 className={styles.pageTitle}>PROJECT NAME</h2>
            <button type='button' className={styles.buttonFix}>
              <svg className={styles.iconPencil}>
                <use href={sprite + '#icon-pencil'}></use>
              </svg>
            </button>
          </div>
          <div className={styles.buttonBox}>
            <RoundButton />
            <p className={styles.pageText}>Create sprint</p>
          </div>
        </div>
        <p className={styles.description}>Короткий опис проекту, якщо він є, розміщуєтсья тут. Ширина тектового блоку</p>
        <div className={styles.addPeopleBox}>
          <button type='button' className={styles.buttonAddPeople}>
            <svg className={styles.iconAddPeople}>
              <use href={sprite + '#icon-add-group'}></use>
            </svg>
            <p className={styles.addPeopleText}>Add people</p>
          </button>
        </div>
        <ul className={styles.sprintList}>
          <li className={styles.sprintListItem}>
            <div className={styles.listItemBox}></div>
          </li>
          <li className={styles.sprintListItem}>
            <div className={styles.listItemBox}></div>
          </li>
          <li className={styles.sprintListItem}>
            <div className={styles.listItemBox}></div>
          </li>
          <li className={styles.sprintListItem}>
            <div className={styles.listItemBox}></div>
          </li>
        </ul>
      </div>
    </div>);

};

export default SprintsList;