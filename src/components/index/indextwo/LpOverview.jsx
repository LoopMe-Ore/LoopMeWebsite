import React from 'react'
import {Link} from 'react-router-dom'



function LpOverview() {

  
  return (
	 <section className="LpOverview-area position-relative pt-115 pb-90">


              <div className="container">

                <img className='Overview_header' src="https://i.loopme.me/gwd/test/LP_website/img/images/Overview/Header.png" alt="" />


                <div className="container_grid">

                  <div className="grid-item">
                    <img className='grid_icon' src="https://i.loopme.me/gwd/test/LP_website/img/images/Overview/icon_1.png" alt="" />
                    <img id="overview_img_1" className='grid_text' src="https://i.loopme.me/gwd/test/LP_website/img/images/Overview/Paragraph_1.png" alt="" />
                  </div>


                  <div className="grid-item">
                      <img className='grid_icon' src="https://i.loopme.me/gwd/test/LP_website/img/images/Overview/Icon_2.png" alt="" />
                      <img id="overview_img_2" className='grid_text' src="https://i.loopme.me/gwd/test/LP_website/img/images/Overview/Paragraph_2.png" alt="" />
                  </div>

                  <div className="grid-item">
                    <img className='grid_icon' src="https://i.loopme.me/gwd/test/LP_website/img/images/Overview/Icon_3.png" alt="" />
                    <img id="overview_img_3" className='grid_text' src="https://i.loopme.me/gwd/test/LP_website/img/images/Overview/Paragraph_3.png" alt="" />
                  </div>  

                  <div className="grid-item">
                    <img className='grid_icon' src="https://i.loopme.me/gwd/test/LP_website/img/images/Overview/icon_4.png" alt="" />
                    <img id="overview_img_4" className='grid_text' src="https://i.loopme.me/gwd/test/LP_website/img/images/Overview/Paragraph_4.png" alt="" />
                  </div>

                  
                </div>

              </div>

          </section>
  )
}

export default LpOverview