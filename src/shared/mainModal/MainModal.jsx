import React, { useRef } from 'react';
import styles from './MainModal.module.css';
import sprite from '../../icons/symbol-defs.svg';
import CancelButton from '../cancelButton/CancelButton';

const MainModal = ({ children, showModal, onClose, setShowModal }) => {
  const modalRef = useRef();

  const closeModal = evt => {
    if (evt.target === modalRef.current) {
      setShowModal(false);
    }
  };

  return (
    showModal && (
      <div className={styles.mainModal} ref={modalRef} onClick={closeModal}>
        <div className={styles.container}>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={() => onClose()}
          >
            <svg className={styles.icon}>
              <use href={sprite + '#icon-cross'} />
            </svg>
          </button>
          {children}

          <CancelButton onClose={onClose} />
        </div>
      </div>
    )
  );
};

export default MainModal;
