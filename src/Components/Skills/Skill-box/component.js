import React from 'react';
import styles from './index.m.css';
import PropTypes from 'prop-types';

const Skill = ({ children, svgIcon }) => {
  return (
    <div className={styles.main__box}>
      <p className={styles.main__title}>{children}</p>
      <div className={styles.main__img}>
        <object data={svgIcon} type=""></object>
      </div>
    </div>
  );
};

Skill.propTypes = {
  children: PropTypes.string.isRequired,
  svgIcon: PropTypes.string.isRequired,
};

export default Skill;
