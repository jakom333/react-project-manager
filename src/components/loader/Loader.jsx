import React,  { useRef } from 'react';
import { createPortal } from "react-dom";
import Spinner from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styles from './Loader.module.css';


const loaderRoot  = document.querySelector("#modal_loader")

const Loader = ()=>{
  const loaderRef = useRef();
    return  createPortal(
     ( <div className={styles.overlay} ref={loaderRef}>
        <Spinner
          type="Puff"
          color="#f78335"
          height={100}
          width={100}
          className={styles.spinner}
          timeout={0}
        />
      </div>), loaderRoot
    );
}
export default Loader