import React from 'react';
import i18n from '../../utils/i18n';
import styles from './index.m.css';

const LangBtn = () => {
  const onChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className={styles.language__btns}>
      <input
        type="button"
        value="ua"
        className={`${styles.language__btn} ${styles.language__ua}`}
        onClick={onChange}
      />
      <input
        type="button"
        value="en"
        className={`${styles.language__btn} ${styles.language__en}`}
        onClick={onChange}
      />
    </div>
  );
};

export default LangBtn;
