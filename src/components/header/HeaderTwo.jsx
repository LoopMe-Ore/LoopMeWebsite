import React, { useEffect, useState, useRef } from 'react';
import {Link} from 'react-router-dom'
import $ from 'jquery'
import lottie from 'lottie-web';
// import animationData from 'src/lotties/logoRedLottie.json'
// import animationData from '../header/lotties/log_white.json'




export default function HeaderTwo({aboutRef={aboutRef}, initiativesRef={initiativesRef}, benefitsRef={benefitsRef}, contactRef={contactRef}}) {

  const container = useRef(null);


  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleHover = (whichway) => {

    if (whichway === "Enter"){
      lottie.setDirection(1)
      lottie.play()

  } else if (whichway === "Leave"){
    lottie.setDirection(-1)
    lottie.play()
  }
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }

  var navlogo = document.getElementById("lp_logo");
  if (navlogo.className === "active") {
    navlogo.className += " logoRemove";
  } else {
    navlogo.className = "active";
  }

  // var openclosebtn = document.getElementById("openclosebtn");
  // if (openclosebtn.className === "active") {
  //   openclosebtn.className += " logoRemove";
  // } else {
  //   openclosebtn.className = "active";
  // }


}
  
  useEffect(()=>{


    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: require("../header/lotties/HoverJson.json")
    });
    
    // Change to highlight hyperlink glow as scroll through pages
    // https://alvarotrigo.com/blog/sticky-navbar/

    // var prevScrollpos = window.pageYOffset;
    // window.onscroll = function() {
    //   var currentScrollPos = window.pageYOffset;
    //   if (prevScrollpos > currentScrollPos) {
    //     document.getElementById("header").style.top = "0";
    //     // document.getElementById("social_links").style.opacity = "100";
    //     // fade in out?
    //     // document.getElementById("sticky-header").style.display = "flex";
    //   } else {
    //     document.getElementById("header").style.top = "-170px";
    //     // document.getElementById("social_links").style.opacity = "0";
    //     // fade in out?
    //     // document.getElementById("sticky-header").style.display = "none";
    //   }
    //   prevScrollpos = currentScrollPos;
    // }


    return () => {
      lottie.destroy();
    };

    
    
  },[])


  
  return (
	    <header id='header' className="header"> 

        <nav>
          <ul className="topnav" id="myTopnav">

            <li className="active" id="lp_logo">
              <div className="logo logoLoopMe" 
                ref={container}
                onMouseEnter={() => handleHover("Enter")}
                onMouseLeave={() => handleHover("Leave")}>
              </div>
            </li>

            <li className="nav_option" onClick={() => {handleScroll(aboutRef.current);}}><Link to="/">About</Link></li>
            <li className="nav_option" onClick={() => {handleScroll(initiativesRef.current);}}><Link to="/">Our Initiatives</Link></li>
            <li className="nav_option" onClick={() => {handleScroll(benefitsRef.current);}}><Link to="/">Benefits</Link></li>
            <li className="nav_option" onClick={() => {handleScroll(contactRef.current);}}><Link to="/">Contact</Link></li>

            <li className="viewjobsbtn" onClick={() => {handleScroll(contactRef.current);}}>
              <Link to="/"><img src="https://i.loopme.me/gwd/test/LP_website/img/icon/sm_viewjobsbtn_2.png" alt="Logo" /></Link>
            </li>

            <li className="icon" onClick={() => {myFunction();}}>
              <img id="openclosebtn" src="https://i.loopme.me/gwd/test/LP_website/img/icon/CircleMenuBtn.png" alt="Logo" />
            </li>


          </ul>
        </nav>


        {/* </nav> */}
      </header>
  )
}
