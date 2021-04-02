import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import styles from './TitleEditor.module.css';
import sprite from '../../icons/symbol-defs.svg';
import {
  editTitle,
  fetchSprints,
} from '../../redux/sprints/sprints-operations';
import { CSSTransition } from 'react-transition-group';
import transition from './Transition.module.css';

export default function ChangeTitle() {
  const dispatch = useDispatch();
  const [isUpdate, setUpdate] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [input, setInput] = useState();
  const { sprintId } = useParams();
  const sprints = useSelector(state => state.sprints);
  const sprint = sprints.find(sprint => sprint._id === sprintId);

  useEffect(() => {
    dispatch(fetchSprints(sprintId));
    dispatch(fetchSprints());
  }, [dispatch, sprintId]);

  const onChangeTitle = e => {
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
  };

  return (
    <>
      <CSSTransition
        in={isActive}
        unmountOnExit
        mountOnEnter
        timeout={50}
        classNames={transition}
      >
        <form onSubmit={onFormSubmit} className={styles.wrapper}>
          <input
            type="text"
            name="edit"
            value={input}
            onChange={onHandleChange}
            maxLength="25"
            className={styles.titleChangeInput}
          />
          <button className={styles.changeTitleButton} type="submit">
            <svg className={styles.changeTitleButton}>
              <use href={sprite + '#icon-save'}></use>
            </svg>
          </button>
        </form>
      </CSSTransition>
      <CSSTransition
        in={isUpdate}
        timeout={50}
        unmountOnExit
        mountOnEnter
        onExited={() => setIsActive(true)}
        onEnter={() => setIsActive(false)}
        classNames={transition}
      >
        <div className={styles.wrapper}>
          <h1 className={styles.sprintTitle}>{sprint.title} </h1>
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
      </CSSTransition>
    </>
  );
}
