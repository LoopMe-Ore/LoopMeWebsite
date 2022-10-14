import React,{ useEffect,useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// https://codesandbox.io/s/image-sequence-onscroll-react-react-scrollmagic-forked-oxmni9?file=/src/Sequence/index.js


// 2.SECOND
// https://codesandbox.io/s/98nfs?file=/src/index.js 
// https://codesandbox.io/s/scroll-animated-forked-ovu6q9?file=/src/index.js 

function Section3Area() {

  gsap.registerPlugin(ScrollTrigger);
  // let tl = gsap.timeline({ defaults: { duration: 1, ease: "sine.out" } });
  let masterTl = gsap.timeline({ defaults: { duration: 1, ease: "sine.out" } });
  

  useEffect(()=>{

    console.log("RUNNNA")

    // gsap.set("#circle-svg", {
    //   attr: { viewBox: `0 0 ${window.innerWidth} ${window.innerHeight} ` }
    // });

    // gsap.set(".second-section span", { autoAlpha: 0, scale: 1 });

    ScrollTrigger.matchMedia({
      all: function () {

        gsap.set(".hero-section", { autoAlpha: 1 });

        const canvas = document.getElementById("sound");
        const context = canvas.getContext("2d");

        canvas.width = 1920;
        canvas.height = 1080;

        const frameCount = 414;

        const currentFrame = (index) =>
        `https://i.loopme.me/gwd/test/LP_website/img/overview_img_1010/JPEG/0_${(index).toString()}.jpg`;

        const images = [];

        const airpods = {
          frame: 0
        };

        for (let i = 0; i < frameCount; i++) {
          const img = new Image();
          img.src = currentFrame(i);
          images.push(img);
          console.log(i);
        }

        // images[0].onload = render;

        function render() {
          context.clearRect(0, 0, canvas.width, canvas.height);
          context.drawImage(images[airpods.frame], 0, 0);
        }

        ScrollTrigger.create({
          trigger: "#wrapper",
          start: "top top",
          // end: "+=25000",
          end: "+=" + (window.innerHeight * 8),
          markers: true,
          pin: true,
          // pinSpacing: false,
          scrub: 1,
          immediateRender: false,
          animation: masterTl,
          anticipatePin: true
        });

        masterTl
        .to(".second-section", { 
          yPercent: -95,
        }, "<")
        .to(
          airpods,
          {
            immediateRender: false,
            frame: frameCount - 1,
            snap: "frame",
            ease: "none",
            onUpdate: render // use animation onUpdate instead of scrollTrigger's onUpdate
          },
          "<"
        )
      },

    // "(min-width: 768px)": function () {
    //   gsap.set(".hero-section_content", { xPercent: -50, yPercent: -50 });

    //   tl.to(".hero-section_content", { yPercent: -78 }, "<");
    // }

  });


},[])

  return (
	
    <div className="with-js">
    <main>
      <div id="wrapper">
        <div className="sub-header"></div>

        <section className="hero-section">
        
          <div className="hero-section_content">
            <h1 className="font-xxl">Our Values</h1>
            <p className="font-s">This is why we’re committing to nurturing an inclusive and diverse global team. We know that diversity drives innovation, which is why we deeply value your perspective and have built a culture in which you can do your very best work.</p>
          </div>
        </section>

        <section className="panel second-section">

          <div className="canvas-wrapper">
            <canvas id="sound">
            </canvas>
          </div>
          
          {/* <svg
            id="circle-svg"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          ></svg> */}

        </section>

      </div>
    </main>
  </div>


    

  )
}

export default Section3Area