// Developed by Ore Yusuf
// oreoluwa.yusuf@loopme.com

import React, { useEffect, useState, useRef } from 'react';

// import ReactDOM from "react-dom/client";
// import { ReactDOM } from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter,StaticRouter } from "react-router-dom";

import './responsive.css';
import './index.css';
import './assets/css/bootstrap.min.css';
import './assets/css/meanmenu.css';
import './assets/css/slick.css';
import './assets/css/default.css';
import './assets/css/magnific-popup.css';

import HomeTwo from './pages/homes/HomeTwo';

// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   // <React.StrictMode>

//     <BrowserRouter basename={process.env.PUBLIC_URL}>
//       <App />
//     </BrowserRouter>

//   // </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);





const loader = document.querySelector('.loader');

// // if you want to show the loader when React loads data again
const showLoader = () => loader.classList.remove('loader--hide');

const hideLoader = () => loader.classList.add('loader--hide');

const App = ({ hideLoader }) => {

  const container = useRef(null);

  useEffect(hideLoader, []);

  return (
    <div className="App" ref={container}>
      <HomeTwo/>
      

    </div>
  ); 
}

// // the setTimeout simulates the time it takes react to load
setTimeout(() => 
  // the show/hide functions are passed as props
  ReactDOM.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App
        hideLoader={hideLoader}
        showLoader={showLoader} 
      />
    </BrowserRouter>
,
    document.getElementById('app')
  )
  , 1500);