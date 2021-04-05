import React, { Component } from 'react';
import Spinner from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styles from './Loader.module.css';

export default class Loader extends Component {
  render() {
    return (
      <Spinner
        type="ThreeDots"
        color="#f78335"
        height={50}
        width={50}
        className={styles.spinner}
        timeout={500}
      />
    );
  }
}
