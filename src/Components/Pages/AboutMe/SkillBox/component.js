import React from 'react';
import { skills } from '../../../Data/component';
import styles from '../index.m.css';
import { nanoid } from 'nanoid';

const SkillBox = () => {
  return (
    <ul className={styles.main__skillBox}>
      <li className={styles.main__mySkill}>Skills</li>
      {skills.map((item) => {
        return (
          <li className={styles.main__skill} key={nanoid()}>
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default SkillBox;
