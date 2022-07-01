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
  {
    title: 'Contact',
    link: ROUTES.CONTACT,
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
  'React Basic (React-Component, Hooks, Router, Yup, Formik, Ant, MUI)',
  'NodeJs (Basic)',
  'Postman',
  'Npm',
  'Webpack/Babel',
  'Figma',
  'Git/GitHub (Basic Command)',
  'VsCode',
];
