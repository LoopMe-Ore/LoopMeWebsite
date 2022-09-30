import React from 'react'
import {Link} from 'react-router-dom'



function LpOverview() {

  
  return (
	 <section className="LpOverview-area position-relative pt-115 pb-90">

            {/* <div className="container"> */}
              {/* <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-8">
                  <div className="section-title title-style-three text-center mb-70">
                  <h2 className='header_black' > LoopMe Overview </h2>
                  </div>
                </div>
              </div>
              
              <div className='video_div'>
                
                <div className='video_curve'>  */}
                {/* src={process.env.PUBLIC_URL + "/ */}
                  {/* <video className='lp_video' controls poster={process.env.PUBLIC_URL + "/assets/video/video_placeholder.png"}>
                    <source className='lp_video_src' src={process.env.PUBLIC_URL + "/assets/video/LoopMe_video.mp4"} type="video/mp4"></source>
                  </video>

                </div>

                <img className='lp_video_bg' src={process.env.PUBLIC_URL + "/assets/video/Rectangle.png"} alt="" />
              </div> */}
              

            {/* </div> */}

              <div className="container">

                <img className='Overview_header' src="https://i.loopme.me/gwd/test/LP_website/img/images/Overview/Header.png" alt="" />


                <div className="container_grid">

                  <div class="grid-item">
                    <img className='grid_icon' src="https://i.loopme.me/gwd/test/LP_website/img/images/Overview/icon_1.png" alt="" />
                    <img id="overview_img_1" className='grid_text' src="https://i.loopme.me/gwd/test/LP_website/img/images/Overview/Paragraph_1.png" alt="" />
                  </div>


                  <div class="grid-item">
                      <img className='grid_icon' src="https://i.loopme.me/gwd/test/LP_website/img/images/Overview/Icon_2.png" alt="" />
                      <img id="overview_img_2" className='grid_text' src="https://i.loopme.me/gwd/test/LP_website/img/images/Overview/Paragraph_2.png" alt="" />
                  </div>

                  <div class="grid-item">
                    <img className='grid_icon' src="https://i.loopme.me/gwd/test/LP_website/img/images/Overview/Icon_3.png" alt="" />
                    <img id="overview_img_3" className='grid_text' src="https://i.loopme.me/gwd/test/LP_website/img/images/Overview/Paragraph_3.png" alt="" />
                  </div>  

                  <div class="grid-item">
                    <img className='grid_icon' src="https://i.loopme.me/gwd/test/LP_website/img/images/Overview/icon_4.png" alt="" />
                    <img id="overview_img_4" className='grid_text' src="https://i.loopme.me/gwd/test/LP_website/img/images/Overview/Paragraph_4.png" alt="" />
                  </div>

                  
                </div>


              </div>

          </section>
  )
}

export default LpOverview