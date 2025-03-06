// components/MouseFollow.js
'use client'

import { useEffect } from 'react';
import gsap from 'gsap';

export default function MouseFollow() {
  useEffect(() => {
    const bigcircle = document.getElementById('bigcircle');
    const smallcircle = document.getElementById('smallcircle');

    let mouseX = 0;
    let mouseY = 0;

    // GSAP animation setup
    gsap.to({}, 0.016, {
      repeat: -1,
      onRepeat: function () {
        gsap.set(bigcircle, {
          css: {
            left: mouseX,
            top: mouseY
          }
        });
        gsap.set(smallcircle, {
          css: {
            left: mouseX,
            top: mouseY
          }
        });
      }
    });

    // Mouse move event listener
    const mouseMoveHandler = (e: { clientX: number; clientY: number; }) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Add mousemove event listener
    window.addEventListener("mousemove", mouseMoveHandler);

    // Cleanup function to remove event listener when the component is unmounted
    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return (
    <div className="cursor">
  <div id="bigcircle" className="cursor__ball cursor__ball--big ">
  </div>
  
  <div id="smallcircle" className="cursor__ball cursor__ball--small">
  </div>
</div>
  );
}
