import React from 'react';
import styles from './ProjectItem.module.css'

const ProjectItem = ()=> {

    return (
      <li className={styles.projectItem}>
        <h3 className={styles.title}>Name project</h3>
        <p className={styles.description}> img elements must have an alt prop, either</p>
          <button type="button" className={styles.buttonDelete}>
            <svg className={styles.deleteIcon} >
              <use href="../../../icons/symbol-defs.svg#icon-save"></use>
            </svg>
          </button>
      </li>
    );

}

export default ProjectItem;