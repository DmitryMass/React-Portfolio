import React from 'react';
import { LANG_EN, useLang } from '../../../LangContext';
import {
  dictionaryEnglish,
  dictionaryUkrainian,
} from '../../../LangContext/LangNoteBook';
import Title from '../AboutBox/component';
import styles from '../index.m.css';

const SummaryBox = () => {
  const { lang } = useLang();

  return (
    <div className={styles.main__summary}>
      <Title
        children={
          lang === LANG_EN
            ? dictionaryEnglish.summaryTitle
            : dictionaryUkrainian.summaryTitle
        }
        classStyle={styles.main__mySkill}
      />
      <p className={styles.main__skill}>
        {lang === LANG_EN
          ? dictionaryEnglish.summary
          : dictionaryUkrainian.summary}
      </p>
      <a
        className={styles.main__project}
        href="https://github.com/DmitryMass/ContactList_Redux_ReduxThunk"
        target="blank"
      >
        CRUD Contacts (React-Redux / Redux-Thunk / Formik(Yup) etc..) <br />
        MockApi Server
      </a>
      <a
        className={styles.main__project}
        href="https://github.com/DmitryMass/CRUD_Todo_JavaScript"
        target="blank"
      >
        CRUD TodoList with MockApi Server
      </a>
      <a
        className={styles.main__project}
        href="https://github.com/DmitryMass/CRUD_TodoList_React"
        target="blank"
      >
        CRUD TodoList with MockApi (React / React Hooks)
      </a>
      <a
        className={styles.main__project}
        href="https://github.com/DmitryMass/Weather-App"
        target="blank"
      >
        Weather-App
      </a>
      <a
        className={styles.main__project}
        href="https://github.com/DmitryMass/projectAnalytics"
        target="blank"
      >
        Project Analytics
      </a>
      <a
        className={styles.main__project}
        href=" https://github.com/DmitryMass/Air-Alert-Map"
        target="blank"
      >
        Air-Alert-Map
      </a>
      <div className={styles.main__skill}>
        {lang === LANG_EN ? dictionaryEnglish.myGit : dictionaryUkrainian.myGit}
        <a
          className={styles.main__project}
          href=" https://github.com/DmitryMass"
          target="blank"
        >
          https://github.com/DmitryMass
        </a>
      </div>
    </div>
  );
};

export default SummaryBox;
