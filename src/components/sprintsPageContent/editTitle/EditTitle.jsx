import React from "react";
import styles from './EditTitle.module.css';
import sprite from '../../../icons/symbol-defs.svg';


const EditTitle = () => {

    return (<div>
      <label className={styles.wrapper}>
        <input
          type="text"
          className={styles.inputEdit}
//          value={title}
          onChange=''
          maxLength="15"
        />
      </label>
      <h1 className={styles.title}>
        Title
        {/*{title}*/}
      </h1>
      <button  onClick='' type="button" className={styles.buttonFix}>
        <svg className={styles.iconPencil}>
          <use href={sprite + '#icon-pencil'}></use>
        </svg>
      </button>

      </div>);

}

export default EditTitle;
