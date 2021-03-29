import React from 'react';
import styles from './ProjectItem.module.css'

const ProjectItem = ()=> {

    return (
      <li className={styles.projectItem}>
        <h3 className={styles.title}>Name project</h3>
        <p className={styles.description}> img elements must have an alt prop, either</p>
          <div className={styles.iconBox}>
              <img className={styles.deleteIcon} src='#'/>
          </div>
      </li>
    );

}

export default ProjectItem;