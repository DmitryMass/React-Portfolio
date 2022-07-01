import React from 'react';
import styles from './index.m.css';
import EducationBox from './EducationBox/component';
import SkillBox from './SkillBox/component';
// import Title from './AboutBox/component';
import SummaryBox from './SummaryBox/component';
import ExperienceBox from './ExperienceBox/component';
import SoftSkillsBox from './SoftSkillBox/component';
import LanguageBox from './LanguageBox/component';

const About = () => {
  return (
    <main className={styles.main}>
      <div className="container">
        <div className="about__flex">
          <SkillBox />
          <SummaryBox />
          <EducationBox />
        </div>
        <div className="about__flex ">
          <ExperienceBox />
          <SoftSkillsBox />
          <LanguageBox />
        </div>
      </div>
    </main>
  );
};

export default About;
