import React, { Component } from 'react';
import styles from './ChartModal.module.css';
import Chart from '../Chart';
import sprite from '../../../icons/symbol-defs.svg';

export default class Modal extends Component {
  state = {
    modal: false,
  };
  componentDidMount() {
    window.addEventListener('keydown', this.handlekeydown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handlekeydown);
  }
  toggleModal = () => {
    this.setState(({ modal }) => ({ modal: !modal }));
  };
  handlekeydown = e => {
    if (e.code === 'Escape') {
      this.toggleModal();
    }
  };
  render() {
    return (
      <>
        <button
          type="button"
          className={styles.buttonAdd}
          onClick={this.toggleModal}
        >
          <svg className={styles.icon}>
            <use href={sprite + '#icon-analytics'}></use>
          </svg>
        </button>

        {this.state.modal && (
          <div className={styles.Overlay}>
            <div className={styles.Modal}>
              <Chart />
            </div>
          </div>
        )}
      </>
    );
  }
}
