import React from 'react';
import { LANG_EN, useLang } from '../../../LangContext';
import {
  dictionaryEnglish,
  dictionaryUkrainian,
} from '../../../LangContext/LangNoteBook';
import Title from '../AboutBox/component';
import styles from '../index.m.css';

const LanguageBox = () => {
  const { lang } = useLang();
  return (
    <div className={styles.main__languageBox}>
      <Title
        children={
          lang === LANG_EN
            ? dictionaryEnglish.additionalInfo
            : dictionaryUkrainian.additionalInfo
        }
        classStyle={styles.main__mySkill}
      />
      <p className={styles.main__skill}>
        {lang === LANG_EN
          ? dictionaryEnglish.language
          : dictionaryUkrainian.language}
      </p>
    </div>
  );
};

export default LanguageBox;
