import React from 'react';
import { contactList } from '../../Data/component';
import { nanoid } from 'nanoid';
//
import styles from './index.m.css';
import Logo from '../../Logo/component';
import PropTypes from 'prop-types';

import { useTranslation } from 'react-i18next';

const Footer = ({ scrolls, handleLogoClick }) => {
  const { t } = useTranslation();
  return (
    <footer ref={scrolls} className={styles.footer}>
      <div className="container flex__wrap-wrap">
        <ul>
          {contactList.map(({ title, picture, href }) => {
            return (
              <li
                className={`footer__flex ${styles.footer__li}`}
                key={nanoid()}
              >
                <object data={picture} type=""></object>
                <a className={styles.footer__link} href={href} target="blank">
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
        <div className={styles.footer__designed}>
          {t('disignedBy')}
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
