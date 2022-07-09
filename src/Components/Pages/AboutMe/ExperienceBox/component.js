import React from 'react';
import { LANG_EN, useLang } from '../../../LangContext';
import {
  dictionaryEnglish,
  dictionaryUkrainian,
} from '../../../LangContext/LangNoteBook';
import Title from '../AboutBox/component';
import styles from '../index.m.css';

const ExperienceBox = () => {
  const { lang } = useLang();

  return (
    <div className={styles.main__experienceBox}>
      <Title
        children={
          lang === LANG_EN
            ? dictionaryEnglish.experienceTitle
            : dictionaryUkrainian.experienceTitle
        }
        classStyle={styles.main__mySkill}
      />
      <h2 className={styles.main__subtitle}>
        {lang === LANG_EN
          ? dictionaryEnglish.position
          : dictionaryUkrainian.position}
      </h2>
      <p className={styles.main__experience}>
        {lang === LANG_EN
          ? dictionaryEnglish.goodsSales
          : dictionaryUkrainian.goodsSales}
      </p>
      <p className={styles.main__experience}>
        {lang === LANG_EN
          ? dictionaryEnglish.interview
          : dictionaryUkrainian.interview}
      </p>
      <p className={styles.main__experience}>
        {lang === LANG_EN
          ? dictionaryEnglish.otherWork
          : dictionaryUkrainian.otherWork}
      </p>
    </div>
  );
};

export default ExperienceBox;
