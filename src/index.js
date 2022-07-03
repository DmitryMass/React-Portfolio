import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './Components/App';
//
import './_redirects';

import './styles/reset.css';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.querySelector('#app')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
