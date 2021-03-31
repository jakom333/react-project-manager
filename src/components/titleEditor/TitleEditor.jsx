import React, { useState, useEffect } from 'react';

import styles from './TitleEditor.module.css';
import sprite from '../../icons/symbol-defs.svg';

export default function ChangeTitle({ titleValue }) {
  const [title, setTitle] = useState(titleValue);
  const [isUpdate, setUpdate] = useState(true);

  useEffect(() => {
    setTitle(titleValue);
  }, [titleValue]);

  return (
    <>
      {/* <label className={styles.wrapper}>
        <input
          type="text"
          className={styles['title-change-input']}
          value={title}
          onChange={e => setTitle(e.target.value)}
          maxLength="25"
        />

        <button
          className={styles['sprint-change-title-btn']}
          type="button"
          onClick={() => {
            setUpdate(!isUpdate);
          }}
        >
          <svg className={styles['sprint-change-title-btn']}>
            <use href={sprite + '#icon-save'}></use>
          </svg>
        </button>
      </label> */}
      <div className={styles.wrapper}>
        <h1 className={styles['sprint-title']}>Sprint title</h1>
        <button
          onClick={() => setUpdate(!isUpdate)}
          className={styles['sprint-change-title-btn']}
        >
          <svg className={styles['sprint-change-title-btn']}>
            <use href={sprite + '#icon-pencil'}></use>
          </svg>
        </button>
      </div>
    </>
  );
}
