import React from 'react';

const BurgerBtn = ({ menuActive, setMenuActive }) => {
  return (
    <button
      className="burger__btn "
      onClick={() => setMenuActive(!menuActive)}
    />
  );
};

export default BurgerBtn;
