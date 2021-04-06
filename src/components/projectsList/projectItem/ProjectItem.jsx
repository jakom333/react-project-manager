import React from 'react';
import styles from './ProjectItem.module.css';
import sprite from '../../../icons/symbol-defs.svg';
import { useDispatch } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';
import { deleteProject } from '../../../redux/projects/projects-operations';

const ProjectItem = ({ item }) => {
  const dispatch = useDispatch();
  const deleteItem = () => dispatch(deleteProject(item._id));
  const match = useRouteMatch();
  return (
    <li className={styles.projectItem}>
      <div className={styles.waveBox}>
        <Link
          className={styles.projectLink}
          to={`${match.url}/${item._id}`}
          id={item._id}
        >
          <h3 className={styles.title}>{item.title}</h3>
          <p className={styles.description}>{item.description}</p>
        </Link>
        <button
          type="button"
          className={styles.buttonDelete}
          onClick={deleteItem}
        >
          <svg className={styles.deleteIcon}>
            <use href={sprite + '#icon-delete-bin'}></use>
          </svg>
        </button>
      </div>
    </li>
  );
};

export default ProjectItem;
