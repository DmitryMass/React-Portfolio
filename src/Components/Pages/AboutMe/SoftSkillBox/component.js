import React from 'react';
import Title from '../AboutBox/component';
import styles from '../index.m.css';

import { useTranslation } from 'react-i18next';

const SoftSkillsBox = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.main__softSkills}>
      <Title children={t('softSkillTitle')} classStyle={styles.main__mySkill} />
      <ul>
        <li className={styles.main__skill}>{t('adaptability')}</li>
        <li className={styles.main__skill}>{t('communication')}</li>
        <li className={styles.main__skill}>{t('resultOriented')}</li>
        <li className={styles.main__skill}>{t('teamworker')}</li>
      </ul>
    </div>
  );
};

export default SoftSkillsBox;
