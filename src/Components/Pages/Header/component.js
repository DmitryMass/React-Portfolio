import { nanoid } from 'nanoid';
import React from 'react';
import { Link } from 'react-router-dom';
//
import { headerLink } from '../../Data/component';
//
import Logo from '../../Logo/component';
import github from '../../../Assets/Icons/github.svg';
import linkedin from '../../../Assets/Icons/linkedin.svg';
//
import styles from './index.m.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container header__flex">
        <Logo />
        <nav>
          <ul className="flex__container">
            {headerLink.map((item) => {
              return (
                <li key={nanoid()}>
                  <Link to={item.link} className={styles.header__link}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="flex__container">
          <a
            className={styles.header__network}
            href="https://github.com/DmitryMass"
            target="blank"
          >
            <object data={github} type=""></object>
          </a>
          <a
            className={styles.header__network}
            href="https://www.linkedin.com/in/dmitry-moskalenko-69a19a226/"
            target="blank"
          >
            <object data={linkedin} type=""></object>
          </a>
        </div>
      </div>
    </header>
  );
};
export default Header;
