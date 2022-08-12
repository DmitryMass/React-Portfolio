import React from 'react';
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { headerLink } from '../../../Data/component';
import GitnLinkedin from '../GitnLinkedin/component';

import styles from '../index.m.css';
import stylesMenu from './index.m.css';

import PropTypes from 'prop-types';

import { useTranslation } from 'react-i18next';

const Menu = ({
  header,
  linkStyle,
  gitHub,
  linkedin,
  menuActive,
  setMenuActive,
}) => {
  const { t } = useTranslation();
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
          {headerLink.map(({ link, title }) => {
            return (
              <li key={nanoid()}>
                <Link to={link} className={styles.header__link}>
                  {t(title)}
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
