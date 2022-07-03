import React, { useState } from 'react';
import Slide from './Slide/component';

import styles from './index.m.css';

import analytics from '../../../Assets/Images/analytics.png';
import todo from '../../../Assets/Images/CRUDTodo.png';
import clock from '../../../Assets/Images/clocks.png';
import weather from '../../../Assets/Images/weather.png';
import myPortfolio from '../../../Assets/Images/portfolio.png';

const Portfolio = () => {
  const [slideTransform, setSlideTransform] = useState(0);

  const nextSlide = () => {
    setSlideTransform((prev) => {
      prev += 20;
      if (prev > 80) {
        prev = 0;
      }
      return prev;
    });
  };

  const prevSlide = () => {
    setSlideTransform((prev) => {
      prev -= 20;
      if (prev < 0) {
        prev = 80;
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
              link="https://github.com/DmitryMass/projectAnalytics"
              img={analytics}
              description="Analytics Website (1 page) HTML/SCSS/JavaScript"
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
        <div className="slide__navigation">
          <button onClick={prevSlide} type="button">
            Prev
          </button>
          <button onClick={nextSlide} type="button">
            Next
          </button>
        </div>
      </div>
    </article>
  );
};

export default Portfolio;
