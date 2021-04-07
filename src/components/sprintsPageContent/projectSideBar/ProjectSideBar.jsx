import React, { useEffect, useState } from 'react';
import styles from './ProjectSideBar.module.css';
import RoundButton from '../../../shared/roundButton/RoundButton';
import ButtonShow from '../../../shared/buttonShow/ButtonShow';
import ProjectSideBarList from '../projectSideBarList/ProjectSideBarList';
import { NavLink } from 'react-router-dom';
import MainModal from '../../../shared/mainModal/MainModal';
import ProjectForm from '../../projectForm/ProjectForm';

const ProjectSideBar = () => {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = showModal ? 'hidden' : 'auto';
  }, [showModal]);
  return (
    <div className={styles.projectSideBar}>
      <div className={styles.boxBack}>
        <NavLink
          to="/projects"
          className={styles.boxBackLink}
          activeClassName={styles.boxBackAvtive}
        >
          <ButtonShow />
          <p className={styles.showProject}>Show projects</p>
        </NavLink>
      </div>
      <ProjectSideBarList />
      <div className={styles.sideButtonBox}>
        <RoundButton onClick={() => setShowModal(true)} />
        <p className={styles.sidePlusText}>Create project</p>
        <MainModal
          showModal={showModal}
          setShowModal={setShowModal}
          onClose={() => setShowModal(false)}
        >
          <ProjectForm onClose={() => setShowModal(false)} />
        </MainModal>
      </div>
    </div>
  );
};

export default ProjectSideBar;
