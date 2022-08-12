import React from 'react';
import { useTranslation } from 'react-i18next';
import Title from '../AboutBox/component';
import styles from '../index.m.css';

const LanguageBox = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.main__languageBox}>
      <Title children={t('additionalInfo')} classStyle={styles.main__mySkill} />
      <p className={styles.main__skill}>{t('language')}</p>
    </div>
  );
};

export default LanguageBox;
