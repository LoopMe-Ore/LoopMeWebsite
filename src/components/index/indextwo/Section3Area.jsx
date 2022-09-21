import React, { useRef } from "react";
import ReactDOM from "react-router-dom";
import {Link} from 'react-router-dom'
import { Controller, Scene } from "react-scrollmagic";
import Sequence from "./Sequence/Index";

// https://codesandbox.io/s/image-sequence-onscroll-react-react-scrollmagic-forked-oxmni9?file=/src/Sequence/index.js

function Section3Area() {

  const ref = useRef();

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
          <Scene duration="350%" triggerHook="onCenter" offset="500%" pin>
            {(progress) => (
              <div style={{ height: "100vh", position: "relative" }}>
                <Sequence ref={ref} progress={progress} />
              </div>
            )}
          </Scene>
        </Controller>
      </div>
    </div>

    

  )
}

export default Section3Area