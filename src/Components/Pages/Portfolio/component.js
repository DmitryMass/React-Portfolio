import React, { useState } from 'react';
import Slide from './Slide/component';

import styles from './index.m.css';

import analytics from '../../../Assets/Images/analytics.png';
import todo from '../../../Assets/Images/CRUDTodo.png';
import clock from '../../../Assets/Images/clocks.png';
import weather from '../../../Assets/Images/weather.png';
import myPortfolio from '../../../Assets/Images/portfolio.png';
import contacts from '../../../Assets/Images/contacts.png';
import todoReact from '../../../Assets/Images/crud-todo-react.png';
import arrowLeft from '../../../Assets/Icons/arrow-left.svg';
import arrowRight from '../../../Assets/Icons/arrow-right.svg';

const Portfolio = () => {
  const [slideTransform, setSlideTransform] = useState(0);

  const nextSlide = () => {
    setSlideTransform((prev) => {
      prev += 14.28;
      if (prev > 85.7) {
        prev = 0;
      }
      return prev;
    });
  };

  const prevSlide = () => {
    setSlideTransform((prev) => {
      prev -= 14.28;
      if (prev < 0) {
        prev = 85.7;
      }
      return prev;
    });
  };

  return (
    <article className={styles.slide__menu}>
      <div className="container">
        <div className={styles.slide__wrapper}>
          <div
            className={styles.slide__inner}
            style={{ transform: `translateX(-${slideTransform}%)` }}
          >
            <Slide
              link="https://github.com/DmitryMass/ContactList_Redux_ReduxThunk"
              img={contacts}
              description="CRUD Contacts (React-Redux / Redux-Thunk / Formik(Yup) etc..)"
            >
              Link
            </Slide>
            <Slide
              link="https://github.com/DmitryMass/projectAnalytics"
              img={analytics}
              description="Analytics Website (1 page) HTML/SCSS/JavaScript"
            >
              Link
            </Slide>
            <Slide
              link="https://github.com/DmitryMass/CRUD_TodoList_React"
              img={todoReact}
              description="CRUD Todo List with MockApi (React / React Hooks ) "
            >
              Link
            </Slide>
            <Slide
              link="https://github.com/DmitryMass/CRUD_Todo_JavaScript"
              img={todo}
              description="CRUD Todo List with MockApi (JavaScript)"
            >
              Link
            </Slide>
            <Slide
              img={clock}
              link="https://github.com/DmitryMass/Clock-and-StopWatch"
              description="Clock and Stopwatch (JavaScript)"
            >
              Link
            </Slide>
            <Slide
              img={weather}
              link="https://github.com/DmitryMass/Weather-App"
              description="Weather App (Api openWeather) JavaScript"
            >
              Link
            </Slide>
            <Slide
              img={myPortfolio}
              link="https://github.com/DmitryMass/React-Portfolio"
              description="Portfolio (ReactJs/Hooks/Router/ModuleCSS) + Webpack/Babel"
            >
              Link
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
