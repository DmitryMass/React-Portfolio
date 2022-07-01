import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../Constant/component';

const Btn = ({ children, link }) => {
  return (
    <Link className={link} to={ROUTES.ABOUT}>
      {children}
    </Link>
  );
};

export default Btn;
