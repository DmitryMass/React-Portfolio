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
      <div>
        <h2 className={styles.main__subtitle}>{t('frontPosition')}</h2>
        <h2 className={styles.main__subtitle}>{t('frontFreelance')}</h2>
        <p className={styles.main__experience}>{t('collaborated')}</p>
        <p className={styles.main__experience}>{t('createdMap')}</p>
        <p className={styles.main__experience}>{t('maintance')}</p>
      </div>
      <br />
      <div>
        <h2 className={styles.main__subtitle}>{t('position')}</h2>
        <h2 className={styles.main__subtitle}>{t('positionAllo')}</h2>
        <p className={styles.main__experience}>{t('goodsSales')}</p>
        <p className={styles.main__experience}>{t('interview')}</p>
        <p className={styles.main__experience}>{t('otherWork')}</p>
      </div>
    </div>
  );
};

export default ExperienceBox;
