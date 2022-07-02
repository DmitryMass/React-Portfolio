import React from 'react';
import { Link } from 'react-router-dom';
//
import { headerLink } from '../../Data/component';
import GitnLinkedin from './GitnLinkedin/component';
import Logo from '../../Logo/component';
//
import { nanoid } from 'nanoid';
import github from '../../../Assets/Icons/github.svg';
import linkedin from '../../../Assets/Icons/linkedin.svg';
//
import styles from './index.m.css';

const Header = ({ handleClick, scrolls }) => {
  return (
    <header ref={scrolls} className={styles.header}>
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
            <li>
              <button
                onClick={handleClick}
                className={`default__btn ${styles.header__link}`}
                type="button"
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
        <GitnLinkedin
          linkStyle={styles.header__network}
          gitHub={github}
          linkedin={linkedin}
        />
      </div>
    </header>
  );
};
export default Header;
