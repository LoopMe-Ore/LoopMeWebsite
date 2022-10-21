// import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import HomeTwo from './pages/homes/HomeTwo';
import React, { useEffect, useState, useRef } from 'react';
import lottie from 'lottie-web';


function App() {

  const container = useRef(null);

  // const [loading,setLoading] = useState(true);

  // const lottieAnim = lottie.loadAnimation({
  //   container: container.current,
  //   renderer: "svg",
  //   loop: false,
  //   autoplay: true,
  //   animationData: require("./Drawing_Logo_white.json")
  // });



  useEffect(()=>{

    // setLoading(true)

    // lottieAnim.onComplete = function() {

      // console.log('complete');

      // if (document.readyState === 'complete') {
        // The page is fully loaded
        // console.log('readystate');
        // setLoading(false);
      // }

    // }
  
  },[])


  return (
    <div className="App">

      <HomeTwo/>

       {/* {loading ?  */}

        {/* <div className="logoLoading" ref={container}> */}
        {/* </div> */}

        {/* ":" */}

        {/* <div > */}
        {/* </div> */}
          
       {/* } */}

      
    </div>
  );
}

export default App;
