import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'



function ContactUs({aboutRef={aboutRef}, initiativesRef={initiativesRef}, benefitsRef={benefitsRef}, contactRef={contactRef}}) {



  return (

	<section ref={contactRef} className="contactus">

			<div className="container">
					<div className="col-xl-6 col-lg-8">

					<div className="section-title title-style-three text-center bene_toptxt">
						<h2 className='beneHeader'>Contact Us</h2>
						<p className='benetxt'>Can’t see your dream job? We’d still love to connect! Send us your details<span> HERE </span>and we’ll be in touch for when that perfect fits come up. </p>
						<a className="contactUs_Link" href="mailto: contact@loopme.com?subject = Feedback&body = Message">
							<img src="https://i.loopme.me/gwd/test/LP_website/img/images/contactUs/email.png" alt="Email" />
                		</a>
					</div>

					<div className="section-title title-style-three text-center bene_toptxt">
						<h2 className='beneHeader'>Press Release</h2>
						<p className='benetxt'>LoopMe in the Press</p>
						<a className="container_Social" href="https://loopme.com/press_releases/news/" target="_blank" rel="noopener noreferrer"><span className=""/>
                    	<img src="https://i.loopme.me/gwd/test/LP_website/img/images/contactUs/news.png" alt="" />
                  </a>
						 

					</div>


					<div className="section-title title-style-three text-center bene_toptxt">
						<h2 className='beneHeader'>Support For Ukraine</h2>
						<a id= "ukraineContact" className="container_Social" href="https://loopme.com/update/" target="_blank" rel="noopener noreferrer"><span className=""/>
                    		<img src="https://i.loopme.me/gwd/test/LP_website/img/images/contactUs/Flags-Ukraine.png" alt="" />
                  		</a>
					</div>



					</div>
				</div>


	</section>


  )
}

export default ContactUs

