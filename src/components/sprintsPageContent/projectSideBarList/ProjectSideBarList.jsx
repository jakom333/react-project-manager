import React from 'react';
import styles from './ProjectSideBarList.module.css';


const projectList = [
  {
    title: 'Project 1',
    id: '1',
  },
  {
    title: 'Project 2',
    id: '2',
  },
  {
    title: 'Project 3',
    id: '3',
  },
  {
    title: 'Project 4',
    id: '4',
  },

];

const ProjectSideBarList  = () => {

    return (
      <div className={styles.box}>
        <ul className={styles.sideLeftList}>
          {projectList .map(({ title, id }) => (
            <li key={id} className={styles.sideItem}>
              <div className={styles.sideItemBox}></div>
              <p className={styles.sideItemName}>{title}</p>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default ProjectSideBarList;