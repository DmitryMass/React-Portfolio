import React from 'react';
import { skills } from '../../../Data/component';
import styles from '../index.m.css';
import { nanoid } from 'nanoid';
import { useTranslation } from 'react-i18next';

const SkillBox = () => {
  const { t } = useTranslation();

  return (
    <ul className={styles.main__skillBox}>
      <li className={styles.main__mySkill}>{t('skill')}</li>
      {skills.map((item) => {
        return (
          <li className={styles.main__skill} key={nanoid()}>
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default SkillBox;
