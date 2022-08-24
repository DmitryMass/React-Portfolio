import jWallet from '../../Assets/Images/j-wallet.png';
import clock from '../../Assets/Images/clocks.png';
import weather from '../../Assets/Images/weather.png';
import myPortfolio from '../../Assets/Images/portfolio.png';
import contacts from '../../Assets/Images/contacts.png';
import todoReact from '../../Assets/Images/crud-todo-react.png';
import rickAndMorty from '../../Assets/Images/ricknmorty.png';
import uiChat from '../../Assets/Images/uichat.png';
import jStore from '../../Assets/Images/j-store.png';
import jWalletServer from '../../Assets/Images/jWallet-server.png';

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
    text: 'Wallet-App Full Version + (NodeJs / PostgresQL)',
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
