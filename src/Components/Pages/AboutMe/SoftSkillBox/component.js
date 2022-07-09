import React from 'react';
import { LANG_EN, useLang } from '../../../LangContext';
import {
  dictionaryEnglish,
  dictionaryUkrainian,
} from '../../../LangContext/LangNoteBook';
import Title from '../AboutBox/component';
import styles from '../index.m.css';

const SoftSkillsBox = () => {
  const { lang } = useLang();

  return (
    <div className={styles.main__softSkills}>
      <Title
        children={
          lang === LANG_EN
            ? dictionaryEnglish.softSkillTitle
            : dictionaryUkrainian.softSkillTitle
        }
        classStyle={styles.main__mySkill}
      />
      <ul>
        <li className={styles.main__skill}>
          {lang === LANG_EN
            ? dictionaryEnglish.adaptability
            : dictionaryUkrainian.adaptability}
        </li>
        <li className={styles.main__skill}>
          {lang === LANG_EN
            ? dictionaryEnglish.resultOriented
            : dictionaryUkrainian.resultOriented}
        </li>
        <li className={styles.main__skill}>
          {lang === LANG_EN
            ? dictionaryEnglish.teamworker
            : dictionaryUkrainian.teamworker}
        </li>
      </ul>
    </div>
  );
};

export default SoftSkillsBox;
