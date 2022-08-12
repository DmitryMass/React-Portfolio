import { ROUTES } from '../Constant/component';

import gmail from '../../Assets/Icons/gmail.svg';
import telegramm from '../../Assets/Icons/telegramm.svg';
import person from '../../Assets/Icons/person.svg';

export const headerLink = [
  {
    title: 'home',
    link: ROUTES.HOME,
  },
  {
    title: 'about',
    link: ROUTES.ABOUT,
  },
  {
    title: 'portfolio',
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
    title: 'Contact with me in Gmail',
    picture: gmail,
    href: 'mailto:dimamikron41@gmail.com',
  },
  {
    title: '+380505634338',
    picture: person,
  },
  {
    title: 'Contact with me in Telegramm',
    picture: telegramm,
    href: 'https://telegram.me/Dmitry_Mass',
  },
];

export const skills = [
  'HTML5',
  'CSS3 (SCSS)',
  'JavaScript (ES6+)',
  'React (React-Component, Hooks, Router)',
  'React (Formik(Yup), PropTypes, Ant, MUI)',
  'Redux / Redux Toolkit / RTK Query',
  'CSS Modules',
  'Basic NodeJs (Fastify)',
  'Postman',
  'Npm',
  'Webpack/Babel',
  'Figma',
  'Git/GitHub (Deploy / Pull / Merge)',
  'VsCode',
];
