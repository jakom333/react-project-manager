import React from 'react';
import styles from './ProjectSideBar.module.css';
import RoundButton from '../../../shared/roundButton/RoundButton';
import ButtonShow from '../../../shared/buttonShow/ButtonShow';
import ProjectSideBarList from '../projectSideBarList/ProjectSideBarList';
import { NavLink } from 'react-router-dom';


const ProjectSideBar  = () => {

  return (
    <div className={styles.projectSideBar}>
      <div  className={styles.boxBack}>
        <NavLink to="/projects" className={styles.boxBackLink} activeClassName={styles.boxBackAvtive}>
          <ButtonShow/>
          <p className={styles.showProject}>Show projects</p>
        </NavLink>
      </div>
      <ProjectSideBarList/>
      <div className={styles.sideButtonBox}>
        <RoundButton/>
        <p className={styles.sidePlusText}>Створити проект</p>
      </div>
    </div>
  );

}

export default ProjectSideBar