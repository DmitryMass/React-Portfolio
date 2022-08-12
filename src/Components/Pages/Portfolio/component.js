import React from 'react';
import Slide from './Slide/component';
import useTranformSlide from './Slide/Transform/component';

import styles from './index.m.css';

import clock from '../../../Assets/Images/clocks.png';
import weather from '../../../Assets/Images/weather.png';
import myPortfolio from '../../../Assets/Images/portfolio.png';
import contacts from '../../../Assets/Images/contacts.png';
import todoReact from '../../../Assets/Images/crud-todo-react.png';
import rickAndMorty from '../../../Assets/Images/ricknmorty.png';
import uiChat from '../../../Assets/Images/uichat.png';
import jStore from '../../../Assets/Images/j-store.png';
import jWallet from '../../../Assets/Images/j-wallet.png';

import arrowLeft from '../../../Assets/Icons/arrow-left.svg';
import arrowRight from '../../../Assets/Icons/arrow-right.svg';

import { useTranslation } from 'react-i18next';

const Portfolio = () => {
  const { t } = useTranslation();
  const { slideTransform, nextSlide, prevSlide } = useTranformSlide();

  return (
    <article className={styles.slide__menu}>
      <div className="container">
        <div className={styles.slide__wrapper}>
          <div
            className={styles.slide__inner}
            style={{ transform: `translateX(-${slideTransform}%)` }}
          >
            <Slide
              link="https://github.com/DmitryMass/Wallet-App_ftech"
              img={jWallet}
              description={t('jWallet')}
            >
              {t('portfolioLink')}
            </Slide>
            <Slide
              link="https://github.com/DmitryMass/Rick_And_Morty_React-Redux"
              img={rickAndMorty}
              description={t('rickMorty')}
            >
              {t('portfolioLink')}
            </Slide>
            <Slide
              link="https://github.com/DmitryMass/React-Redux_Mini-Store"
              img={jStore}
              description={t('jStore')}
            >
              {t('portfolioLink')}
            </Slide>
            <Slide
              link="https://github.com/DmitryMass/UI-Chat_Redux-Websocket"
              img={uiChat}
              description={t('uichat')}
            >
              {t('portfolioLink}')}
            </Slide>
            <Slide
              link="https://github.com/DmitryMass/ContactList_Redux_ReduxThunk"
              img={contacts}
              description={t('crudContacts')}
            >
              {t('portfolioLink')}
            </Slide>

            <Slide
              link="https://github.com/DmitryMass/CRUD_TodoList_React"
              img={todoReact}
              description={t('reactTodo')}
            >
              {t('portfolioLink')}
            </Slide>

            <Slide
              img={clock}
              link="https://github.com/DmitryMass/Clock-and-StopWatch"
              description={t('clock')}
            >
              {t('portfolioLink')}
            </Slide>
            <Slide
              img={weather}
              link="https://github.com/DmitryMass/Weather-App"
              description={t('weather')}
            >
              {t('portfolioLink')}
            </Slide>
            <Slide
              img={myPortfolio}
              link="https://github.com/DmitryMass/React-Portfolio"
              description={t('myPortfolio')}
            >
              {t('portfolioLink')}
            </Slide>
          </div>
        </div>
        <div className={`${styles.slide__navigation} slider__flex `}>
          <a className={styles.slide__prev} onClick={prevSlide} type="button">
            <object
              className={styles.slide__arrow}
              data={arrowLeft}
              type=""
            ></object>
          </a>
          <a className={styles.slide__next} onClick={nextSlide} type="button">
            <object
              className={styles.slide__arrow}
              data={arrowRight}
              type=""
            ></object>
          </a>
        </div>
      </div>
    </article>
  );
};

export default Portfolio;
