import React from 'react';
import { LANG_EN, useLang } from '../../../LangContext';
import {
  dictionaryEnglish,
  dictionaryUkrainian,
} from '../../../LangContext/LangNoteBook';
import Title from '../AboutBox/component';
import styles from '../index.m.css';

const EducationBox = () => {
  const { lang } = useLang();
  return (
    <div className={styles.main__education}>
      <Title
        children={
          lang === LANG_EN
            ? dictionaryEnglish.educationTitle
            : dictionaryUkrainian.educationTitle
        }
        classStyle={styles.main__mySkill}
      />
      <h2 className={styles.main__subtitle}>
        {lang === LANG_EN
          ? dictionaryEnglish.university
          : dictionaryUkrainian.university}
      </h2>
      <p className={styles.main__degree}>
        {lang === LANG_EN
          ? dictionaryEnglish.degree
          : dictionaryUkrainian.degree}
      </p>
      <Title
        children={
          lang === LANG_EN
            ? dictionaryEnglish.additionalEducation
            : dictionaryUkrainian.additionalEducation
        }
        classStyle={styles.main__mySkill}
      />
      <p className={styles.main__degree}>
        {lang === LANG_EN
          ? dictionaryEnglish.basicCourse
          : dictionaryUkrainian.basicCourse}
      </p>
      <p className={styles.main__degree}>
        {lang === LANG_EN
          ? dictionaryEnglish.advancedCourse
          : dictionaryUkrainian.advancedCourse}
      </p>
    </div>
  );
};

export default EducationBox;
