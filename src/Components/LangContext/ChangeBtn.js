import React from 'react';
import { useLang } from './index';
import styles from './index.m.css';

const LangBtn = () => {
  const { changeToUa, changeToEn } = useLang();

  return (
    <div className={styles.language__btns}>
      <button
        className={`${styles.language__btn} ${styles.language__ua}`}
        onClick={changeToUa}
      >
        UA
      </button>
      <button
        className={`${styles.language__btn} ${styles.language__en}`}
        onClick={changeToEn}
      >
        EN
      </button>
    </div>
  );
};

export default LangBtn;
