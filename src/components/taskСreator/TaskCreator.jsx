import React from 'react';
import styles from './TaskCreator.module.css';

const TaskCreator = () => {
  return (
    <form onSubmit="">
      <h1>Creating a task</h1>
      <input
        type="text"
        name="name"
        placeholder="The name of the task"
        onChange=""
        value=""
      />
      <input
        type="text"
        name="hours"
        placeholder="Scheduled hours"
        onChange=""
        value=""
      />
      <button type="submit">Done</button>
      <button type="button">Cancel</button>
    </form>
  );
};

export default TaskCreator;
