import React, { Component } from 'react';
import styles from './ChartModal.module.css';
import Chart from '../Chart';
import sprite from '../../../icons/symbol-defs.svg';
import { connect } from 'react-redux';
import { getTasks } from '../../../redux/tasks/task-selectors';

class Modal extends Component {
  state = {
    modal: false,
  };
  componentDidMount() {
    window.addEventListener('keydown', this.handlekeydown);
  }

  componentDidUpdate() {
    const body = document.querySelector('body');
    body.style.overflow = this.state.modal ? 'hidden' : 'auto';
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
        {this.props.tasks.length > 2 && (
          <button
            type="button"
            className={styles.buttonAdd}
            onClick={this.toggleModal}
          >
            <svg className={styles.icon}>
              <use href={sprite + '#icon-analytics'}></use>
            </svg>
          </button>
        )}

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

const mapStateToProps = state => ({
  tasks: getTasks(state),
});

export default connect(mapStateToProps)(Modal);
