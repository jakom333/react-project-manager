import React from 'react';
import styles from './ButtonShow.module.css';
import sprite from '../../icons/symbol-defs.svg';

const ButtonShow = () => {
    return (
      <button type='button' className={styles.buttonBack}>
        <svg className={styles.iconBack}>
          <use href={sprite + '#icon-Arrow-1'}></use>
        </svg>
      </button>
    );

}

export default ButtonShow;