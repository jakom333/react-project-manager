import React, { Component } from 'react';
import Spinner from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styles from './Loader.module.css';

export default class Loader extends Component {
  render() {
    return (
      <div className={styles.overlay}>
        <Spinner
          type="Puff"
          color="#f78335"
          height={100}
          width={100}
          className={styles.spinner}
          timeout={0}
        />
      </div>
    );
  }
}
