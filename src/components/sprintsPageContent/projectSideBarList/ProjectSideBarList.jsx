import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import styles from './ProjectSideBarList.module.css';
import { getProjectsSelector } from '../../../redux/projects/projects-selectors';
import { useSelector } from 'react-redux';

const ProjectSideBarList = ({ item }) => {
  const projects = useSelector(getProjectsSelector);

  return (
    <div className={styles.box}>
      <ul className={styles.sideLeftList}>
        {projects.map(({ title, _id }) => (
          <li key={_id} className={styles.sideItem}>
            <Link className={styles.projectLink} to={`${_id}`} id={_id}>
              <div className={styles.sideItemBox}></div>
              <p className={styles.sideItemName}>{title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectSideBarList;
