import React from 'react';
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';

import styles from '../index.m.css';
import { useTranslation } from 'react-i18next';
import { headerLink } from '../../../Data/component';

const NavList = ({ handleClick }) => {
  const { t } = useTranslation();

  return (
    <ul className="flex__container header__list">
      {headerLink.map(({ link, title }) => {
        return (
          <li key={nanoid()}>
            <Link to={link} className={styles.header__link}>
              {t(title)}
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
          {t('contact')}
        </button>
      </li>
    </ul>
  );
};

export default NavList;
