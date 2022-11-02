import React,{ useEffect,useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {Fade} from "react-awesome-reveal";

function Section3Area() {

  gsap.registerPlugin(ScrollTrigger);
  // let tl = gsap.timeline({ defaults: { duration: 1, ease: "sine.out" } });
  // let masterTl = gsap.timeline({ defaults: {ease: "sine.out" } });

  let tl = gsap.timeline({ defaults: { duration: 1, ease: "sine.out" } });
  let masterTl = gsap.timeline({ defaults: { duration: 1, ease: "sine.out" } });
  

  useEffect(()=>{

    ScrollTrigger.matchMedia({
      all: function () {

        gsap.set(".hero-section", { autoAlpha: 1 });

        const canvas = document.getElementById("sound");
        const context = canvas.getContext("2d");

        canvas.width = 1158;
        canvas.height = 770;

        const frameCount = 137;

        // /img/overview_drausio/new_jpg/97.jpg

        const currentFrame = (index) =>
        `https://i.loopme.me/gwd/test/LP_website/img/overview_drausio/new_jpg/${(index).toString()}.jpg`;
        

        // const currentFrame = (index) =>
        // `https://i.loopme.me/gwd/test/LP_website/img/overview_img_1010/JPEG_Resize/JPEG/0_${(index).toString()}.jpg`;
        
        // const currentFrame = (index) =>
        // `https://www.apple.com/105/media/us/airpods-3rd-generation/2021/3c0b27aa-a5fe-4365-a9ae-83c28d10fa21/anim/spatial-audio/large/${(
        //   index + 1
        // )
        //   .toString()
        //   .padStart(4, "0")}.jpg`;

        const images = [];

        const airpods = {
          frame: 0
        };

        for (let i = 0; i < frameCount; i++) {
          const img = new Image();
          img.src = currentFrame(i);
          images.push(img);
          // console.log(img)
        }

        images[0].onload = render;

        function render() {
          context.clearRect(0, 0, canvas.width, canvas.height);
          context.drawImage(images[airpods.frame], 0, 0,canvas.width,canvas.height );
        }

        ScrollTrigger.create({
          trigger: "#wrapper",
          start: "top 3rem",
          // end:"bottom top",
          // end: "+=25000",
          end: "+=" + (window.innerHeight * 8),
          // markers: true,
          pin: true,
          // pinSpacing: false,
          scrub: true,
          immediateRender: false,
          animation: masterTl,
          anticipatePin: true
        });

        masterTl
        .to(".second-section", { yPercent: -95 }, "<")
        .to(".second-section span:first-child", { autoAlpha: 1, scale: 1 })
        .to(".second-section span:first-child", { autoAlpha: 0 }, "-=1")
        .to(
          airpods,
          {
            immediateRender: false,
            frame: frameCount - 1,
            snap: "frame",
            ease: "none",
            duration: 3,
            onUpdate: render // use animation onUpdate instead of scrollTrigger's onUpdate
          },
          "<"
        )
      },

    "(min-width: 768px)": function () {
      gsap.set(".hero-section_content", { xPercent: -50, yPercent: -50 });

      tl.to(".hero-section_content", { yPercent: -78 }, "<");
    }

  });


},[])

  return (
	
    <div className="with-js">
    <main>
      <div id="wrapper">
        <div className="sub-header"></div>

        <section className="hero-section">
        <Fade>
          <div className="hero-section_content">
            <h1 className="font-xxl">Our Values</h1>
            <p className="font-s">This is why we’re committing to nurturing an inclusive and diverse global team. We know that diversity drives innovation, which is why we deeply value your perspective and have built a culture in which you can do your very best work.</p>
          </div>
          </Fade>
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