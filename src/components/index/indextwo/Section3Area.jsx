import React,{ useEffect,useRef } from "react";
import ReactDOM from "react-router-dom";
import {Link} from 'react-router-dom'
import { Controller, Scene } from "react-scrollmagic";
import Sequence from "./Sequence/Index";

// https://codesandbox.io/s/image-sequence-onscroll-react-react-scrollmagic-forked-oxmni9?file=/src/Sequence/index.js

function Section3Area() {

  const ref = useRef();

  useEffect(()=>{

    // console.log(document.getElementsByClassName('scrollmagic-pin-spacer')[0].style.cssText)
    // document.querySelector(".scrollmagic-pin-spacer").style.paddingTop = null;

  },[])

  return (
	
      <div className="mainContainer">

        <div>
        <section className="ourValues-area position-relative pt-115 pb-90 row justify-content-center">
          <div className="section-title title-style-three text-center mb-70 col-xl-5 col-lg-7 ">
            <h2> Our Values </h2>
            <p>This is why we’re committing to nurturing an inclusive and diverse global team. We know that diversity drives innovation, which is why we deeply value your perspective and have built a culture in which you can do your very best work. </p>
          </div>
          </section>
        </div>


      <div className="animation_ourvalues">
        <Controller>
          <Scene duration="950%" triggerHook="onCenter" offset="500%" pin indicators="true" >

            {(progress,leave) => {
              if(leave.type === "leave"){
                {/* console.log("Finsihed"); */}
                {/* Remove Spacing Bottom */}
                document.querySelector(".scrollmagic-pin-spacer").style.paddingBottom = null
              }
              return (
              <div style={{ height: "100vh", position: "relative" }}>
                <Sequence ref={ref} progress={progress} />
              </div>
              )
            }}

          </Scene>
        </Controller>
      </div>
      {/* <img className='bottom_section3' src={process.env.PUBLIC_URL + "/assets/img/bg/Bottom_wave.png"} alt="" /> */}
    </div>

    

  )
}

export default Section3Area