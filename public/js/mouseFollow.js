document.addEventListener('DOMContentLoaded', function () {
    const bigcircle = document.getElementById('bigcircle');
    const smallcircle = document.getElementById('smallcircle');
  
    let mouseX = 0;
    let mouseY = 0;
  
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
  
    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });
  });
  