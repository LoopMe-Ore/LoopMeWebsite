import React, { useState, useRef, useEffect } from 'react'
import './caro.scss'
import $ from 'jquery';



function MeetTheTeam() {
	
	// NOTE CSS FOR THIS IS IN CARO.SCSS

	// https://codepen.io/dobladov/pen/ZOqOoa

	useEffect(()=>{
		function moveToSelected(element) {

			if (element == "next") {
			  var selected = $(".selected").next();
			} else if (element == "prev") {
			  var selected = $(".selected").prev();
			} else {
			  var selected = element;
			}
		  
			var next = $(selected).next();
			var prev = $(selected).prev();
			var prevSecond = $(prev).prev();
			var nextSecond = $(next).next();
		  
			$(selected).removeClass().addClass("selected");
		  
			$(prev).removeClass().addClass("prev");
			$(next).removeClass().addClass("next");
		  
			$(nextSecond).removeClass().addClass("nextRightSecond");
			$(prevSecond).removeClass().addClass("prevLeftSecond");
		  
			$(nextSecond).nextAll().removeClass().addClass('hideRight');
			$(prevSecond).prevAll().removeClass().addClass('hideLeft');
		  
		  }
		  
		  // Eventos teclado
		  $(document).keydown(function(e) {
			  switch(e.which) {
				  case 37: // left
				  moveToSelected('prev');
				  break;
		  
				  case 39: // right
				  moveToSelected('next');
				  break;
		  
				  default: return;
			  }
			  e.preventDefault();
		  });
		  
		  $('#carousel div').click(function() {
			moveToSelected($(this));
		  });
		  
		  $('#prev').click(function() {
			moveToSelected('prev');
		  });
		  
		  $('#next').click(function() {
			moveToSelected('next');
		  });


	},[]);

	
	  


  
  return (

	<section className="meet-the-team-area position-relative pt-115 pb-90 blkBg">

				<div className="row justify-content-center marginRmv">
					<div className="col-xl-6 col-lg-8">
					<div className="section-title title-style-three text-center mb-70">
						<h2 className='header_black'>Meet The Team</h2>
						<p className='header_black'>Join Loopers across our regions and activities. </p>
					</div>
					</div>
				</div>

				
				<div id="carousel">

					<div className="hideLeft">
						<img src="https://i.loopme.me/gwd/test/LP_website/img/images/Gallery/File1.png"></img>
					</div>

					<div className="hideLeft">
						<img src="https://i.loopme.me/gwd/test/LP_website/img/images/Gallery/File2.png"></img>
					</div>

					<div className="prevLeftSecond">
						<img src="https://i.loopme.me/gwd/test/LP_website/img/images/Gallery/File3.png"></img>
					</div>

					<div className="prev">
						<img src="https://i.loopme.me/gwd/test/LP_website/img/images/Gallery/File4.png"></img>
					</div>

					<div className="selected">
						<img src="https://i.loopme.me/gwd/test/LP_website/img/images/Gallery/File5.png"></img>
					</div>

					<div className="next">
						<img src="https://i.loopme.me/gwd/test/LP_website/img/images/Gallery/File6.png"></img>
					</div>

					<div className="nextRightSecond">
						<img src="https://i.loopme.me/gwd/test/LP_website/img/images/Gallery/File7.png"></img>
					</div>

					<div className="hideRight">
						<img src="https://i.loopme.me/gwd/test/LP_website/img/images/Gallery/File8.png"></img>
					</div>

					<div className="hideRight">
						<img src="https://i.loopme.me/gwd/test/LP_website/img/images/Gallery/File9.png"></img>
					</div>
					
					

					</div>

					<div className="buttons">
					<button id="prev">Prev</button>
					<button id="next">Next</button>
					</div>
				
	</section>



  )
}

export default MeetTheTeam

