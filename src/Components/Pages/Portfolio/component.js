import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Zoom, Navigation, FreeMode } from 'swiper';
import Slide from './Slide/component';
import styles from './index.m.css';
import { nanoid } from 'nanoid';
import { useTranslation } from 'react-i18next';
import { PORTFOLIO } from '../../Constant/component';

const Portfolio = () => {
  const { t } = useTranslation();

  return (
    <article className={styles.slide__menu}>
      <div className="container">
        <Swiper
          zoom={true}
          navigation={true}
          freeMode={true}
          modules={[Navigation, FreeMode, Zoom]}
          grabCursor={true}
          loop={true}
        >
          {PORTFOLIO.map(({ img, description, link }) => {
            return (
              <SwiperSlide key={nanoid()}>
                <Slide img={img} description={t(`${description}`)} link={link}>
                  {t('portfolioLink')}
                </Slide>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </article>
  );
};

export default Portfolio;
