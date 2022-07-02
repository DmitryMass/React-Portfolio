import React from 'react';
import PropTypes from 'prop-types';

const BurgerBtn = ({ menuActive, setMenuActive }) => {
  return (
    <button
      className="burger__btn "
      onClick={() => setMenuActive(!menuActive)}
    />
  );
};

BurgerBtn.propTypes = {
  menuActive: PropTypes.bool.isRequired,
  setMenuActive: PropTypes.func.isRequired,
};

export default BurgerBtn;
