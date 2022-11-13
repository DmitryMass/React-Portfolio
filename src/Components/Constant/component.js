//  PORTFOLIO SECTION PAGE
import jWallet from '../../Assets/Images/j-wallet.png';
import clock from '../../Assets/Images/clocks.png';
import weather from '../../Assets/Images/weather.png';
import myPortfolio from '../../Assets/Images/portfolio.png';
import contacts from '../../Assets/Images/contacts.png';
import rickAndMorty from '../../Assets/Images/ricknmorty.png';
import uiChat from '../../Assets/Images/uichat.png';
import jStore from '../../Assets/Images/j-store.png';
import jWalletServer from '../../Assets/Images/jWallet-server.png';
import rnmFan from '../../Assets/Images/rnm-fan.png';
import honey from '../../Assets/Images/honey.png';
//SKILL SECTION (MAIN)
import htmlSvg from '../../Assets/Icons/html.svg';
import cssSvg from '../../Assets/Icons/css.svg';
import webpackSvg from '../../Assets/Icons/webpack.svg';
import jsSvg from '../../Assets/Icons/js.svg';
import figmaSvg from '../../Assets/Icons/figma.svg';
import reactSvg from '../../Assets/Icons/react.svg';
import sassSvg from '../../Assets/Icons/sass.svg';
import nodejsSvg from '../../Assets/Icons/nodejs.svg';
import reduxSvg from '../../Assets/Icons/redux.svg';
import typeScriptLogo from '../../Assets/Icons/typescript-logo.svg';
import mongoIcon from '../../Assets/Icons/mongodb.svg';
import postgresqlIcon from '../../Assets/Icons/postgresql.svg';

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  PORTFOLIO: '/portfolio',
  CONTACT: '/contact',
};

export const PORTFOLIO = [
  {
    link: 'https://github.com/DmitryMass/Wallet-App-Client',
    img: jWalletServer,
    description: 'jWalletServer',
  },
  {
    link: 'https://github.com/DmitryMass/Rick_N_Morty_TS-version',
    img: rnmFan,
    description: 'rnmFan',
  },
  {
    link: 'https://github.com/DmitryMass/Honey-App-Client',
    img: honey,
    description: 'honey',
  },
  {
    link: 'https://github.com/DmitryMass/Wallet-App_ftech',
    img: jWallet,
    description: 'jWallet',
  },
  {
    link: 'https://github.com/DmitryMass/Rick_And_Morty_React-Redux',
    img: rickAndMorty,
    description: 'rickMorty',
  },
  {
    link: 'https://github.com/DmitryMass/ContactList_Redux_ReduxThunk',
    img: contacts,
    description: 'crudContacts',
  },
  {
    link: 'https://github.com/DmitryMass/Weather-App',
    img: weather,
    description: 'weather',
  },
  {
    link: 'https://github.com/DmitryMass/UI-Chat_Redux-Websocket',
    img: uiChat,
    description: 'uichat',
  },
  {
    link: 'https://github.com/DmitryMass/React-Portfolio',
    img: myPortfolio,
    description: 'myPortfolio',
  },
  {
    link: 'https://github.com/DmitryMass/Clock-and-StopWatch',
    img: clock,
    description: 'clock',
  },
  {
    link: 'https://github.com/DmitryMass/React-Redux_Mini-Store',
    img: jStore,
    description: 'jStore',
  },
];

export const PROJECTS_LIST = [
  {
    link: 'https://github.com/DmitryMass/Wallet-App-Client',
    text: 'Wallet-App Full Version (React/NodeJS/PostgreSQL etc)',
  },
  {
    link: 'https://github.com/DmitryMass/Honey-App-Client',
    text: 'Own website. Honey-Paradise (React/NodeJS/PostgreSQL etc)',
  },
  {
    link: 'https://github.com/DmitryMass/Rick_N_Morty_TS-version',
    text: 'Rick and Morty (fan page) TypeScript Version',
  },
  {
    link: 'https://github.com/DmitryMass/Wallet-App_ftech',
    text: 'Wallet-App React / RTK Query (task for the position Trainee/Junior)',
  },
  {
    link: 'https://github.com/DmitryMass/Rick_And_Morty_React-Redux',
    text: 'Rick and Morty Fan Page (React/Redux)',
  },
  {
    link: 'https://github.com/DmitryMass/UI-Chat_Redux-Websocket',
    text: 'Pixel Perfect Chat - task from workshop (React/Redux/WebSocket)',
  },
  {
    link: 'https://github.com/DmitryMass/Weather-App',
    text: 'Weather-App',
  },
  {
    link: 'https://github.com/DmitryMass/ContactList_Redux_ReduxThunk',
    text: 'CRUD Contacts (React-Redux / Redux-Thunk / Formik(Yup) etc..)',
  },
];

export const MYSKILL = [
  {
    icon: htmlSvg,
    text: 'HTML',
  },
  {
    icon: cssSvg,
    text: 'CSS',
  },
  {
    icon: sassSvg,
    text: 'SASS',
  },
  {
    icon: jsSvg,
    text: 'JavaScript',
  },
  {
    icon: reactSvg,
    text: 'React',
  },
  {
    icon: reduxSvg,
    text: 'Redux',
  },
  {
    icon: reduxSvg,
    text: 'RTK/RTK Query',
  },
  {
    icon: typeScriptLogo,
    text: 'TypeScript',
  },
  {
    icon: nodejsSvg,
    text: 'NodeJS',
  },
  {
    icon: mongoIcon,
    text: 'MongoDB',
  },
  {
    icon: postgresqlIcon,
    text: 'PostgreSQL',
  },
  {
    icon: figmaSvg,
    text: 'Figma',
  },
  {
    icon: webpackSvg,
    text: 'Webpack',
  },
];
