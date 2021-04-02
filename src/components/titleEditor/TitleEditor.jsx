import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import styles from './TitleEditor.module.css';
import sprite from '../../icons/symbol-defs.svg';
import {
  editTitle,
  getProjects,
} from '../../redux/projects/projects-operations';
import { fetchSprints } from '../../redux/sprints/sprints-operations';

export default function ChangeTitle() {
  const dispatch = useDispatch();
  const [isUpdate, setUpdate] = useState(true);
  const [input, setInput] = useState();
  const { projectId } = useParams();
  const projects = useSelector(state => state.projects);
  const project = projects.find(item => item._id === projectId);

  useEffect(() => {
    dispatch(fetchSprints(projectId));
    dispatch(getProjects());
  }, [dispatch, projectId]);

  const onChangeTitle = e => {
    setUpdate(!isUpdate);
    setInput(project.title);
  };
  const onHandleChange = e => {
    setInput(e.target.value);
  };
  const onFormSubmit = e => {
    e.preventDefault();
    dispatch(editTitle(projectId, input));
    setUpdate(!isUpdate);
  };

  return (
    <>
      <form onSubmit={onFormSubmit} className={styles.wrapper}>
        <input
          type="text"
          name="edit"
          value={input}
          onChange={onHandleChange}
          maxLength="25"
          className={styles.titleChangeInput}
        />{' '}
        <button
          className={styles.changeTitleButton}
          type="submit"
          onClick={() => {
            setUpdate(!isUpdate);
          }}
        >
          <svg className={styles.changeTitleButton}>
            <use href={sprite + '#icon-save'}></use>
          </svg>
        </button>{' '}
      </form>
      <div className={styles.wrapper}>
        <h1 className={styles.sprintTitle}>{project?.title}</h1>
        <button type="button" onClick={onChangeTitle}>
          <svg className={styles.changeTitleButton}>
            <use href={sprite + '#icon-pencil'}></use>
          </svg>
        </button>
      </div>
    </>
  );
}
