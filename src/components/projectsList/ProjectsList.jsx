import React from 'react';
import styles from './ProjectsList.module.css';
import ProjectItem from './projectItem/ProjectItem';
import { useSelector } from 'react-redux';
import { getProjectsSelector } from '../../redux/projects/projects-selectors';

const ProjectsList = () => {
  const projects = useSelector(getProjectsSelector);
  // const projects =[
  //   {
  //     title: "Project 1",
  //     description: "Project 1 description",
  //     id: "1"
  //   },
  //   {
  //     title: "Project 2",
  //     description: "Project 1 description",
  //     id: "2"
  //   },
  //   {
  //     title: "Project 3",
  //     description: "Project 1 description",
  //     id: "3"
  //   },
  //   {
  //     title: "Project 4",
  //     description: "Project 1 description",
  //     id: "4"
  //   },
  //   {
  //     title: "Project 5",
  //     description: "Project 1 description",
  //     id: "5"
  //   },
  //   {
  //     title: "Project 6",
  //     description: "Project 1 description",
  //     id: "6"
  //   },
  //   {
  //     title: "Project 7",
  //     description: "Project 1 description",
  //     id: "7"
  //   },
  //   {
  //     title: "Project 8",
  //     description: "Project 1 description",
  //     id: "8"
  //   },

  // ]

  return (
    <ul className={styles.projectList}>
      {projects.map(item => (
        <ProjectItem key={item._id} item={item} />
      ))}
    </ul>
  );
};

export default ProjectsList;
