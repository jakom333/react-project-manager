import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import styles from './EditTitle.module.css';
import sprite from '../../../icons/symbol-defs.svg';
import { editTitle } from '../../../redux/projects/projects-operations';
import { getProjectLoading, getProjectsSelector } from '../../../redux/projects/projects-selectors';
import AutosizeInput from '../../titleEditor/AutosizeInput';
import Loader from '../../loader/Loader';


const EditTitle = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState();
  const [isUpdate, setUpdate] = useState(true);
  const { projectId } = useParams();
  const projects = useSelector(getProjectsSelector);
  const isLoading = useSelector(getProjectLoading);
  const project = projects.find(item => item._id === projectId);
  const [active, setActive] = useState(true);

  const onEditTitle = () => {
    setActive(() => setActive(false));
    setUpdate(!isUpdate);
    setInput(project.title);
  };

  const onHandleChange = evt => {
    setInput(evt.target.value);
  };

  const onHandleSubmit = evt => {
    evt.preventDefault();
    dispatch(editTitle(projectId, input));
    setUpdate(!isUpdate);
    setActive(() => setActive(true));
  };

  if (active) {
    return (
      <div className={styles.box}>
        <div className={styles.current}>
          {isLoading ? (
              <Loader />
          ) : (
            <>
              <h2 className={styles.pageTitle}>{project?.title}</h2>
              <button
                onClick={onEditTitle}
                type="button"
                className={styles.buttonFix}
              >
                <svg className={styles.iconPencil}>
                  <use href={sprite + '#icon-pencil'}></use>
                </svg>
              </button>
            </>
          )}
        </div>
        <p className={styles.description}>{project?.description}</p>
      </div>
    );
  }

  if (!active) {
    return (
      <div className={styles.box}>
        <div className={styles.edit}>
          <form className={styles.editForm}>
            <AutosizeInput
              type="text"
              name="edit"
              value={input}
              autoComplete="off"
              onChange={onHandleChange}
              onBlur={onHandleSubmit}
              inputClassName={styles.editInput}
              maxLength="30"
              autoFocus
            />
            <button
              className={styles.buttonSave}
              onClick={onHandleSubmit}
              type="submit"
            >
              <svg className={styles.iconSave}>
                <use href={sprite + '#icon-save'}></use>
              </svg>
            </button>
          </form>
        </div>
        <p className={styles.description}>{project?.description}</p>
      </div>
    );
  }
};

export default EditTitle;
