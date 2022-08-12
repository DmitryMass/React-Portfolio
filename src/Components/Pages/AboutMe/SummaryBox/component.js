import React from 'react';
import { useTranslation } from 'react-i18next';

import Title from '../AboutBox/component';
import styles from '../index.m.css';

const SummaryBox = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.main__summary}>
      <Title children={t('summaryTitle')} classStyle={styles.main__mySkill} />
      <p className={styles.main__skill}>{t('summary')}</p>
      <a
        className={styles.main__project}
        href="https://github.com/DmitryMass/Wallet-App_ftech"
        target="blank"
      >
        Wallet-App React / RTK Query (task for the position Trainee/Junior)
      </a>
      <a
        className={styles.main__project}
        href="https://github.com/DmitryMass/Rick_And_Morty_React-Redux"
        target="blank"
      >
        Rick and Morty Fan Page (React/Redux)
      </a>
      <a
        className={styles.main__project}
        href="https://github.com/DmitryMass/UI-Chat_Redux-Websocket"
        target="blank"
      >
        Pixel Perfect Chat - task from workshop (React/Redux/WebSocket)
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
        href="https://github.com/DmitryMass/React-Redux_Mini-Store"
        target="blank"
      >
        React/Redux Mini-Store
      </a>
      <a
        className={styles.main__project}
        href="https://github.com/DmitryMass/ContactList_Redux_ReduxThunk"
        target="blank"
      >
        CRUD Contacts (React-Redux / Redux-Thunk / Formik(Yup) etc..) <br />
        MockApi Server
      </a>
      <a
        className={styles.main__project}
        href="https://github.com/DmitryMass/CRUD_TodoList_React"
        target="blank"
      >
        CRUD TodoList with MockApi (React / React Hooks)
      </a>

      <div className={styles.main__skill}>
        {t('myGit')}
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
