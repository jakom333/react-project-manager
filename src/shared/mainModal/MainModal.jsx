import React, { useRef } from 'react';
import styles from './MainModal.module.css';
import sprite from '../../icons/symbol-defs.svg';

const MainModal = ({
  children,
  showModal,
  onClose,
  setShowModal,
  callback,
}) => {
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
            <svg>
              <use href={sprite + '#icon-cross'} />
            </svg>
          </button>
          {children}
          <button type="button" className={styles.closeBtn} onClick={callback}>
            Готово
          </button>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={() => onClose()}
          >
            Отмена
          </button>
        </div>
      </div>
    )
  );
};

export default MainModal;
