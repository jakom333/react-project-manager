import React from 'react';
import styles from './SprintsList.module.css';

const sprintsList = [
  {
    title: 'Sprint 1',
    id: '1',
  },
  {
    title: 'Sprint 2',
    id: '2',
  },
  {
    title: 'Sprint 3',
    id: '3',
  },
  {
    title: 'Sprint 4',
    id: '4',
  },

];

const SprintsList = () => {

  return (
    <div className={styles.box}>
         <div className={styles.projectDetails}>
            <ul className={styles.sprintList}>
              {sprintsList.map(({ title, id }) => (
                <li key={id} className={styles.sprintListItem}>
                  <div className={styles.listItemBox}>
                    <h3 className={styles.sideItemName}>{title}</h3>
                    <p>Дата начала</p>
                    <p>Дата конца</p>
                    <p>Дата длительность</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
     </div>);

};

export default SprintsList;