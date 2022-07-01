import React from 'react';
import Title from '../AboutBox/component';
import styles from '../index.m.css';

const SoftSkillsBox = () => {
  return (
    <div className={styles.main__softSkills}>
      <Title children="Soft Skills" classStyle={styles.main__mySkill} />
      <ul>
        <li className={styles.main__skill}>Adaptability</li>
        <li className={styles.main__skill}>Result oriented</li>
        <li className={styles.main__skill}>Teamwork</li>
      </ul>
    </div>
  );
};

export default SoftSkillsBox;
