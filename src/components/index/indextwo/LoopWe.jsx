import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import $ from 'jquery';


function LoopWe({aboutRef={aboutRef}, initiativesRef={initiativesRef}, benefitsRef={benefitsRef}, contactRef={contactRef}}) {

	let slideIndex = 1;

	// Thumbnail image controls
	function currentSlide(n,e) {
		$('.dotLpWe').removeClass('dot_highlight')
		showSlides(slideIndex = n);
		console.log(e.target.className)
		$(e.target).addClass('dot_highlight')
	}

	function showSlides(n) {
		let i;
		let slides = document.getElementsByClassName("mySlides");
		let dots = document.getElementsByClassName("dotLpWe");

		if (n > slides.length) {slideIndex = 1}

		if (n < 1) {slideIndex = slides.length}

		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
		}

		for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" activeLpWe", "");
		}

		slides[slideIndex-1].style.display = "flex";
		
		dots[slideIndex-1].className += " activeLpWe";

		
	}

  useEffect(() => {
		
	showSlides(slideIndex);

	},[]);





  return (

	<section ref={initiativesRef} className="lpWE-area">
			
				{/* <!-- Slideshow container --> */}
				<div className="slideshow-container">

				{/* <!-- Full-width images with number and caption text --> */}
					<div className="mySlides fadeLpWe">
						<div className='lpWe_text'>
							<h2 className='headerLpWe'>LoopWE</h2>
							<p className="textLpWe"> We’ve just launched LoopMe Women Empowerment, otherwise known as LoopWE. Our purpose is to promote gender equality not only across LoopMe, but also within the wider AdTech industry. By involving employees, clients and potential customers, LoopWE drives awareness, promotes thought leadership and fosters a crucial dialogue.</p>
						</div>
						<img className="SlideShowImg" src="assets/img/images/Initiatives/File1.png" alt='' ></img>

					</div>

					<div className="mySlides fadeLpWe">
						
						<div className='lpWe_text'>
								<h2 className='headerLpWe'>LoopMe Gives Back</h2>
								<p className="textLpWe"> We have committed and active local CSR teams in the UK, APAC and US who work hard to organise events that hold up our pillars of Learning, Charity, Wellbeing, Responsibility and Sustainability. With LoopMe Gives Back, we’re proud to have raised money for organisations such as Gendered Intelligence, Rainforest Concern, LA Promise Fund and Women’s Aid via engaging panel talks, quiz nights, SocialSteps challenges, arts and crafts, yoga, Employee Action Days and HIIT classes!</p>
							</div>
						<img className="SlideShowImg" src="assets/img/images/Initiatives/File2.png" alt='' ></img>
					</div>

					<div className="mySlides fadeLpWe">
						<div className='lpWe_text'>
								<h2 className='headerLpWe'>She Runs It</h2>
								<p className="textLpWe"> She Runs It was founded in 2012 as League of Advertising Women and designed to encourage and promote women’s role in the advertising industry. Rebranded to She Runs It, the community has grown beyond advertising to all facets of marketing, media and tech across the US. LoopMe is proud to be a Corporate Alliance member of She Runs It.</p>
							</div>
						<img className="SlideShowImg" src="assets/img/images/Initiatives/File3.png" alt='' ></img>
					</div>

					<div className="mySlides fadeLpWe">
						<div className='lpWe_text'>
								<h2 className='headerLpWe'>Suit Up</h2>
								<p className="textLpWe">SuitUp is an education non-profit that increases career awareness for all students through innovative virtual and in person business competitions.  Through SuitUp, students experience solving a realistic corporate challenge, such as designing a new product or solving a community problem through social media platform. LoopMe is a corporate volunteer, providing coaching to students on the marketing, financing, and strategy before helping them pitch to live judges.</p>
							</div>
						<img className="SlideShowImg" src="assets/img/images/Initiatives/File4.png" alt='' ></img>
					</div>

					<div className="mySlides fadeLpWe">
						<div className='lpWe_text'>
								<h2 className='headerLpWe'>Skills Ignition Singapore Google</h2>
								<p className="textLpWe"> Skills Ignition Singapore Google was launched by Google in 2020 to equip Singaporeans with in-demand digital skills. LoopMe is delighted to be a part of the Skills Ignition SG training programme, supporting those involved in the programme with roles at LoopMe to ensure they successfully graduate from the programme.</p>
							</div>
						<img className="SlideShowImg" src="assets/img/images/Initiatives/File5.png" alt='' ></img>
					</div>

					{/* <!-- The dots/circles --> */}
					<div className='LpWe_dots'>

						<div className='LpWe_dot_'>
							<div className="dotLpWe dot_highlight" onClick={(e) => currentSlide(1,e)}></div>
							<p className='dot_text'>LoopWE</p>
						</div>

						<div className='LpWe_dot_'>
							<div className="dotLpWe" onClick={(e) => currentSlide(2,e)}></div>
							<p className='dot_text'>LoopMe Gives Back</p>
						</div>

						<div className='LpWe_dot_'>
							<div className="dotLpWe" onClick={(e) => currentSlide(3,e)}></div>
							<p className='dot_text'>She Runs It</p>
						</div>

						<div className='LpWe_dot_'>
							<div className="dotLpWe" onClick={(e) => currentSlide(4,e)}></div>
							<p className='dot_text'>SuitUp</p>
						</div>

						<div className='LpWe_dot_'>
							<div className="dotLpWe" onClick={(e) => currentSlide(5,e)}></div>
							<p className='dot_text'>Skill Ignition Singapore Google</p>
						</div>

					</div>

				</div>

	</section>


  )
}

export default LoopWe

