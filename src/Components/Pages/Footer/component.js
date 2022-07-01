import React from 'react';
import { contactList } from '../../Data/component';
import { nanoid } from 'nanoid';
//
import styles from './index.m.css';
import Logo from '../../Logo/component';

const Footer = () => {
  return (
    <footer className={styles.footer}>
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
          Designed by
          <Logo />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
