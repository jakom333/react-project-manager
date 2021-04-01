import React from 'react';
import styles from './ProjectForm.module.css'


const ProjectForm = () => {

  return (
      <div className={styles.formBox}>
        <form
          className={styles.form}
          onSubmit=""
        >
          <h2 className={styles.formTitle}>Create project</h2>
          <input
              autoComplete="off"
              className={styles.input}
              placeholder="name Project"
              type="text"
              value=''
              name="name"
              onChange=""
              required
            />
          <input
              autoComplete="off"
              className={styles.input}
              placeholder="description"
              type="text"
              value=''
              name="number"
              onChange=""
              required
            />
          </form>
      </div>
    );

}

export default ProjectForm;