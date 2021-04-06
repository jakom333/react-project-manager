import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import styles from './TitleEditor.module.css';
import sprite from '../../icons/symbol-defs.svg';
import { editTitle } from '../../redux/sprints/sprints-operations';
import { getSprintsSelector } from '../../redux/sprints/sprints-selectors';
import AutosizeInput from './AutosizeInput';


export default function ChangeTitle() {
  const dispatch = useDispatch();
  const [input, setInput] = useState();
  const [isUpdate, setUpdate] = useState(true);
  const { sprintId } = useParams();
  const sprints = useSelector(getSprintsSelector);
  const sprint = sprints.find(sprint => sprint._id === sprintId);
  const [isActive, setActive] = useState(true);


  const onChangeTitle = e => {
    setActive(() => setActive(false));
    setUpdate(!isUpdate);
    setInput(sprint.title);
  };

  const onHandleChange = e => {
    setInput(e.target.value);
  };

  const onFormSubmit = e => {
    e.preventDefault();
    dispatch(editTitle(sprintId, input));
    setUpdate(!isUpdate);
    setActive(() => setActive(true));
  };

  if (isActive) {
    return (
      <div className={styles.wrapper}>

        <h1 className={styles.sprintTitle} onClick={onChangeTitle}>
          {sprint?.title}
        </h1>
        <button
          type="button"
          onClick={onChangeTitle}
          className={styles.changeTitleButton}
        >
          <svg className={styles.changeTitleButton}>
            <use href={sprite + '#icon-pencil'}></use>
          </svg>
        </button>
        </div>
    );
  }

  if (!isActive) {
    return (
      <>
        <form className={styles.wrapper}>
          <AutosizeInput
            type="text"
            name="edit"
            value={input}
            onChange={onHandleChange}
            onBlur={onFormSubmit}
            maxLength="22"
            inputClassName={styles.titleChangeInput}
            autoFocus
            autoComplete="off"
          />
          <button
            className={styles.changeTitleButton}
            type="submit"
            onClick={onFormSubmit}
          >
            <svg className={styles.changeTitleButton2}>
              <use href={sprite + '#icon-save'}></use>
            </svg>
          </button>
        </form>
      </>
    );
  }
}
