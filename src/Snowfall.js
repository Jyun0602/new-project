import React, { useEffect, useState } from "react";

function Snowfall() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    const W = window.innerWidth;
    const H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    const mp = 240;
    const newParticles = [];
    for (let i = 0; i < mp; i++) {
      newParticles.push({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 4 + 1,
        d: Math.random() * mp,
      });
    }
    setParticles(newParticles);

    function draw() {
      ctx.clearRect(0, 0, W, H);

      ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
      ctx.beginPath();
      for (let i = 0; i < mp; i++) {
        const p = particles[i];
        ctx.moveTo(p.x, p.y);
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
      }
      ctx.fill();
      update();
    }

    let angle = 0;
    function update() {
      angle += 0.01;
      const updatedParticles = particles.map((p) => {
        p.y += Math.cos(angle + p.d) + 1 + p.r / 2;
        p.x += Math.sin(angle) * 2;

        if (p.x > W + 5 || p.x < -5 || p.y > H) {
          if (particles.indexOf(p) % 3 > 0) {
            p.x = Math.random() * W;
            p.y = -10;
          } else {
            if (Math.sin(angle) > 0) {
              p.x = -5;
              p.y = Math.random() * H;
            } else {
              p.x = W + 5;
              p.y = Math.random() * H;
            }
          }
        }
        return p;
      });
      setParticles(updatedParticles);
    }

    const intervalId = setInterval(draw, 33);

    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return <canvas id="canvas" />;
}

export default Snowfall;
