import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import $ from 'jquery';


function Benefits({aboutRef={aboutRef}, initiativesRef={initiativesRef}, benefitsRef={benefitsRef}, contactRef={contactRef}}) {

	let slideIndex = 1;

	// Thumbnail image controls
	function currentSlide(n,e) {
		$('.benefits-SlideShowImg').removeClass('bene_highlight')
		showSlides(slideIndex = n);
		$(e.target).addClass('bene_highlight')
	}

	function showSlides(n) {
		let i;
		let slides = document.getElementsByClassName("benefits-Slides");
		let dots = document.getElementsByClassName("Benefits-dotLpWe");

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

  useEffect(()=>{
		
	
	showSlides(slideIndex);

	},[]);





  return (

	<section ref={benefitsRef} className="benefits-area position-relative pt-115 pb-90 blkBg">

		<div className="benefits-bg" />
			<div className="container">

				<div className="row justify-content-center">
					<div className="col-xl-6 col-lg-8">
					<div className="section-title title-style-three text-center bene_toptxt">
						<h2 className='beneHeader'>Benefits</h2>
						<p className='benetxt'>Select a country to see the benefits</p>
					</div>
					</div>
				</div>


				{/* <!-- The dots/circles --> */}
				<div className='Benefits_dots_circles'>
					<span className="Benefits-dotLpWe" onClick={(e) => currentSlide(1,e)}>
						<img className="benefits-SlideShowImg bene_highlight" src="https://i.loopme.me/gwd/test/LP_website/img/images/Benefits/Flag-UK.png" alt='' ></img>
					</span>
					<span className="Benefits-dotLpWe" onClick={(e) => currentSlide(2,e)}>
						<img className="benefits-SlideShowImg" src="https://i.loopme.me/gwd/test/LP_website/img/images/Benefits/Flags-Ukraine.png" alt='' ></img>
					</span>
					<span className="Benefits-dotLpWe" onClick={(e) => currentSlide(3,e)}>
						<img className="benefits-SlideShowImg" src="https://i.loopme.me/gwd/test/LP_website/img/images/Benefits/Flags-Poland.png" alt='' ></img>
					</span>
					<span className="Benefits-dotLpWe" onClick={(e) => currentSlide(4,e)}>
						<img className="benefits-SlideShowImg" src="https://i.loopme.me/gwd/test/LP_website/img/images/Benefits/Flags-US.png" alt='' ></img>
					</span>
					<span className="Benefits-dotLpWe" onClick={(e) => currentSlide(5,e)}>
						<img className="benefits-SlideShowImg" src="https://i.loopme.me/gwd/test/LP_website/img/images/Benefits/Flags-Singapore.png" alt='' ></img>
					</span>
				</div>

			
				{/* <!-- Slideshow container --> */}
				<div className="benefits-slideshow-container">

				{/* <!-- Full-width images with number and caption text --> */}
					<div className="benefits-Slides fadeLpWe">
						<picture className="benefits-SlideShowMainImg">
							<source media="(max-width:414px)" srcSet="https://i.loopme.me/gwd/test/LP_website/img/images/Benefits/Mobile_Benefits_UK.png"></source>
							<img src="https://i.loopme.me/gwd/test/LP_website/img/images/Benefits/Benefits_UK_min.png" alt='' ></img>
						</picture>
					</div>

					<div className="benefits-Slides fadeLpWe">
						<picture className="benefits-SlideShowMainImg">
							<source media="(max-width:414px)" srcSet="https://i.loopme.me/gwd/test/LP_website/img/images/Benefits/Mobile_Benefits_UK.png"></source>
							<img src="https://i.loopme.me/gwd/test/LP_website/img/images/Benefits/Benefits_Ukraine_min.png" alt='' ></img>
						</picture>
					</div>

					<div className="benefits-Slides fadeLpWe">
						<picture className="benefits-SlideShowMainImg">
							<source media="(max-width:414px)" srcSet="https://i.loopme.me/gwd/test/LP_website/img/images/Benefits/Mobile_Benefits_UK.png"></source>
							<img src="https://i.loopme.me/gwd/test/LP_website/img/images/Benefits/Benefits_PL.png" alt='' ></img>
						</picture>
					</div>

					<div className="benefits-Slides fadeLpWe">
						<picture className="benefits-SlideShowMainImg">
							<source media="(max-width:414px)" srcSet="https://i.loopme.me/gwd/test/LP_website/img/images/Benefits/Mobile_Benefits_UK.png"></source>
							<img src="https://i.loopme.me/gwd/test/LP_website/img/images/Benefits/Benefits_US_min.png" alt='' ></img>
						</picture>
					</div>

					<div className="benefits-Slides fadeLpWe">
						<picture className="benefits-SlideShowMainImg">
							<source media="(max-width:414px)" srcSet="https://i.loopme.me/gwd/test/LP_website/img/images/Benefits/Mobile_Benefits_UK.png"></source>
							<img src="https://i.loopme.me/gwd/test/LP_website/img/images/Benefits/Benefits_APAC_min.png" alt='' ></img>
						</picture>
					</div>

					

					{/* <div className="benefits-Slides fadeLpWe">
						<img className="benefits-SlideShowMainImg" src="https://i.loopme.me/gwd/test/LP_website/img/images/Benefits/Benefits_Ukraine_min.png" alt='' ></img>
					</div>

					<div className="benefits-Slides fadeLpWe">
						<img className="benefits-SlideShowMainImg" src="https://i.loopme.me/gwd/test/LP_website/img/images/Benefits/Benefits_PL.png" alt='' ></img>
					</div>

					<div className="benefits-Slides fadeLpWe">
						<img className="benefits-SlideShowMainImg" src="https://i.loopme.me/gwd/test/LP_website/img/images/Benefits/Benefits_US_min.png" alt='' ></img>
					</div>

					<div className="benefits-Slides fadeLpWe">
						<img className="benefits-SlideShowMainImg" src="https://i.loopme.me/gwd/test/LP_website/img/images/Benefits/Benefits_APAC_min.png" alt='' ></img>
					</div> */}


				</div>

				<br></br>


			</div>

	</section>


  )
}

export default Benefits

