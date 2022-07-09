import React, { useState } from 'react';
//
import GitnLinkedin from './GitnLinkedin/component';
import Menu from './BurgerMenu/component';
import Logo from '../../Logo/component';
import BurgerBtn from './BurgerBtn/component';
import NavList from './NavList/component';
//
import github from '../../../Assets/Icons/github.svg';
import linkedin from '../../../Assets/Icons/linkedin.svg';
//
import styles from './index.m.css';
//
import PropTypes from 'prop-types';
import LangBtn from '../../LangContext/ChangeBtn';

const Header = ({ handleClick, scrolls }) => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <header ref={scrolls} className={styles.header}>
      <div className="container header__flex">
        <Logo logoStyle={styles.header__logo} />
        <nav>
          <NavList
            ulStyles="flex__container header__list"
            handleClick={handleClick}
          />
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
        <div className={styles.header__box}>
          <div className="header__gitHub">
            <GitnLinkedin
              linkStyle={styles.header__network}
              gitHub={github}
              linkedin={linkedin}
            />
          </div>
          <LangBtn />
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
