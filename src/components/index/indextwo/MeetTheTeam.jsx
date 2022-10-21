import React, { useState, useRef, useEffect } from 'react'
import './caro.scss'
import $ from 'jquery';



function MeetTheTeam() {
	
	// NOTE CSS FOR THIS IS IN CARO.SCSS

	// https://codepen.io/dobladov/pen/ZOqOoa

	function currentSlide(e_Name) {
		$('.dotLpMTT').removeClass('dot_highlight');
		// console.log(e_Name);

		switch(e_Name) {
			case "1":
				// console.log("oneee");

				// find the div with the corresponding name to btn ID
				moveToSelected($("#carousel div[data-name=1]"));

			  break;
			case "2":
				// console.log("2");

				moveToSelected($("#carousel div[data-name=2]"));
			  break;
				
			case "3":
				// console.log("oneeefnienpf");

				moveToSelected($("#carousel div[data-name=3]"));
				break;

			case "4":
				// console.log("one345678e");

				moveToSelected($("#carousel div[data-name=4]"));
				break;

			case "5":
				// console.log("oneee");

				moveToSelected($("#carousel div[data-name=5]"));
				break;

			case "6":
				// console.log("oneee");

				moveToSelected($("#carousel div[data-name=6]"));
				break;

			case "7":
				// console.log("oneee");

				moveToSelected($("#carousel div[data-name=7]"));
				break;

			case "8":
				// console.log("oneee");

				moveToSelected($("#carousel div[data-name=8]"));
				break;

			case "9":
				// console.log("oneee");

				moveToSelected($("#carousel div[data-name=9]"));
				break;

			default:
				console.log("Oh No :( Gallery Broken")
		}


		// $(".dotLpMTT [data-name=1]").addClass('dot_highlight');

		let strDot = `.dotLpMTT[data-name=${e_Name}]`;
		$(strDot).addClass('dot_highlight');
	}

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

		
		// Dotsss
		$('.dotLpMTT').removeClass('dot_highlight');
		let strDot = `.dotLpMTT[data-name=${element[0].dataset.name}]`;
		$(strDot).addClass('dot_highlight');

		// currentSlide(e)
		// console.log();
		// currentSlide(element[0].dataset.name);
	  
	  }
	

	useEffect(()=>{

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
						<p className='header_black mttsubheader'>Join Loopers across our regions and activities. </p>
					</div>
					</div>
				</div>

				
				<div id="carousel">

					<div data-name="1" className="hideLeft">
						<img src="https://i.loopme.me/gwd/test/LP_website/img/images/Gallery/min_File1.png"></img>
					</div>

					<div data-name="2" className="hideLeft">
						<img src="https://i.loopme.me/gwd/test/LP_website/img/images/Gallery/min_File2.png"></img>
					</div>

					<div data-name="3" className="prevLeftSecond">
						<img src="https://i.loopme.me/gwd/test/LP_website/img/images/Gallery/min_File3.png"></img>
					</div>

					<div data-name="4" className="prev">
						<img src="https://i.loopme.me/gwd/test/LP_website/img/images/Gallery/min_File4.png"></img>
					</div>

					<div data-name="5" className="selected">
						<img src="https://i.loopme.me/gwd/test/LP_website/img/images/Gallery/min_File5.png"></img>
					</div>

					<div data-name="6" className="next">
						<img src="https://i.loopme.me/gwd/test/LP_website/img/images/Gallery/min_File6.png"></img>
					</div>

					<div data-name="7" className="nextRightSecond">
						<img src="https://i.loopme.me/gwd/test/LP_website/img/images/Gallery/min_File7.png"></img>
					</div>

					<div data-name="8" className="hideRight">
						<img src="https://i.loopme.me/gwd/test/LP_website/img/images/Gallery/min_File8.png"></img>
					</div>

					<div data-name="9" className="hideRight">
						<img src="https://i.loopme.me/gwd/test/LP_website/img/images/Gallery/min_File9.png"></img>
					</div>
				
				</div>


				<div className="MTTbuttons">

					<div className='LpMTT_dot_'>
						<div data-name="1" className="dotLpMTT" onClick={(e) => currentSlide(e.target.dataset.name)}></div>
					</div>

					<div className='LpMTT_dot_'>
						<div data-name="2" className="dotLpMTT" onClick={(e) => currentSlide(e.target.dataset.name)}></div>
					</div>

					<div className='LpMTT_dot_'>
						<div data-name="3" className="dotLpMTT" onClick={(e) => currentSlide(e.target.dataset.name)}></div>
					</div>

					<div className='LpMTT_dot_'>
						<div data-name="4" className="dotLpMTT" onClick={(e) => currentSlide(e.target.dataset.name)}></div>
					</div>

					<div className='LpMTT_dot_'>
						<div data-name="5" className="dotLpMTT  dot_highlight" onClick={(e) => currentSlide(e.target.dataset.name)}></div>
					</div>

					<div className='LpMTT_dot_'>
						<div data-name="6" className="dotLpMTT" onClick={(e) => currentSlide(e.target.dataset.name)}></div>
					</div>

					<div className='LpMTT_dot_'>
						<div data-name="7" className="dotLpMTT" onClick={(e) => currentSlide(e.target.dataset.name)}></div>
					</div>

					<div className='LpMTT_dot_'>
						<div data-name="8" className="dotLpMTT" onClick={(e) => currentSlide(e.target.dataset.name)}></div>
					</div>

					<div className='LpMTT_dot_'>
						<div data-name="9" className="dotLpMTT" onClick={(e) => currentSlide(e.target.dataset.name)}></div>
					</div>



				</div>

				
	</section>



  )
}

export default MeetTheTeam

