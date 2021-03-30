import React from 'react';
import ProjectsList from '../../components/projectsList/ProjectsList';
import styles from './ProjectsPage.module.css';
import ButtonCreate from '../../shared/buttonCreate/ButtonCreate';


const ProjectsPage = () => {

  return (
        <div className={styles.pageBox}>
         <div className={styles.pageCreate}>
          <h2 className={styles.pageTitle}>PROJECTS</h2>
           <div className={styles.buttonBox}>
             <ButtonCreate/>
             <p className={styles.pageText}>Create project</p>
           </div>
        </div>
        <ProjectsList />
      </div>
   );

};

export default ProjectsPage;