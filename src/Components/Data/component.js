import { ROUTES } from '../Constant/component';

import gmail from '../../Assets/Icons/gmail.svg';
import telegramm from '../../Assets/Icons/telegramm.svg';
import person from '../../Assets/Icons/person.svg';

export const headerLink = [
  {
    title: 'Home',
    link: ROUTES.HOME,
  },
  {
    title: 'About',
    link: ROUTES.ABOUT,
  },
  {
    title: 'Portfolio',
    link: ROUTES.PORTFOLIO,
  },
];

export const headerLinkUa = [
  {
    title: 'Головна',
    link: ROUTES.HOME,
  },
  {
    title: 'Про мене',
    link: ROUTES.ABOUT,
  },
  {
    title: 'Портфоліо',
    link: ROUTES.PORTFOLIO,
  },
];

export const contactList = [
  {
    title: 'dimamikron41@gmail.com',
    picture: gmail,
  },
  {
    title: '+380505634338',
    picture: person,
  },
  {
    title: '@Dmitry_Mass',
    picture: telegramm,
  },
];

export const skills = [
  'HTML5',
  'CSS(SCSS)',
  'JavaScript(ES6+)',
  'React (React-Component, Hooks, Router)',
  'React (Formik(Yup), PropTypes, Ant, MUI)',
  'Redux / Redux-Thunk',
  'CSS Modules',
  'NodeJs (Fastify)(Basic)',
  'Postman',
  'Npm',
  'Webpack/Babel',
  'Figma',
  'Git/GitHub (Deploy / Pull / Merge)',
  'VsCode',
];
