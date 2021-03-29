import React from 'react';
import ProjectList from '../../components/projectList/ProjectList';
import styles from './ProjectPage.module.css';
import sprite from '../../icons/symbol-defs.svg';

const ProjectPage = () => {

  return (
    <>
      <div className={styles.pageBox}>
         <div className={styles.pageCreate}>
          <h2 className={styles.pageTitle}>Projects</h2>
           <div className={styles.buttonBox}>
             <button type='button' className={styles.buttonAdd}>
               <svg className={styles.icon} >
                 <use href={sprite + '#icon-add-plus'}></use>
               </svg>
             </button>
             <p className={styles.pageText}>Створити проект</p>
           </div>
        </div>
        <ProjectList />
      </div>
     </>
  );

};

export default ProjectPage;