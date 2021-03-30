import React from 'react';
import styles from './RoundButton.module.css';
import sprite from '../../icons/symbol-defs.svg';

const RoundButton = () => {

    return (
      <>
      <button type='button' className={styles.buttonAdd}>
        <svg className={styles.icon} >
          <use href={sprite + '#icon-add-plus'}></use>
        </svg>
      </button>
      </>);

}

export default RoundButton;
