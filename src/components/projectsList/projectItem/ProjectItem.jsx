import React from 'react';
import styles from './ProjectItem.module.css';
import sprite from '../../../icons/symbol-defs.svg';
import { useHistory, useRouteMatch } from 'react-router-dom';

const ProjectItem = ({ item }) => {
  const match = useRouteMatch();
  const history = useHistory();

  const onHandleClick = evt => {
    const { id } = evt.target;
    history.push({ pathname: `${match.url}/${id}`, state: { projectId: id } });
  };

  return (
    <li
      className={styles.projectItem}
      id="6062c86ec94bd96215a2029b"
      onClick={onHandleClick}
    >
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.description}>{item.description}</p>
      <button type="button" className={styles.buttonDelete}>
        <svg className={styles.deleteIcon}>
          <use href={sprite + '#icon-delete-bin'}></use>
        </svg>
      </button>
    </li>
  );
};

export default ProjectItem;
