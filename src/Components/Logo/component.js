import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../Constant/component';
import styles from './index.m.css';
import tagLogo from '../../Assets/Icons/tags.svg';

import PropTypes from 'prop-types';

const Logo = ({ handleLogoClick, logoStyle }) => {
  return (
    <div className={logoStyle}>
      <Link onClick={handleLogoClick} to={ROUTES.HOME} className={styles.logo}>
        <object data={tagLogo} type=""></object>
        <span className={styles.jimmyCo}>Jimmy-Co</span>
      </Link>
    </div>
  );
};

Logo.propTypes = {
  handleLogoClick: PropTypes.func,
};
export default Logo;
