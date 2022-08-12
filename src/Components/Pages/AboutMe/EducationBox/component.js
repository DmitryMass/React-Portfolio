import React from 'react';
import { useTranslation } from 'react-i18next';
import Title from '../AboutBox/component';
import styles from '../index.m.css';

const EducationBox = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.main__education}>
      <Title children={t('educationTitle')} classStyle={styles.main__mySkill} />
      <h2 className={styles.main__subtitle}>{t('university')}</h2>
      <p className={styles.main__degree}>{t('degree')}</p>
      <Title
        children={t('additionalEducation')}
        classStyle={styles.main__mySkill}
      />
      <p className={styles.main__degree}>{t('basicCourse')}</p>
      <p className={styles.main__degree}>{t('advancedCourse')}</p>
    </div>
  );
};

export default EducationBox;
