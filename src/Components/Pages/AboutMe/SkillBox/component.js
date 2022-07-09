import React from 'react';
import { skills } from '../../../Data/component';
import styles from '../index.m.css';
import { nanoid } from 'nanoid';
import { LANG_EN, useLang } from '../../../LangContext';
import {
  dictionaryEnglish,
  dictionaryUkrainian,
} from '../../../LangContext/LangNoteBook';

const SkillBox = () => {
  const { lang } = useLang();

  return (
    <ul className={styles.main__skillBox}>
      <li className={styles.main__mySkill}>
        {lang === LANG_EN ? dictionaryEnglish.skill : dictionaryUkrainian.skill}
      </li>
      {skills.map((item) => {
        return (
          <li className={styles.main__skill} key={nanoid()}>
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default SkillBox;
