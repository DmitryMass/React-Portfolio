import React from 'react';
//
import htmlSvg from '../../Assets/Icons/html.svg';
import cssSvg from '../../Assets/Icons/css.svg';
import webpackSvg from '../../Assets/Icons/webpack.svg';
import jsSvg from '../../Assets/Icons/js.svg';
import figmaSvg from '../../Assets/Icons/figma.svg';
import reactSvg from '../../Assets/Icons/react.svg';
import sassSvg from '../../Assets/Icons/sass.svg';
import nodejsSvg from '../../Assets/Icons/nodejs.svg';
//
import styles from './index.m.css';
//
import Skill from './Skill-box/component';
import Btn from '../Button/component';

import PropTypes from 'prop-types';
import { LANG_EN, useLang } from '../LangContext';
import {
  dictionaryEnglish,
  dictionaryUkrainian,
} from '../LangContext/LangNoteBook';

const Skills = ({ btnStyle, linkStyle }) => {
  const { lang } = useLang();
  return (
    <main className={styles.main}>
      <div className="container">
        <h3 className={styles.main__mySkill}>
          {lang === LANG_EN
            ? dictionaryEnglish.skill
            : dictionaryUkrainian.skill}
        </h3>
        <div className={` ${styles.main__skills} grid__wrap`}>
          <Skill svgIcon={htmlSvg} children="HTML" />
          <Skill svgIcon={cssSvg} children="CSS" />
          <Skill svgIcon={sassSvg} children="SASS" />
          <Skill svgIcon={jsSvg} children="JavaScript" />
          <Skill svgIcon={reactSvg} children="React" />
          <Skill svgIcon={nodejsSvg} children="NodeJS" />
          <Skill svgIcon={figmaSvg} children="Figma" />
          <Skill svgIcon={webpackSvg} children="Webpack" />
        </div>
        <div className={btnStyle}>
          <Btn
            children={
              lang === LANG_EN
                ? dictionaryEnglish.more
                : dictionaryUkrainian.more
            }
            link={linkStyle}
          />
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
