import React from 'react';
import ProjectList from '../../components/projectList/ProjectList';
import styles from './ProjectPage.module.css';
import ButtonCreate from '../../components/buttonCreate/ButtonCreate';


const ProjectPage = () => {

  return (
        <div className={styles.pageBox}>
         <div className={styles.pageCreate}>
          <h2 className={styles.pageTitle}>Projects</h2>
           <div className={styles.buttonBox}>
             <ButtonCreate/>
             <p className={styles.pageText}>Створити проект</p>
           </div>
        </div>
        <ProjectList />
      </div>
   );

};

export default ProjectPage;