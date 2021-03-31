import React from 'react';
import styles from './CreateSprintForm.module.css';

const createSprintForm = () => {
  return (
    <div>
      <form className={styles.form}>
        <h2 className={styles.title}>Create sprint</h2>
        <label>
          <span>Sprint name</span>
          <input className={styles.input} type='text'></input>
        </label>

        <label>
          <input className={styles.checkbox} type='checkbox' />
          <span>Previous days</span>
        </label>
        <label>
          <span>Finish date</span>
          <input className={styles.input} type='date' />
        </label>
        <label>
          <span>Duration</span>
          <input className={styles.input} type='number' />
        </label>
        <button>Create</button>
        <button>Cancel</button>
      </form>
    </div>
  );
};

export default createSprintForm;
