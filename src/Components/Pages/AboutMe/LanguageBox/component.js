import React from 'react';
import Title from '../AboutBox/component';
import styles from '../index.m.css';

const LanguageBox = () => {
  return (
    <div className={styles.main__languageBox}>
      <Title
        children="Additional information:"
        classStyle={styles.main__mySkill}
      />
      <p className={styles.main__skill}>English - Pre-Intermediate (A2)</p>
    </div>
  );
};

export default LanguageBox;
