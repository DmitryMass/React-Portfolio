import React from 'react';
import styles from './index.m.css';

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

export default Skill;
