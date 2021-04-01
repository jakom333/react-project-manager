import React, { useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import styles from './ProjectSideBarList.module.css';
import { useDispatch } from 'react-redux';
import { getProjectsSelector } from '../../../redux/projects/projects-selectors';
import { useSelector } from 'react-redux';


const ProjectSideBarList = ({item}) => {

  const projects = useSelector(getProjectsSelector)
  const match = useRouteMatch();
//  const dispatch = useDispatch();
//  dispatch(createProject(projects));
  console.log(projects)

  return (
    <div className={styles.box}>
      <ul className={styles.sideLeftList}>
        {projects.map(({ title, id }) => (
          <li key={id} className={styles.sideItem}>
            {/*<Link*/}
            {/*  className={styles.projectLink}*/}
            {/*  to={`${match.url}/${item._id}`}*/}
            {/*  id={item._id}*/}
            {/*  // onClick={onHandleClick}*/}
            {/*>*/}
            <div className={styles.sideItemBox}></div>
            <p className={styles.sideItemName}>{title}</p>
            {/*</Link>*/}
          </li>
        ))}
      </ul>
    </div>
  );
};


export default ProjectSideBarList;