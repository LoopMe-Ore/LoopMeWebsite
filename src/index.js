import React from 'react';

import ReactDOM from "react-dom/client";
import { BrowserRouter,StaticRouter } from "react-router-dom";

import './index.css';
import './responsive.css';
import './assets/css/bootstrap.min.css'
import './assets/css/meanmenu.css'
import './assets/css/slick.css'
import './assets/css/default.css'
import './assets/css/magnific-popup.css'

import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>

    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
