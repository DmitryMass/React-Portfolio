import React from 'react';
import Title from '../AboutBox/component';
import styles from '../index.m.css';

const ExperienceBox = () => {
  return (
    <div className={styles.main__experienceBox}>
      <Title children="Work Experience" classStyle={styles.main__mySkill} />
      <h2 className={styles.main__subtitle}>Sales expert / Acting director</h2>
      <p className={styles.main__experience}>Sale of non-food products</p>
      <p className={styles.main__experience}>Interview of new employees</p>
      <p className={styles.main__experience}>
        Work with goods, cash registers, deliveries, processing of documents,
        invoices, etc
      </p>
    </div>
  );
};

export default ExperienceBox;
