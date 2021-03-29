import React from 'react';
import styles from './ProjectItem.module.css'
import sprite from '../../../icons/symbol-defs.svg'

const ProjectItem = ({item})=> {
console.log(item)


    return (
      <li className={styles.projectItem}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.description}>{item.description}</p>
          <button type="button" className={styles.buttonDelete}>
            <svg className={styles.deleteIcon} >
              <use href={sprite + '#icon-delete-bin'}></use>
            </svg>
          </button>
      </li>
    );

}

export default ProjectItem;