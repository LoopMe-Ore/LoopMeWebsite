// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomeTwo from './pages/homes/HomeTwo';
import React, { useEffect, useState } from 'react';
// import Lottie from 'react-lottie';


function App() {

  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: animationData,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice"
  //   }
  // };
  
  const [loading,setLoading] = useState(false);

  // useEffect(()=>{
  //   setLoading(true)
  //     setTimeout(()=>{
  //       setLoading(false)
  //       },3000)
  // },[])



  return (
    <div className="App">

      {/* {loading ? 
      <Lottie 
	    options={defaultOptions}
        height={418}
        width={1400}
      />
     : */}
{/* 
     <Router>
        <Routes>
          <Route basename={process.env.PUBLIC_URL} exact path="/" element={<HomeTwo/>}/>
        </Routes>
    </Router> */}
      <HomeTwo/>

    </div>
  );
}

export default App;
