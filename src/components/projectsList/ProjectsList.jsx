import React, { useEffect } from 'react';
import styles from './ProjectsList.module.css';
import ProjectItem from './projectItem/ProjectItem';
import { useDispatch, useSelector } from 'react-redux';
import { getProjectsSelector, getProjectLoading } from '../../redux/projects/projects-selectors';
import { getProjects } from '../../redux/projects/projects-operations';
import Loader from '../loader/Loader';

const ProjectsList = () => {
  const projects = useSelector(getProjectsSelector);
  const isLoading = useSelector(getProjectLoading);
//  const dispatch = useDispatch();

  console.log(projects)
  useEffect(() => {
    getProjects();
  }, []);


  return(
    <>
      {isLoading ? (
        <div className={styles.loader}>
          <Loader />
        </div>
      ) : (
        !projects.length && (
          <h2 className={styles.emptyMessage}>
            Your project collection is empty, use the "Create project" button
          </h2>
        )
      )}

      {projects &&
      <ul className={styles.projectList}>
        {projects.map(item => (
          <ProjectItem key={item._id} item={item} />
        ))}
      </ul>
      }

    </>
  )

};

export default ProjectsList;

