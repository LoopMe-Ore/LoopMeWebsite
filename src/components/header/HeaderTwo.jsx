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

  // MOBILE MENU TOGGLE
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


  }
  
  useEffect(()=>{


    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: require("../header/lotties/HoverJson.json")
    });
    

    const nav = document.querySelector("header");
    const socialLinksNav = document.getElementById("social_links");

    const navHeight = 70;
    // the point the scroll starts from (in px)
    let lastScrollY = 0;
    // how far to scroll (in px) before triggering
    const delta = 10;

    // function to run on scrolling
    function scrolled() {
      let sy = window.scrollY;
      // only trigger if scrolled more than delta
      if (Math.abs(lastScrollY - sy) > delta) {
        // scroll down -> hide nav bar
        if (sy > lastScrollY && sy > navHeight) {
          nav.classList.add("nav-up");
          socialLinksNav.classList.add("socialopacity");
        } 
        // scroll up -> show nav bar
        else if (sy < lastScrollY) {
          nav.classList.remove("nav-up");
          socialLinksNav.classList.remove("socialopacity");
          
        }
      // update current scroll point
      lastScrollY = sy 
      }
    }

    // Add event listener & debounce so not constantly checking for scroll
    let didScroll = false;
    window.addEventListener("scroll", function(e){
      didScroll = true;
    });

    setInterval(function() {
      if (didScroll) {
        scrolled();
        didScroll = false;
      }
    }, 250)





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


        <div id="social_links" className="social-links">

                  <a className="container_Social" href = "mailto: contact@loopme.com"> 
                    <img className="social_img first" src="https://i.loopme.me/gwd/test/LP_website/img/icon/email.png" alt="Email"></img> 
                    <img className="social_img" src="https://i.loopme.me/gwd/test/LP_website/img/icon/email_red.png" alt="Email"></img> 
                  </a>

                  <a className="container_Social" href="https://twitter.com/LoopMe?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" rel="noopener noreferrer"><span className=""/>
                    <img className = "social_img first" src="https://i.loopme.me/gwd/test/LP_website/img/icon/twitter_black.png" alt=" Email " ></img>
                    <img className = "social_img" src="https://i.loopme.me/gwd/test/LP_website/img/icon/twitter_blue.png" alt=" Email " ></img>
                  </a>

                <a className="container_Social" href="https://www.linkedin.com/company/loopme/mycompany/" target="_blank" rel="noopener noreferrer"><span className=""/>
                  <img className = "social_img first" src="https://i.loopme.me/gwd/test/LP_website/img/icon/linkedin_black.png" alt=" Email " ></img>
                  <img className = "social_img" src="https://i.loopme.me/gwd/test/LP_website/img/icon/linkedin_blue.png" alt=" Email " ></img>
                </a>

                <a className="container_Social" href="https://www.instagram.com/instaloopme/" target="_blank" rel="noopener noreferrer"><span className=""/>
                  <img className = "social_img first" src="https://i.loopme.me/gwd/test/LP_website/img/icon/instagram_black.png" alt=" Email " ></img>
                  <img className = "social_img" src="https://i.loopme.me/gwd/test/LP_website/img/icon/instagram_insta.png" alt=" Email " ></img>
                </a>

                <a className="container_Social" href="https://en-gb.facebook.com/LoopMeMedia/" target="_blank" rel="noopener noreferrer"><span className=""/>
                  <img className = "social_img first" src="https://i.loopme.me/gwd/test/LP_website/img/icon/facebook_black.png" alt="Email" ></img>
                  <img className = "social_img" src="https://i.loopme.me/gwd/test/LP_website/img/icon/facebook_blue.png" alt="Email" ></img>
                </a>

        </div>


      </header>
  )
}
