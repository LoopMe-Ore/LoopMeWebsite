import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'



function ContactUs({aboutRef={aboutRef}, initiativesRef={initiativesRef}, benefitsRef={benefitsRef}, contactRef={contactRef}}) {



  return (

	<section ref={contactRef} className="benefits-area position-relative pt-115 pb-90 blkBg">


		<div ref={contactRef} className="benefits-bg" />
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-xl-6 col-lg-8">
					<div className="section-title title-style-three text-center bene_toptxt">
						<h2 className='beneHeader'>Contact Us</h2>
						<p className='benetxt'>Can’t see your dream job? We’d still love to connect!Send us your details HERE  and we’ll be in touch for when that perfect fits come up. </p>
						<img src="assets/img/images/contactUs/email.png" alt="" />
					</div>
					<div className="section-title title-style-three text-center bene_toptxt">
						<h2 className='beneHeader'>Press Release</h2>
						<p className='benetxt'>LoopMe in the Press</p> 
						<img src="assets/img/images/contactUs/news.png" alt="" /> 
					</div>
					<div className="section-title title-style-three text-center bene_toptxt">
						<h2 className='beneHeader'>Support For Ukraine</h2>
						<img src="assets/img/images/contactUs/Flags-Ukraine.png" alt="" />
					</div>
					</div>
				</div>
			</div>


	</section>


  )
}

export default ContactUs

