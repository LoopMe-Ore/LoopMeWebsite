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

  
  useEffect(()=>{


    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: require("../header/lotties/Hover_Logo.json")
    });

    // //SubMenu Dropdown Toggle
    //   if ($('.menu-area li.menu-item-has-children ul').length) {
    //     $('.menu-area .navigation li.menu-item-has-children').append('<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>');

    //   }

    //   //Mobile Nav Hide Show
    //   if ($('.mobile-menu').length) {

    //     var mobileMenuContent = $('.menu-area .push-menu').html();
    //     $('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);

    //     //Dropdown Button
    //     $('.mobile-menu li.menu-item-has-children .dropdown-btn').on('click', function () {
    //       $(this).toggleClass('open');
    //       $(this).prev('ul').slideToggle(500);
    //     });


    //     $('.menu-backdrop, .mobile-menu .close-btn').click (()=>{
    //       $('body').removeClass('mobile-menu-visible');
    //     })


    //     //Menu Toggle Btn
    //     $('.mobile-nav-toggler').on('click', function () {
    //       $('body').addClass('mobile-menu-visible');
    //     });
    //   }
    
      // Change to highlight hyperlink glow as scroll through pages
      // https://alvarotrigo.com/blog/sticky-navbar/

      var prevScrollpos = window.pageYOffset;
      window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
          document.getElementById("sticky-header").style.top = "0";
          document.getElementById("social_links").style.opacity = "100";
          // fade in out?
          // document.getElementById("sticky-header").style.display = "flex";
        } else {
          document.getElementById("sticky-header").style.top = "-170px";
          document.getElementById("social_links").style.opacity = "0";
          // fade in out?
          // document.getElementById("sticky-header").style.display = "none";
        }
        prevScrollpos = currentScrollPos;
      }


      return () => {
        lottie.destroy();
      };
    
  },[])
  
  return (
	 <header> 

          <div id="sticky-header" className="transparent-header menu-area">
            <div className="container-fluid s-container-full-padding">
              <div className="row">

                <div className="col-12">

                  <div className="mobile-nav-toggler two">
                    {/* <i className="fas fa-th" /> */}
                    <img id='mobileDropBtn' src="assets/img/icon/CircleMenuBtn.png" alt="Logo" />
                  </div>

                    <div className="main-menu  menu-style-two">
                      <nav>
                        <div className="logo logoLoopMe" 
                            ref={container}
                            onMouseEnter={() => handleHover("Enter")}
                            onMouseLeave={() => handleHover("Leave")}>

                        </div>

                        <div className="navbar-wrap push-menu d-none d-lg-flex">
                          <ul className="navigation">

                            <li onClick={() => {handleScroll(aboutRef.current);}}><Link to="/">About</Link></li>
                            <li onClick={() => {handleScroll(initiativesRef.current);}}><Link to="/">Our Initiatives</Link></li>
                            <li onClick={() => {handleScroll(benefitsRef.current);}}><Link to="/">Benefits</Link></li>
                            <li onClick={() => {handleScroll(contactRef.current);}}><Link to="/">Contact</Link></li>

                          </ul>
                        </div>
                        
                        <div className="viewjobsbtn" onClick={() => {handleScroll(contactRef.current);}}>
                          <Link to="/"><img src="assets/img/icon/sm_viewjobsbtn_2.png" alt="Logo" /></Link>
                        </div>
                        
                      </nav>
                    </div>
                  
                  {/* <div className="mobile-menu">
                    <nav className="menu-box">
                      <div className="close-btn"><i className="fas fa-times" /></div>
                      <div className="nav-logo"><Link to="/"><img src="assets/img/logo/logo.png" alt="" title='true' /></Link>
                      </div>
                      <div className="menu-outer">
                    
                      </div>
                      <div className="social-links">
                        <ul className="clearfix">
                          <li><a href="/#"><span className="fab fa-twitter" /></a></li>
                          <li><a href="/#"><span className="fab fa-facebook-square" /></a></li>
                          <li><a href="/#"><span className="fab fa-pinterest-p" /></a></li>
                          <li><a href="/#"><span className="fab fa-instagram" /></a></li>
                          <li><a href="/#"><span className="fab fa-youtube" /></a></li>
                        </ul>
                      </div>
                    </nav>
                  </div> */}

                  <div className="menu-backdrop" />
                  
              </div>

              </div>

            </div>
          </div>

          <div id="social_links" className="social-links">

                  <a className="container_Social" href = "mailto: contact@loopme.com"> 
                    <img className="social_img first" src="assets/img/icon/email.png" alt="Email"></img> 
                    <img className="social_img" src="assets/img/icon/email_red.png" alt="Email"></img> 
                  </a>

                  <a className="container_Social" href="https://twitter.com/LoopMe?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" rel="noopener noreferrer"><span className=""/>
                    <img className = "social_img first" src="assets/img/icon/twitter_black.png" alt=" Email " ></img>
                    <img className = "social_img" src="assets/img/icon/twitter_blue.png" alt=" Email " ></img>
                  </a>

                <a className="container_Social" href="https://www.linkedin.com/company/loopme/mycompany/" target="_blank" rel="noopener noreferrer"><span className=""/>
                  <img className = "social_img first" src="assets/img/icon/linkedin_black.png" alt=" Email " ></img>
                  <img className = "social_img" src="assets/img/icon/linkedin_blue.png" alt=" Email " ></img>
                </a>

                <a className="container_Social" href="https://www.instagram.com/instaloopme/" target="_blank" rel="noopener noreferrer"><span className=""/>
                  <img className = "social_img first" src="assets/img/icon/instagram_black.png" alt=" Email " ></img>
                  <img className = "social_img" src="assets/img/icon/instagram_insta.png" alt=" Email " ></img>
                </a>

                <a className="container_Social" href="https://en-gb.facebook.com/LoopMeMedia/" target="_blank" rel="noopener noreferrer"><span className=""/>
                  <img className = "social_img first" src="assets/img/icon/facebook_black.png" alt="Email" ></img>
                  <img className = "social_img" src="assets/img/icon/facebook_blue.png" alt="Email" ></img>
                </a>

          </div>

        </header>
  )
}
