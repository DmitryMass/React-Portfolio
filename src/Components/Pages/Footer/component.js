import React from 'react';
import { contactList } from '../../Data/component';
import { nanoid } from 'nanoid';
//
import styles from './index.m.css';
import Logo from '../../Logo/component';
import PropTypes from 'prop-types';
import { LANG_EN, useLang } from '../../LangContext';
import {
  dictionaryEnglish,
  dictionaryUkrainian,
} from '../../LangContext/LangNoteBook';

const Footer = ({ scrolls, handleLogoClick }) => {
  const { lang } = useLang();
  return (
    <footer ref={scrolls} className={styles.footer}>
      <div className="container flex__wrap-wrap">
        <ul>
          {contactList.map(({ title, picture }) => {
            return (
              <li
                className={`footer__flex ${styles.footer__li}`}
                key={nanoid()}
              >
                <object data={picture} type=""></object>
                {title}
              </li>
            );
          })}
        </ul>
        <div className={styles.footer__designed}>
          {lang === LANG_EN
            ? dictionaryEnglish.disignedBy
            : dictionaryUkrainian.disignedBy}
          <Logo
            handleLogoClick={handleLogoClick}
            logoStyle={styles.footer__logo}
          />
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  scrolls: PropTypes.object.isRequired,
  handleLogoClick: PropTypes.func.isRequired,
};

export default Footer;
