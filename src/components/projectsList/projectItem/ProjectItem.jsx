import React from 'react';
import styles from './ProjectItem.module.css';
import sprite from '../../../icons/symbol-defs.svg';
import { useDispatch } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';
import { deleteProject } from '../../../redux/projects/projects-operations'

const ProjectItem = ({ item}) => {
//  console.log(item)

  const dispatch = useDispatch();
  const deleteItem = () => dispatch(deleteProject(item._id))
  const match = useRouteMatch();
  return (

    <li className={styles.projectItem}>
      <Link
        className={styles.projectLink}
        to={`${match.url}/${item._id}`}
        id={item._id}
      >
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.description}>{item.description}</p>
      </Link>
      <button type='button' className={styles.buttonDelete} onClick={deleteItem}>
        <svg className={styles.deleteIcon}>
          <use href={sprite + '#icon-delete-bin'}></use>
        </svg>
      </button>
    </li>
  );
};

export default ProjectItem;

//
//import React from 'react';
//import styles from './ProjectItem.module.css';
//import sprite from '../../../icons/symbol-defs.svg';
//import { Link, useRouteMatch } from 'react-router-dom';
//
//
//const ProjectItem = ({ item }) => {
//
//  const match = useRouteMatch();
//  // const history = useHistory();
//
//  // const onHandleClick = evt => {
//  //   const { id } = evt.target;
//  //   history.push({ pathname: `${match.url}/${id}`, state: { projectId: id } });
//  // };
//
//  return (
//
//    <li className={styles.projectItem}>
//      <Link
//        className={styles.projectLink}
//        to={`${match.url}/${item._id}`}
//        id={item._id}
//        // onClick={onHandleClick}
//      >
//        <h3 className={styles.title}>{item.title}</h3>
//        <p className={styles.description}>{item.description}</p>
//      </Link>
//      <button type='button' className={styles.buttonDelete}>
//        <svg className={styles.deleteIcon}>
//          <use href={sprite + '#icon-delete-bin'}></use>
//        </svg>
//      </button>
//    </li>
//  );
//};
//
//export default ProjectItem;
