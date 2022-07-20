import React, { useState } from 'react';
import Slide from './Slide/component';
import useTranformSlide from './Slide/Transform/component';

import styles from './index.m.css';

import analytics from '../../../Assets/Images/analytics.png';
import todo from '../../../Assets/Images/CRUDTodo.png';
import clock from '../../../Assets/Images/clocks.png';
import weather from '../../../Assets/Images/weather.png';
import myPortfolio from '../../../Assets/Images/portfolio.png';
import contacts from '../../../Assets/Images/contacts.png';
import todoReact from '../../../Assets/Images/crud-todo-react.png';
import rickAndMorty from '../../../Assets/Images/ricknmorty.png';
import uiChat from '../../../Assets/Images/uichat.png';

import arrowLeft from '../../../Assets/Icons/arrow-left.svg';
import arrowRight from '../../../Assets/Icons/arrow-right.svg';
import { LANG_EN, useLang } from '../../LangContext';
import {
  dictionaryEnglish,
  dictionaryUkrainian,
} from '../../LangContext/LangNoteBook';

const Portfolio = () => {
  const { slideTransform, nextSlide, prevSlide } = useTranformSlide();
  const { lang } = useLang();

  return (
    <article className={styles.slide__menu}>
      <div className="container">
        <div className={styles.slide__wrapper}>
          <div
            className={styles.slide__inner}
            style={{ transform: `translateX(-${slideTransform}%)` }}
          >
            <Slide
              link="https://github.com/DmitryMass/Rick_And_Morty_React-Redux"
              img={rickAndMorty}
              description={
                lang === LANG_EN
                  ? dictionaryEnglish.rickMorty
                  : dictionaryUkrainian.rickMorty
              }
            >
              {lang === LANG_EN
                ? dictionaryEnglish.portfolioLink
                : dictionaryUkrainian.portfolioLink}
            </Slide>
            <Slide
              link="https://github.com/DmitryMass/UI-Chat_Redux-Websocket"
              img={uiChat}
              description={
                lang === LANG_EN
                  ? dictionaryEnglish.uichat
                  : dictionaryUkrainian.uichat
              }
            >
              {lang === LANG_EN
                ? dictionaryEnglish.portfolioLink
                : dictionaryUkrainian.portfolioLink}
            </Slide>
            <Slide
              link="https://github.com/DmitryMass/ContactList_Redux_ReduxThunk"
              img={contacts}
              description={
                lang === LANG_EN
                  ? dictionaryEnglish.crudContacts
                  : dictionaryUkrainian.crudContacts
              }
            >
              {lang === LANG_EN
                ? dictionaryEnglish.portfolioLink
                : dictionaryUkrainian.portfolioLink}
            </Slide>
            <Slide
              link="https://github.com/DmitryMass/projectAnalytics"
              img={analytics}
              description={
                lang === LANG_EN
                  ? dictionaryEnglish.analytics
                  : dictionaryUkrainian.analytics
              }
            >
              {lang === LANG_EN
                ? dictionaryEnglish.portfolioLink
                : dictionaryUkrainian.portfolioLink}
            </Slide>
            <Slide
              link="https://github.com/DmitryMass/CRUD_TodoList_React"
              img={todoReact}
              description={
                lang === LANG_EN
                  ? dictionaryEnglish.reactTodo
                  : dictionaryUkrainian.reactTodo
              }
            >
              {lang === LANG_EN
                ? dictionaryEnglish.portfolioLink
                : dictionaryUkrainian.portfolioLink}
            </Slide>
            <Slide
              link="https://github.com/DmitryMass/CRUD_Todo_JavaScript"
              img={todo}
              description={
                lang === LANG_EN
                  ? dictionaryEnglish.jsTodo
                  : dictionaryUkrainian.jsTodo
              }
            >
              {lang === LANG_EN
                ? dictionaryEnglish.portfolioLink
                : dictionaryUkrainian.portfolioLink}
            </Slide>
            <Slide
              img={clock}
              link="https://github.com/DmitryMass/Clock-and-StopWatch"
              description={
                lang === LANG_EN
                  ? dictionaryEnglish.clock
                  : dictionaryUkrainian.clock
              }
            >
              {lang === LANG_EN
                ? dictionaryEnglish.portfolioLink
                : dictionaryUkrainian.portfolioLink}
            </Slide>
            <Slide
              img={weather}
              link="https://github.com/DmitryMass/Weather-App"
              description={
                lang === LANG_EN
                  ? dictionaryEnglish.weather
                  : dictionaryUkrainian.weather
              }
            >
              {lang === LANG_EN
                ? dictionaryEnglish.portfolioLink
                : dictionaryUkrainian.portfolioLink}
            </Slide>
            <Slide
              img={myPortfolio}
              link="https://github.com/DmitryMass/React-Portfolio"
              description={
                lang === LANG_EN
                  ? dictionaryEnglish.myPortfolio
                  : dictionaryUkrainian.myPortfolio
              }
            >
              {lang === LANG_EN
                ? dictionaryEnglish.portfolioLink
                : dictionaryUkrainian.portfolioLink}
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
