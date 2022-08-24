import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Zoom, Navigation, FreeMode, Autoplay } from 'swiper';
import Slide from './Slide/component';
import styles from './index.m.css';
import { nanoid } from 'nanoid';
import { useTranslation } from 'react-i18next';
import { PORTFOLIO } from '../../Constant/component';

const Portfolio = () => {
  const { t } = useTranslation();

  return (
    <article className={styles.slide__menu}>
      <div className='container'>
        <h3 className={styles.slide__title}>{t('portfolio')}</h3>
        <Swiper
          zoom={true}
          navigation={true}
          freeMode={true}
          modules={[Navigation, FreeMode, Autoplay, Zoom]}
          grabCursor={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
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
