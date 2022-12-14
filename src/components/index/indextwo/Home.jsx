import React from 'react';
import Slider from 'react-slick';
import {Fade} from "react-awesome-reveal";
// import Slide from "react-reveal/Slide";


function Home() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll:1,
    center:false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          SlidesToScroll: 1,
        }
      },
      {
        breakpoint: 575,
        settings: {
          sidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
  }


  return (


<section className="slider-area">
            <Slider className="slider-active" {...settings}>
          
            <div className="single-slider slider-bg slider-style-two">
                <div className="container-fluid container-full-padding">

                  <div className="row homeMain">
                    <div className="col-xl-7 col-lg-7 col-md-11">
                      <div className="slider-content ">
                        <Fade up delay={.5000}>
                          <div className='fade_1'>
                            <h1 className='homepageHeader' >Hello!</h1>
                            <img className='hi_icon' src= "https://i.loopme.me/gwd/test/LP_website/img/slider/Hi_Icon.png" alt="" />
                          </div>
                        </Fade>
                        
                         <Fade up delay={.5000}>
                          <p> LoopMe is one of the fastest growing global AdTech businesses in the sector, all because of people like YOU. We’re powered by creative thinkers, innovators and problem-solvers who all strive daily to do the very best by our clients and colleagues.</p>
                        </Fade>
          
                        <Fade up delay={.9000}>
                          {/* <a href="/#"><span className=""/><img src="https://i.loopme.me/gwd/test/LP_website/img/slider/ViewJobsButtonBig.png" alt="View Jobs" ></img></a> */}
                          <div className='big_viewjobs'>
                            View Jobs
                          </div>
                        </Fade>
                        
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            {/* </Fade> */}
            </Slider>
          </section>
  )
}

export default Home