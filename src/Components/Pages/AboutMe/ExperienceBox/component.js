import React from 'react';
import { useTranslation } from 'react-i18next';
import Title from '../AboutBox/component';
import styles from '../index.m.css';

const ExperienceBox = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.main__experienceBox}>
      <Title
        children={t('experienceTitle')}
        classStyle={styles.main__mySkill}
      />
      <h2 className={styles.main__subtitle}>{t('position')}</h2>
      <p className={styles.main__experience}>{t('goodsSales')}</p>
      <p className={styles.main__experience}>{t('interview')}</p>
      <p className={styles.main__experience}>{t('otherWork')}</p>
    </div>
  );
};

export default ExperienceBox;
