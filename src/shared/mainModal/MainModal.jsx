import React, { useCallback, useEffect, useRef } from 'react';
import { Portal } from '@reach/portal';
import { CSSTransition } from 'react-transition-group';
import {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from 'body-scroll-lock';

import css from './MainModal.module.css';

const MainModal = ({ open, onClose, children }) => {
  const ref = useRef();

  const handleKey = useCallback(
    event => {
      if (event.key === 'Escape') {
        return onClose && onClose();
      }
    },
    [onClose],
  );

  const handleBackdrop = useCallback(
    ({ target, currentTarget }) => {
      if (target === currentTarget) {
        onClose && onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (ref.current) {
      if (open) {
        disableBodyScroll(ref.current);
        window.addEventListener('keydown', handleKey);
      } else {
        enableBodyScroll(ref.current);
      }
    }

    return () => {
      window.removeEventListener('keydown', handleKey);
      clearAllBodyScrollLocks();
    };
  }, [open, handleKey]);

  const fade = {
    enter: css.enter,
    enterActive: css.enterActive,
    exit: css.exit,
    exitActive: css.exitActive,
  };

  return (
    <Portal>
      <CSSTransition in={open} timeout={300} classNames={fade} unmountOnExit>
        <div className={css.container}>
          <div
            className={css.overlay}
            role="none presentation"
            tabIndex={-1}
            onClick={handleBackdrop}
          />
          <div className={css.dialog__container}>
            <div role="dialog" ref={ref} className={css.modal}>
              <button
                onClick={() => onClose()}
                aria-label="Close panel"
                className={css.close_button}
              >
                X
              </button>
              {children}
            </div>
          </div>
        </div>
      </CSSTransition>
    </Portal>
  );
};

export default MainModal;
