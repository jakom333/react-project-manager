import React from 'react';
import style from './CancelButton.module.css';

const CancelButton = ({ onClose }) => {
  return (
    <button type="button" className={style.cancelBtn} onClick={() => onClose()}>
      Cancel
    </button>
  );
};

export default CancelButton;
