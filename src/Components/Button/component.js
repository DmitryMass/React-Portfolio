import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../Constant/component';
import PropTypes from 'prop-types';

const Btn = ({ children, link }) => {
  return (
    <Link className={link} to={ROUTES.ABOUT}>
      {children}
    </Link>
  );
};

Btn.propTypes = {
  children: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Btn;
