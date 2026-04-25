import "./styles/Work.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>01</h3>
                <div>
                  <a href="https://crent.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <h4>Crent</h4>
                  </a>
                  <p>Car Rental Platform</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>React, Tailwind CSS, TypeScript, JavaScript</p>
            </div>
            <div className="work-curiosity">
              <p>Click to explore the experience</p>
            </div>
          </div>

          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>02</h3>
                <div>
                  <a href="https://travel-management-system-iota.vercel.app/login" target="_blank" rel="noopener noreferrer">
                    <h4>Travel Management</h4>
                  </a>
                  <p>Management System</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>React, Tailwind CSS, TypeScript, JavaScript, SVGs</p>
            </div>
            <div className="work-curiosity">
              <p>Discover the journey</p>
            </div>
          </div>

          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>03</h3>
                <div>
                  <h4>Future Project</h4>
                  <p>Full Stack / 3D</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Next.js, Three.js, Node.js, SQL</p>
            </div>
            <div className="work-coming-soon">
              <p>Coming Soon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
