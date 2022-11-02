import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import $ from 'jquery';
import {Fade} from "react-awesome-reveal";

function LpOverview() {

  let overview_slideindex = 1;

	// Thumbnail image controls
	function currentSlide(n,e) {
		$('.dotLpOverview').removeClass('dot_highlight')
		showSlides(overview_slideindex = n);
		console.log(e.target.className)
		$(e.target).addClass('dot_highlight')
	}

	function showSlides(n) {
		let i;
		let slides = document.getElementsByClassName("mySlidesOverview");
		let dots = document.getElementsByClassName("dotLpOverview");

		if (n > slides.length) {overview_slideindex = 1}

		if (n < 1) {overview_slideindex = slides.length}

		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
		}

		for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" activeLpOverview", "");
		}

		slides[overview_slideindex-1].style.display = "flex";
		
		dots[overview_slideindex-1].className += " activeLpOverview";
		
	}

  useEffect(() => {
		
	  showSlides(overview_slideindex);

	},[]);

  
  return (
    
	 <section className="LpOverview-area position-relative pt-115 pb-90">


              <div className="container">

                <div className='LpOVerviewheader'>
                    <p> <span>Thinking of becoming a Looper?</span> You should! We&#39;re committed to making an impact whether it&#39;s for our clients, our people or our communities. </p>
                  </div>

                  <div className='LpOverviewSections'>

                  <Fade cascade damping={0.2}>
                    <div className='OverviewSection'>
                      <img src="https://i.loopme.me/gwd/test/LP_website/img/images/Overview/icon_1.png"></img>
                      <p>Our PurchaseLoop product suite is fundamentally changing the way digital advertisers can measure the outcomes that matter. LoopMe&#39;s AI-powered Intelligent Marketplace drives more effective supply and demand connections, rooted in programmatic delivery.Our customers come first and we channel our core values into delivering meaningful results that best serve their needs. We have an NPS score of 76, have been profitable for <span>3+ years</span> and we&#39;re growing at a rate of &gt; <span>50% year-on-year</span>, so we think this speaks for itself! </p>
                    </div>

                    <div className='OverviewSection'>
                      <img src="https://i.loopme.me/gwd/test/LP_website/img/images/Overview/Icon_2.png"></img>
                      <p>Our most recent employee engagement survey rated us <span>4.1 out of 5</span> and our CSR committees are dedicated to making sure LoopMe Gives Back. We&#39;ve raised and donated more than <span>$150,000</span> for relief in Ukraine, cleaned up beaches in Singapore, planted trees in Cricklewood and partnered with <span>Care 4 Calais</span>. We&#39;ve also held Drag Bingo to raise money for <span>LGSMigrants</span>, quiz nights for <span>Breast Cancer Now</span>, worked in soup kitchens and much, much more!</p>
                    </div>

                    <div className='OverviewSection'>
                      <img src="https://i.loopme.me/gwd/test/LP_website/img/images/Overview/Icon_3.png"></img>
                      <p>We can’t achieve any of this without having the very best people on board. Our global footprint is expanding –<span>we&#39;re now in 15 cities around the world and counting</span> – and delivering results to our Loopers and our communities is just as key.</p>
                    </div>

                    <div className='OverviewSection'>
                      <img src="https://i.loopme.me/gwd/test/LP_website/img/images/Overview/icon_4.png"></img>
                      <p>We&#39;re always on the lookout for those that share our values; we know how much of a massive impact you can make to everyone around you. Because of this, we offer all employees <span>equity</span> right from day one.</p>
                    </div>
                  </Fade>
                  </div>


            {/* MOBILE GALLERY */}

                <div className='LpOverviewSections_mobileGallery'>
                  
                  {/* <!-- Slideshow container --> */}
                  <div className="Lp_Overview_slideshow-container">

                    {/* <!-- Full-width images with number and caption text --> */}
                    <div className="mySlidesOverview fadelpOverview">
                      <img className="SlideShowImg_Overview" src="https://i.loopme.me/gwd/test/LP_website/img/images/Overview/icon_1.png" alt='' ></img>
                      <div className='lpOverview_text'>
                        <p className="textlpOverview">Our PurchaseLoop product suite is fundamentally changing the way digital advertisers can measure the outcomes that matter. LoopMe&#39;s AI-powered Intelligent Marketplace drives more effective supply and demand connections, rooted in programmatic delivery.Our customers come first and we channel our core values into delivering meaningful results that best serve their needs. We have an NPS score of 76, have been profitable for <span>3+ years</span> and we&#39;re growing at a rate of &gt; <span>50% year-on-year</span>, so we think this speaks for itself!</p>
                      </div>
                    </div>

                    <div className="mySlidesOverview fadelpOverview">
                      <img className="SlideShowImg_Overview" src="https://i.loopme.me/gwd/test/LP_website/img/images/Overview/Icon_2.png" alt='' ></img>
                      <div className='lpOverview_text'>
                        <p className="textlpOverview">Our most recent employee engagement survey rated us <span>4.1 out of 5</span> and our CSR committees are dedicated to making sure LoopMe Gives Back. We&#39;ve raised and donated more than <span>$150,000</span> for relief in Ukraine, cleaned up beaches in Singapore, planted trees in Cricklewood and partnered with <span>Care 4 Calais</span>. We&#39;ve also held Drag Bingo to raise money for <span>LGSMigrants</span>, quiz nights for <span>Breast Cancer Now</span>, worked in soup kitchens and much, much more!</p>
                      </div>
                    </div>

                    <div className="mySlidesOverview fadelpOverview">
                      <img className="SlideShowImg_Overview" src="https://i.loopme.me/gwd/test/LP_website/img/images/Overview/Icon_3.png" alt='' ></img>
                      <div className='lpOverview_text'>
                        <p className="textlpOverview">We can’t achieve any of this without having the very best people on board. Our global footprint is expanding –<span>we&#39;re now in 15 cities around the world and counting</span> – and delivering results to our Loopers and our communities is just as key.</p>
                      </div>
                    </div>

                    <div className="mySlidesOverview fadelpOverview">
                      <img className="SlideShowImg_Overview" src="https://i.loopme.me/gwd/test/LP_website/img/images/Overview/icon_4.png" alt='' ></img>
                      <div className='lpOverview_text'>
                        <p className="textlpOverview">We&#39;re always on the lookout for those that share our values; we know how much of a massive impact you can make to everyone around you. Because of this, we offer all employees <span>equity</span> right from day one.</p>
                      </div>
                    </div>

                    {/* <!-- The dots/circles --> */}
                    <div className='lpOverview_dots'>

                      <div className='lpOverview_dot_'>
                        <div className="dotLpOverview dot_highlight" onClick={(e) => currentSlide(1,e)}></div>
                        {/* <p className='dot_text'>LoopWE</p> */}
                      </div>

                      <div className='lpOverview_dot_'>
                        <div className="dotLpOverview" onClick={(e) => currentSlide(2,e)}></div>
                        {/* <p className='dot_text'>LoopMe Gives Back</p> */}
                      </div>

                      <div className='lpOverview_dot_'>
                        <div className="dotLpOverview" onClick={(e) => currentSlide(3,e)}></div>
                        {/* <p className='dot_text'>She Runs It</p> */}
                      </div>

                      <div className='lpOverview_dot_'>
                        <div className="dotLpOverview" onClick={(e) => currentSlide(4,e)}></div>
                        {/* <p className='dot_text'>SuitUp</p> */}
                      </div>

                    </div>

                  </div>

                </div>

            {/* END MOBILE GALLERY */}

              </div>

          </section>
  )
}

export default LpOverview