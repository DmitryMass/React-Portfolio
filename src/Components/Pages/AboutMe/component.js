import React from 'react';
import styles from './index.m.css';
import EducationBox from './EducationBox/component';
import SkillBox from './SkillBox/component';
// import Title from './AboutBox/component';
import SummaryBox from './SummaryBox/component';
import ExperienceBox from './ExperienceBox/component';
import SoftSkillsBox from './SoftSkillBox/component';
import LanguageBox from './LanguageBox/component';
import Certificate from './Certificate/component';

const About = () => {
  return (
    <main className={styles.main}>
      <div className="container">
        <SummaryBox />
        <div className={`cv__flex ${styles.info__second}`}>
          <SkillBox />
          <div className="info__third">
            <EducationBox />
            <LanguageBox />
          </div>
        </div>
        <div className={styles.info__last}>
          <ExperienceBox />
          <SoftSkillsBox />
        </div>
        <Certificate />
      </div>
    </main>
  );
};

export default About;
