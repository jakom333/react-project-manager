import React from 'react';
import styles from './TaskCreator.module.css';

const TaskCreator = () => {
  return (
      <form onSubmit="">
        <h1 className={styles.title}>Task creation</h1>
        <label className={styles.label}>
          The name of the task *
          <input
            className={styles.input}
            type="text"
            name="name"
            onChange=""
            //   value=""
            required
          />
        </label>

        <label className={styles.label}>
          Scheduled hours *
          <input
            className={styles.inputHours}
            type="text"
            name="hours"
            onChange=""
            //   value=""
            required
          />
        </label>
        <button className={styles.button} type="submit">
          Done
        </button>
        <button className={styles.buttonCancel} type="button">
          Cancel
        </button>
      </form>
  );
};

export default TaskCreator;
