import React from 'react';
import Title from '../AboutBox/component';
import styles from '../index.m.css';

const EducationBox = () => {
  return (
    <div className={styles.main__education}>
      <Title children="Education" classStyle={styles.main__mySkill} />
      <h2 className={styles.main__subtitle}>Dnipro University of Technology</h2>
      <p className={styles.main__degree}>
        2015-2019 Bachelor Degree, professional qualification: Specialist in the
        field of mining
      </p>
      <Title
        children="Additional Education"
        classStyle={styles.main__mySkill}
      />
      <p className={styles.main__degree}>
        Basic Course - Front End Basic (HTML/CSS/SCSS) 08.2021 - 11.2021
      </p>
      <p className={styles.main__degree}>
        In-depth course - Front End Pro (Advanced). JavaScript + React 12.2021 -
        06.2022
      </p>
    </div>
  );
};

export default EducationBox;
