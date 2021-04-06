import React from 'react';
import styles from './ProjectsList.module.css';
import ProjectItem from './projectItem/ProjectItem';
import { useSelector } from 'react-redux';
import {
  getProjectsSelector,
  getProjectLoading,
} from '../../redux/projects/projects-selectors';
import Loader from '../loader/Loader';

const ProjectsList = () => {
  const projects = useSelector(getProjectsSelector);
  const isLoading = useSelector(getProjectLoading);

  return (
    <div className={styles.box}>
      {isLoading ? (
        <Loader />
      ) : (
        !projects.length && (
          <div className={styles.emptyMessageBox}>
            <h2 className={styles.emptyMessage}>
              Your project collection is empty, use the "Create project" button.
            </h2>
          </div>
        )
      )}
      {!!projects.length && (
        <ul className={styles.projectList}>
          {projects.map(item => (
            <ProjectItem key={item._id} item={item} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProjectsList;
