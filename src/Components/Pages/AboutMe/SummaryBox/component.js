import React from 'react';
import Title from '../AboutBox/component';
import styles from '../index.m.css';

const SummaryBox = () => {
  return (
    <div className={styles.main__summary}>
      <Title children="Summary" classStyle={styles.main__mySkill} />
      <p className={styles.main__skill}>
        I'm looking for a full-time/part-time or remote job as a Trainee/Junior
        Front End Developer. I have non-commercial experience in creating
        websites. Technologies used: HTML, CSS(SCSS), JavaScript. Basic: React,
        NodeJs(Fastify). I would like to invite you to review some projects in
        my portfolio:
      </p>
      <a
        className={styles.main__project}
        href="https://github.com/DmitryMass/CRUD_Todo_JavaScript"
        target="blank"
      >
        CRUD TodoList with MockApi Server
      </a>
      <a
        className={styles.main__project}
        href="https://github.com/DmitryMass/Weather-App"
        target="blank"
      >
        Weather-App
      </a>
      <a
        className={styles.main__project}
        href="https://github.com/DmitryMass/projectAnalytics"
        target="blank"
      >
        Project Analytics
      </a>
      <a
        className={styles.main__project}
        href="https://github.com/DmitryMass/Server-For-Store/tree/master/server"
        target="blank"
      >
        Server for Store
      </a>
      <a
        className={styles.main__project}
        href=" https://github.com/DmitryMass/Air-Alert-Map"
        target="blank"
      >
        Air-Alert-Map
      </a>
      <div className={styles.main__skill}>
        And other in my profile on GitHub :
        <a
          className={styles.main__project}
          href=" https://github.com/DmitryMass"
          target="blank"
        >
          https://github.com/DmitryMass
        </a>
      </div>
    </div>
  );
};

export default SummaryBox;
