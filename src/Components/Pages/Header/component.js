import React, { useState } from 'react';
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
import Menu from './BurgerMenu/component';
import BurgerBtn from './BurgerBtn/component';
//
import PropTypes from 'prop-types';

const Header = ({ handleClick, scrolls }) => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <header ref={scrolls} className={styles.header}>
      <div className="container header__flex">
        <Logo />
        <nav>
          <ul className="flex__container header__list">
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
          <BurgerBtn menuActive={menuActive} setMenuActive={setMenuActive} />
          <Menu
            menuActive={menuActive}
            setMenuActive={setMenuActive}
            header={<Logo />}
            linkStyle={styles.header__network}
            gitHub={github}
            linkedin={linkedin}
          />
        </nav>
        <div className="header__gitHub">
          <GitnLinkedin
            linkStyle={styles.header__network}
            gitHub={github}
            linkedin={linkedin}
          />
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  scrolls: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
};
export default Header;
