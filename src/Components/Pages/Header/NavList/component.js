import React from 'react';
import { Link } from 'react-router-dom';
import { LANG_EN, useLang } from '../../../LangContext';
import {
  dictionaryEnglish,
  dictionaryUkrainian,
} from '../../../LangContext/LangNoteBook';
import { nanoid } from 'nanoid';

import styles from '../index.m.css';

const NavList = ({ handleClick }) => {
  const { lang } = useLang();

  return (
    <ul className="flex__container header__list">
      {lang === LANG_EN
        ? dictionaryEnglish.headerLink.map((item) => {
            return (
              <li key={nanoid()}>
                <Link to={item.link} className={styles.header__link}>
                  {item.title}
                </Link>
              </li>
            );
          })
        : dictionaryUkrainian.headerLink.map((item) => {
            return (
              <li key={nanoid()}>
                <Link to={item.link} className={styles.header__link}>
                  {item.title}
                </Link>
              </li>
            );
          })}
      <li>
        <button
          onClick={handleClick}
          className={`default__btn ${styles.header__link}`}
          type="button"
        >
          {lang === LANG_EN ? 'Contact' : 'Контакти'}
        </button>
      </li>
    </ul>
  );
};

export default NavList;
