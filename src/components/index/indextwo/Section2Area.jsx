import React from 'react'
import {Link} from 'react-router-dom'


function Section2Area({aboutRef={aboutRef}, initiativesRef={initiativesRef}, benefitsRef={benefitsRef}, contactRef={contactRef}}) {
  
  return (
	<section ref={aboutRef} id='wwLoopers' className="wwloopers-area wwloopers-bg wwLoopers">
            <div className="container">
              <div className="row align-items-center justify-content-between">

                <div className="col-lg-12">
                  <div className="wwloopers-content">
                    <div className="section-title title-style-three white-title mb-50">
                      <h2> Worldwide Loopers </h2>
                      <p className="wwLoopers_p">We’re a globally connected and collaborative business with Loopers in London, New York, Boston, Atlanta, Chicago, Detroit, San Francisco, Los Angeles, Toronto, Singapore, Sydney, Tokyo, Dnipro, Krakow and Hong Kong.</p>
                      <br></br>
                      <div className="wwloopers-btn">
                        <img className='spinningEarth' src="https://i.loopme.me/gwd/test/LP_website/Earth-Spinning-Loop%20(1).gif" alt="" />
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <img className='bottomCurve' src="https://i.loopme.me/gwd/test/LP_website/img/bg/blackBtmCurve.png" alt="" />
          </section>
  )
}

export default Section2Area