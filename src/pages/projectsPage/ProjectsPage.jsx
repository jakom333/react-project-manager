import React, { useState } from 'react';
import ProjectsList from '../../components/projectsList/ProjectsList';
import styles from './ProjectsPage.module.css';
import RoundButton from '../../shared/roundButton/RoundButton';
import MainModal from '../../shared/mainModal/MainModal';
import ProjectForm from '../../components/projectForm/ProjectForm';

const ProjectsPage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.pageBox}>
      <div className={styles.pageCreate}>
        <h2 className={styles.pageTitle}>PROJECTS</h2>
        <div className={styles.buttonBox}>
          <RoundButton onClick={() => setShowModal(true)} />
          <p className={styles.pageText}>Create project</p>
        </div>
      </div>
      <ProjectsList />
      <MainModal
        showModal={showModal}
        setShowModal={setShowModal}
        onClose={() => setShowModal(false)}
      >
        <ProjectForm onClose={() => setShowModal(false)} />
      </MainModal>
    </div>
  );
};

export default ProjectsPage;
