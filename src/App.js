// import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import HomeTwo from './pages/homes/HomeTwo';
import React, { useEffect, useState, useRef, Suspense } from 'react';
import lottie from 'lottie-web';


function App() {

  // const loadApp = async () => {
  //   const promise = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve({
  //         state: "done"
  //       });
  //     }, 4000);
  //   });
    
  //   await promise;
  //  };

  //  function wrapPromise(promise) {
  //   let status = "pending";
  //   let result;
  //   let suspender = promise.then(
  //     (r) => {
  //       status = "success";
  //       result = r;
  //     },
  //     (e) => {
  //       status = "error";
  //       result = e;
  //     }
  //   );
  //   return {
  //     read() {
  //       if (status === "pending") {
  //         throw suspender;
  //       } else if (status === "error") {
  //         throw result;
  //       } else if (status === "success") {
  //         return result;
  //       }
  //     }
  //   };
  //  }

  //  const suspenderCheck = wrapPromise(loadApp());

  //  const ChildComponent = () =>{
  //   const data = suspenderCheck.read()
  //   return <HomeTwo/>
  //  }

  useEffect(()=>{
    
  },[])


  return (
    <div className="App">
       {/* <Suspense fallback={<h2>{"Loading with suspense......."}</h2>}> */}
       {/* <ChildComponent/> */}
     {/* </Suspense> */}

     <HomeTwo/>

    </div>
  );
}

export default App;
