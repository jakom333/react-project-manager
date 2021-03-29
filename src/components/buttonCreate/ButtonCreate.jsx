import React from 'react';
import styles from './ButtonCreate.module.css';
import sprite from '../../icons/symbol-defs.svg';

const ButtonCreate = () => {

    return (
      <>
      <button type='button' className={styles.buttonAdd}>
        <svg className={styles.icon} >
          <use href={sprite + '#icon-add-plus'}></use>
        </svg>
      </button>
      </>);

}

export default ButtonCreate;