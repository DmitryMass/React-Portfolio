import React from 'react';

import photo from '../../../Assets/Images/MyPhoto.png';
import tag from '../../../Assets/Icons/codes.svg';
import styles from './index.m.css';
import Skills from '../../Skills/component';
import Btn from '../../Button/component';

import { useTranslation } from 'react-i18next';

const Main = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className={styles.section}>
        <div className={`container flex__wrap ${styles.section__main}`}>
          <div className={styles.section__about}>
            <p className={styles.section__name}>{t('myName')}</p>
            <h1 className={styles.section__title}>Front End Developer</h1>
            <p className={styles.section__info}>{t('preview')}</p>
            <div className={styles.section__href}>
              <Btn children={t('aboutBtn')} link={styles.section__link} />
              <div className={styles.section__tag}>
                <img className={styles.section__tag_first} src={tag} alt="" />
                <img className={styles.section__tag_second} src={tag} alt="" />
                <img className={styles.section__tag_third} src={tag} alt="" />
              </div>
            </div>
          </div>
          <div className={styles.section__me}>
            <img className={styles.section__photo} src={photo} alt="My Photo" />
          </div>
        </div>
      </section>
      <Skills
        btnStyle={styles.section__href}
        linkStyle={styles.section__link}
      />
    </>
  );
};

export default Main;
