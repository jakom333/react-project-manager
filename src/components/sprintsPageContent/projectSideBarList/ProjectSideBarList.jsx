import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './ProjectSideBarList.module.css';
import { getProjectsSelector } from '../../../redux/projects/projects-selectors';
import { useSelector } from 'react-redux';

const ProjectSideBarList = () => {
  const projects = useSelector(getProjectsSelector);

  return (
    <div className={styles.box}>
      <ul className={styles.sideLeftList}>
        {projects.map(({ title, _id }) => (
          <li key={_id} className={styles.sideItem}>
            <NavLink
              activeClassName={styles.avtive}
              className={styles.sideItemLink}
              to={`${_id}`}
              id={_id}
            >
              <p className={styles.sideItemName}>{title}</p>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectSideBarList;
