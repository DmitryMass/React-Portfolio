import React from 'react';
import { useTranslation } from 'react-i18next';
import Project from '../../../ProjectLink/component';

import Title from '../AboutBox/component';
import styles from '../index.m.css';

const SummaryBox = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.main__summary}>
      <Title children={t('summaryTitle')} classStyle={styles.main__mySkill} />
      <p className={styles.main__skill}>{t('summary')}</p>
      <Project />
      <div className={styles.main__skill}>
        {t('myGit')}
        <a
          className={styles.main__project}
          href=' https://github.com/DmitryMass'
          target='blank'
        >
          https://github.com/DmitryMass
        </a>
      </div>
    </div>
  );
};

export default SummaryBox;
