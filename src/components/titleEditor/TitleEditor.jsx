import React, { useState, useEffect } from 'react';

import styles from './TitleEditor.module.css';
import sprite from '../../icons/symbol-defs.svg';

export default function ChangeTitle({ titleValue, id, editTitle }) {
  const [title, setTitle] = useState(titleValue);
  const [isUpdate, setUpdate] = useState(true);

  useEffect(() => {
    setTitle(titleValue);
  }, [titleValue]);

  return (
    <>
      <label className={styles.wrapper}>
        <input
          type="text"
          className={styles['title-change-input']}
          value={title}
          onChange={e => setTitle(e.target.value)}
          maxLength="40"
        />
        <button
          type="button"
          onClick={async () => {
            await editTitle(id, title);
            setUpdate(!isUpdate);
          }}
          // className={styles['sprint-change-title-btn--active']}
        >
          <svg className={styles['sprint-change-title-btn--active']}>
            <use href={sprite + '#icon-save'}></use>
          </svg>
        </button>
      </label>

      <h1 className={styles['sprint-title']}>{title}</h1>
      <button
        onClick={() => setUpdate(!isUpdate)}
        className={styles['sprint-change-title-btn']}
      ></button>
    </>
  );
}
