import React from 'react';
import { PROJECTS_LIST } from '../Constant/component';
import { nanoid } from 'nanoid';

import styles from './index.m.css';

const Project = () => {
  return (
    <>
      {PROJECTS_LIST.map(({ link, text }) => {
        return (
          <a
            key={nanoid()}
            className={styles.main__project}
            href={link}
            target='blank'
          >
            {text}
          </a>
        );
      })}
    </>
  );
};

export default Project;
