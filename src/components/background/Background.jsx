import React from 'react';
import elipse1 from '../../images/background/Ellipse 1.svg';
import elipse2 from '../../images/background/Ellipse 2.svg';
import elipse3 from '../../images/background/Ellipse 3.svg';
import elipse4 from '../../images/background/Ellipse 4.svg';
import elipse5 from '../../images/background/Ellipse 5.svg';
import elipse6 from '../../images/background/Ellipse 6.svg';
import union_white from '../../images/background/Union.white.svg';
import union_orange from '../../images/background/Union.orange.svg';
import { useDevice } from '../../hooks/useDevice.js';
import styles from './Background.module.css';

const Background = () => {
  const { isMobileDevice } = useDevice();
  if (!isMobileDevice) {
    return (
      <>
        <img src={elipse1} alt="white-ball" className={styles.elipse1} />
        <img src={elipse2} alt="orange-ball" className={styles.elipse2} />
        <img src={elipse3} alt="whire-ball" className={styles.elipse3} />
        <img src={elipse4} alt="white-ball" className={styles.elipse4} />
        <img src={elipse5} alt="orange-ball" className={styles.elipse5} />
        <img src={elipse6} alt="orange-ball" className={styles.elipse6} />
        <img src={union_white} alt="" className={styles.union_white} />
        <img src={union_orange} alt="" className={styles.union_orange} />
      </>
    );
  } else {
    return null;
  }
};

export default Background;
