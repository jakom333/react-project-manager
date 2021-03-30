import React from 'react';
import style from './CancelButton.module.css';

const CancelButton = () => {
  return (
    <button type="button" className={style.cancelBtn}>
      Cancel
    </button>
  );
};

export default CancelButton;
