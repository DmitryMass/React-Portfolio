import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../Constant/component';
import styles from './index.m.css';
import tagLogo from '../../Assets/Icons/tags.svg';

const Logo = () => {
  return (
    <div className="header__logo">
      <Link to={ROUTES.HOME} className={styles.logo}>
        <object data={tagLogo} type=""></object>
        <span className={styles.jimmyCo}>Jimmy-Co</span>
      </Link>
    </div>
  );
};

export default Logo;
