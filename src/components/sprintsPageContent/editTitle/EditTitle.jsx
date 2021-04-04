import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
//import { Formik, Form, Field, ErrorMessage } from 'formik';
//import * as Yup from 'yup';
import styles from './EditTitle.module.css';
import sprite from '../../../icons/symbol-defs.svg';
import {editTitle } from '../../../redux/projects/projects-operations';
import { getProjectsSelector } from '../../../redux/projects/projects-selectors';
  const EditTitle = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState();
  const [isUpdate, setUpdate] = useState(true);
  const { projectId } = useParams();
  const projects = useSelector(getProjectsSelector);
  const project = projects.find(item => item._id === projectId);
  const [active, setActive] = useState(true);

  const onEditTitle = () => {
    setActive(() => setActive(false))
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
    setActive(() => setActive(true))
  };

  if (active) {
    return (<div className={styles.box}>
        <h2 className={styles.pageTitle}>
          {project?.title}
        </h2>
        <button onClick={onEditTitle} type='button' className={styles.buttonFix}>
          <svg className={styles.iconPencil}>
            <use href={sprite + '#icon-pencil'}></use>
          </svg>
        </button>
      </div>)
  }

  if (!active) {
    return (
      <div className={styles.box}>
      <form className={styles.editForm}>
            <input
            type='text'
            name='edit'
            value={input}
            placeholder="Enter new name"
            onChange={onHandleChange}
            onBlur={onHandleSubmit}
            className={styles.editInput}
            autoFocus
          />
          <button className={styles.buttonSave} onClick={onHandleSubmit} type='submit'>
          <svg className={styles.iconSave}>
            <use href={sprite + '#icon-save'}></use>
          </svg>
        </button>
      </form>
      {/*          <Formik*/}
      {/*            initialValues={{*/}
      {/*              title: '',*/}
      {/*            }}*/}
      {/*  //          validationSchema={formSchema}*/}
      {/*            onSubmit={values => {*/}
      {/*              setInput(values);*/}
      {/*              setActive(() => setActive(false))*/}
      {/*              setUpdate(!isUpdate);*/}
      {/*              setInput(project.title);*/}
      {/*              dispatch(editTitle(projectId, input));*/}
      {/*              setUpdate(!isUpdate);*/}
      {/*              setActive(() => setActive(true))*/}
      {/*              onClose();*/}
      {/*            }}*/}
      {/*          >*/}
      {/*            <Form className={styles.form}>*/}
      {/*              <Field*/}
      {/*                className={styles.inputName}*/}
      {/*                name="title"*/}
      {/*                type="text"*/}
      {/*                placeholder="New project name"*/}
      {/*              />*/}
      {/*              <ErrorMessage*/}
      {/*                className={styles.errorName}*/}
      {/*                component="span"*/}
      {/*                name="title"*/}
      {/*              />*/}
      {/*              <button className={styles.buttonSave} type='submit'>*/}
      {/*                <svg className={styles.iconSave}>*/}
      {/*                  <use href={sprite + '#icon-checkmark'}></use>*/}
      {/*                </svg>*/}
      {/*              </button>*/}
      {/*            </Form>*/}
      {/*          </Formik>*/}
      </div>
    )
  }

}

export default EditTitle;
