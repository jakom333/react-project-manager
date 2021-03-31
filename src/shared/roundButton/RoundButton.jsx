import React from 'react';
import styles from './RoundButton.module.css';
import sprite from '../../icons/symbol-defs.svg';

const RoundButton = ({ onClick }) => {
  return (
    <>
      <button type="button" className={styles.buttonAdd} onClick={onClick}>
        <svg className={styles.icon}>
          <use href={sprite + '#icon-add-plus'}></use>
        </svg>
      </button>
    </>
  );
};

export default RoundButton;
