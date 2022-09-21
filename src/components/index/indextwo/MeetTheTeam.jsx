import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import $ from 'jquery';



function MeetTheTeam() {



	useEffect(()=>{

		//global variables
		var items = [];
		var startItem = 1;
		var position = 0;
		var itemCount = $('.carousel_meettheteam .items_mtt').length;
		var leftpos = itemCount;
		var resetCount = itemCount;
		let dots = document.getElementsByClassName("dotLpWe");


	//unused: gather text inside items class
	$('.items_mtt').each(function(index) {
		items[index] = $(this).text();
	});

	//swap images function
	function swap(action) {

		var direction = action;
	
		//moving carousel backwards
		if(direction == 'counter-clockwise') {

			var leftitem = $('.left-pos').attr('id') - 1;

			if(leftitem == 0) {
				leftitem = itemCount;
			}
			
			$('.right-pos').removeClass('right-pos').addClass('back-pos');
			$('.main-pos').removeClass('main-pos').addClass('right-pos');
			$('.left-pos').removeClass('left-pos').addClass('main-pos');
			$('#'+leftitem+'').removeClass('back-pos').addClass('left-pos');
			
			startItem--;

			if(startItem < 1) {
				startItem = itemCount;
			}
		}
	
		//moving carousel forward
		if(direction == 'clockwise' || direction == '' || direction == null ) {
			
			function pos(positionvalue) {

				if(positionvalue != 'leftposition') {
					//increment image list id
					position++;
					
					//if final result is greater than image count, reset position.
					if((startItem+position) > resetCount) {
						position = 1-startItem;
					}
				}
				
				//setting the left positioned item
				if(positionvalue == 'leftposition') {
					//left positioned image should always be one left than main positioned image.
					position = startItem - 1;
				
					//reset last image in list to left position if first image is in main position
					if(position < 1) {
						position = itemCount;
					}
				}
			
				return position;
			}  
		
			$('#'+ startItem +'').removeClass('main-pos').addClass('left-pos');
			$('#'+ (startItem+pos()) +'').removeClass('right-pos').addClass('main-pos');
			$('#'+ (startItem+pos()) +'').removeClass('back-pos').addClass('right-pos');
			$('#'+ pos('leftposition') +'').removeClass('left-pos').addClass('back-pos');

			startItem++;

			position=0;
			if(startItem > itemCount) {
				startItem = 1;
			}
		}

	}

	//next button click function
	// $('#next').click(function() {
	// 	swap('clockwise');
	// });

	// //prev button click function
	// $('#prev').click(function() {
	// 	swap('counter-clockwise');
	// });

	//if any visible items are clicked
	$('.carousel_meettheteam img').click(function() {

		console.log("Current position (img click)=   " +startItem)

		// let dots = document.getElementsByClassName("dot_mtt");
		
		// for (let i = 0; i < dots.length; i++) {
		// 	// console.log(type(dots[i].getAttribute('id'));
		// 	// console.log(type(startItem));

		// 	// console.log(dots[i].getAttribute('id'))
		// 	if(dots[i].getAttribute('id') === toString(startItem)){
		// 	// 	// dots[i].addClass('dot_highlight');
		// 	console.log("isrgbninr")
		// 	// } else {
		// 	// 	$('.dot_mtt').removeClass('dot_highlight')
		// 	}
		//   }

		if($(this).attr('class') == 'items_mtt left-pos') {
			swap('counter-clockwise'); 
		} else {
			swap('clockwise'); 
		}
	});

	// Dots Click
	$('.dot_mtt').click(function() {
		
		$('.dot_mtt').removeClass('dot_highlight')
		$(this).addClass('dot_highlight')

		console.log("Dot ID Selected =  " + $(this).attr('id'));

		let currentImg = document.getElementsByClassName("items_mtt main-pos")[0].getAttribute("id");
		console.log("Current position =   " + currentImg)

		let selectedImg = $(this).attr('id');

		if(selectedImg < currentImg) {
			console.log("antiClockwise");

			let numOfSwaps = currentImg - selectedImg;
			console.log("Num swaps=  " + numOfSwaps);

			for (let k = 0; k < numOfSwaps; k++) {
				swap('counter-clockwise');
			}

		} else if(currentImg < selectedImg) {
			console.log("Clockwise");

			let numOfSwaps = selectedImg - currentImg;
			console.log("Num swaps=")
			console.log(numOfSwaps);

			for (let k = 0; k < numOfSwaps; k++) {
				swap('clockwise');
			}
		} else {
			// do nothing
		}





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

				<div className='caro_div'>
				
					<div className="carousel_meettheteam">
						
						<img alt="a pic" className="items_mtt main-pos" id="1" loading="eager" src="assets/img/images/Gallery/File1.png"  />

						<img alt="a pic" className="items_mtt right-pos" id="2" loading="eager" src="assets/img/images/Gallery/File2.png"  />

						<img alt="a pic" className="items_mtt back-pos" id="3" loading="lazy" src="assets/img/images/Gallery/File3.png"  />

						<img alt="a pic" className="items_mtt back-pos" id="4" loading="lazy" src="assets/img/images/Gallery/File4.png"  />	

						<img alt="a pic" className="items_mtt back-pos" id="5" loading="lazy" src="assets/img/images/Gallery/File5.png"  />						

						<img alt="a pic" className="items_mtt back-pos" id="6" loading="lazy" src="assets/img/images/Gallery/File6.png"  />						

						<img alt="a pic" className="items_mtt back-pos" id="7" loading="lazy" src="assets/img/images/Gallery/File7.png"  />						

						<img alt="a pic" className="items_mtt back-pos" id="8" loading="lazy" src="assets/img/images/Gallery/File8.png"  />						

						<img alt="a pic" className="items_mtt left-pos" id="9" loading="eager" src="assets/img/images/Gallery/File9.png"  />						

					</div>
{/* 
					<span className='span_mtt'>
						<input type="button" value="Prev" id="prev"></input>
						<input type="button" value="Next" id="next"></input>
					</span> */}

					{/* <!-- The dots/circles --> */}
					<div className='mtt_dots'>

						<div className='mtt_dot_'>
							<div className="dot_mtt dot_highlight" id="1"></div>
						</div>

						<div className='mtt_dot_'>
							<div className="dot_mtt" id="2"></div>
						</div> 

						<div className='mtt_dot_'>
							<div className="dot_mtt" id="3"></div>
						</div>

						<div className='mtt_dot_'>
							<div className="dot_mtt" id="4"></div>
						</div>

						<div className='mtt_dot_'>
							<div className="dot_mtt" id="5"></div>
						</div>

						<div className='mtt_dot_'>
							<div className="dot_mtt" id="6"></div>
						</div>

						<div className='mtt_dot_'>
							<div className="dot_mtt" id="7"></div>
						</div>

						<div className='mtt_dot_'>
							<div className="dot_mtt" id="8"></div>
						</div>

						<div className='mtt_dot_'>
							<div className="dot_mtt" id="9"></div>
						</div>

					</div>

				</div>
			
				
	</section>



  )
}

export default MeetTheTeam

