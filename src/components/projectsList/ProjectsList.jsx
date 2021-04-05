import React from 'react';
import styles from './ProjectsList.module.css';
import ProjectItem from './projectItem/ProjectItem';
import { useSelector } from 'react-redux';
import { getProjectsSelector } from '../../redux/projects/projects-selectors';

const ProjectsList = () => {
  const projects = useSelector(getProjectsSelector);
  console.log(projects);

  return (
    <ul className={styles.projectList}>
      {projects.map(item => (
        <ProjectItem key={item._id} item={item} />
      ))}
    </ul>
  );
};

export default ProjectsList;
