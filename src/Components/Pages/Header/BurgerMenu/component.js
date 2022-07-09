import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { headerLink } from '../../../Data/component';
import GitnLinkedin from '../GitnLinkedin/component';

import styles from '../index.m.css';
import stylesMenu from './index.m.css';

import PropTypes from 'prop-types';
import { LANG_EN, useLang } from '../../../LangContext';
import {
  dictionaryEnglish,
  dictionaryUkrainian,
} from '../../../LangContext/LangNoteBook';

const Menu = ({
  header,
  linkStyle,
  gitHub,
  linkedin,
  menuActive,
  setMenuActive,
}) => {
  const { lang } = useLang();
  return (
    <div
      className={
        menuActive ? `${stylesMenu.menu} ${stylesMenu.active}` : stylesMenu.menu
      }
    >
      <div
        className={stylesMenu.menu__content}
        onClick={() => setMenuActive(!menuActive)}
      >
        <div
          className={styles.menu__header}
          onClick={() => setMenuActive(!menuActive)}
        >
          {header}
        </div>
        <ul className={stylesMenu.menu__list}>
          {lang === LANG_EN
            ? dictionaryEnglish.headerLink.map((item) => {
                return (
                  <li key={nanoid()} className={stylesMenu.menu__link}>
                    <Link
                      onClick={() => setMenuActive(!menuActive)}
                      to={item.link}
                      className={`${styles.header__link} ${stylesMenu.menu__href}`}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })
            : dictionaryUkrainian.headerLink.map((item) => {
                return (
                  <li key={nanoid()} className={stylesMenu.menu__link}>
                    <Link
                      onClick={() => setMenuActive(!menuActive)}
                      to={item.link}
                      className={`${styles.header__link} ${stylesMenu.menu__href}`}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
        </ul>
        <GitnLinkedin
          linkStyle={linkStyle}
          gitHub={gitHub}
          linkedin={linkedin}
        />
      </div>
    </div>
  );
};

Menu.propTypes = {
  header: PropTypes.object.isRequired,
  linkStyle: PropTypes.string.isRequired,
  gitHub: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  menuActive: PropTypes.bool.isRequired,
  setMenuActive: PropTypes.func.isRequired,
};

export default Menu;
