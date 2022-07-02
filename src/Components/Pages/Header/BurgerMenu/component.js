import React from 'react';
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { headerLink } from '../../../Data/component';
import GitnLinkedin from '../GitnLinkedin/component';

import stylesMenu from './index.m.css';
import styles from '../index.m.css';
import BurgerBtn from '../BurgerBtn/component';

const Menu = ({
  header,
  linkStyle,
  gitHub,
  linkedin,
  menuActive,
  setMenuActive,
}) => {
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
          {headerLink.map((item) => {
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

export default Menu;
