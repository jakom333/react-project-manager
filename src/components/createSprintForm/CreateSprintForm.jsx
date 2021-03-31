import React from 'react';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import styles from './CreateSprintForm.module.css';

const СreateSprintForm = () => {
  const [startDate, setStartDate] = useState(new Date());

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
        <DatePicker
          selected={startDate}
          onChange={date => setStartDate(date)}
        />
      </form>
    </div>
  );
};

export default СreateSprintForm;
