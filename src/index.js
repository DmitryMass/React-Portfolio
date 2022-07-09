import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './Components/App';
//
import './styles/reset.css';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { LanguageContext } from './Components/LangContext';

ReactDOM.createRoot(document.querySelector('#app')).render(
  <LanguageContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </LanguageContext>
);
