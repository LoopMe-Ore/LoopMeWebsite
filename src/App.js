// import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import HomeTwo from './pages/homes/HomeTwo';
import React, { useEffect, useState, useRef } from 'react';
import lottie from 'lottie-web';


function App() {

  const container = useRef(null);
  const [loading,setLoading] = useState(false);

  useEffect(()=>{

    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: require("./Drawing_Logo_white.json")
    });


    setLoading(true)
      setTimeout(()=>{
        setLoading(false)
        },10000)
  },[])



  return (
    <div className="App">

      {loading ? 
        <div className="logoLoading" 
          ref={container}
          >
        </div>
     :
          <HomeTwo/>
      }
      
    </div>
  );
}

export default App;
