import React from 'react';
import styles from './ProjectList.module.css'
import ProjectItem from './projectItem/ProjectItem';

const ProjectList = () => {
  const projects =[
    {
      title: "Project 1",
      description: "Project 1 description",
      id: "1"
    },
    {
      title: "Project 2",
      description: "Project 1 description",
      id: "2"
    },
    {
      title: "Project 3",
      description: "Project 1 description",
      id: "3"
    },
    {
      title: "Project 4",
      description: "Project 1 description",
      id: "4"
    }
  ]


    return  (
      <ul className={styles.projectList}>
          {projects.map((item)=>(
             <ProjectItem key={item.id} item={item}/>
          ))}
      </ul>
    );

}

export default ProjectList;