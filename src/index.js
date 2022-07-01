import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './Components/App';
//
import './index.css';
import './styles/reset.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.querySelector('#app')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
