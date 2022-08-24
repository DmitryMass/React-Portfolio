import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper';
//
import styles from './index.m.css';
//
import Skill from './Skill-box/component';
import Btn from '../Button/component';

import PropTypes from 'prop-types';

import { useTranslation } from 'react-i18next';
import { MYSKILL } from '../Constant/component';
import { nanoid } from 'nanoid';

const Skills = ({ btnStyle, linkStyle }) => {
  const { t } = useTranslation();
  return (
    <main className={styles.main}>
      <div className='container'>
        <h3 className={styles.main__mySkill}>{t('skill')}</h3>
        <Swiper
          className={styles.main__swiper}
          freeMode={true}
          modules={[FreeMode, Autoplay]}
          grabCursor={true}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
        >
          {MYSKILL.map(({ icon, text }) => {
            return (
              <SwiperSlide key={nanoid()}>
                <Skill svgIcon={icon} children={text} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className={`${btnStyle} ${styles.main__skill__btn}`}>
          <Btn children={t('more')} link={linkStyle} />
        </div>
      </div>
    </main>
  );
};

Skills.propTypes = {
  btnStyle: PropTypes.string.isRequired,
  linkStyle: PropTypes.string.isRequired,
};

export default Skills;
