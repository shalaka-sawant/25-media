import gsap from 'gsap';
import { useEffect } from 'react';

export default function Loader(){

    useEffect(() => {
        const tl = gsap.timeline();
    
        tl.to(".line", {
          width: "0%",
          duration: 1,
          delay: 0.1,
          ease: "Power4.easeInOut"
        })
        .to(".loader h1", {
          y: 100,
          duration: 1.5,
          delay: -0.5,
          opacity: 1,
          ease: "Power4.easeInOut"
        })
        .to(".loader", {
          height: 0,
          bottom: "100%",
          duration: 1.5,
          delay: -0.6,
          ease: "Circ.easeInOut"
        })
        .to(".loader h2", {
          y: 0,
          duration: 1,
          delay: -0.6,
          ease: "Power3.easeInOut"
        });
      }, []);

    return(
        <div className="loader">
    <span className="text">
      <h1>Branding and Digital Marketing Agency</h1>
    </span>
    <span className="line-container">
      <span className="line"></span>
    </span>
  </div>
    )
}