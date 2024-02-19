// import React, { useEffect, useState } from "react";

// function Snowfall() {
//   const [particles, setParticles] = useState([]);

//   useEffect(() => {
//     const canvas = document.getElementById("canvas");
//     const ctx = canvas.getContext("2d");

//     const W = window.innerWidth;
//     const H = window.innerHeight;
//     canvas.width = W;
//     canvas.height = H;

//     const mp = 240;
//     const newParticles = [];
//     for (let i = 0; i < mp; i++) {
//       newParticles.push({
//         x: Math.random() * W,
//         y: Math.random() * H,
//         r: Math.random() * 4 + 1,
//         d: Math.random() * mp,
//       });
//     }
//     setParticles(newParticles);

//     function draw() {
//       ctx.clearRect(0, 0, W, H);

//       ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
//       ctx.beginPath();
//       for (let i = 0; i < mp; i++) {
//         const p = particles[i];
//         ctx.moveTo(p.x, p.y);
//         ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
//       }
//       ctx.fill();
//       update();
//     }

//     let angle = 0;
//     function update() {
//       angle += 0.01;
//       const updatedParticles = particles.map((p) => {
//         p.y += Math.cos(angle + p.d) + 1 + p.r / 2;
//         p.x += Math.sin(angle) * 2;

//         if (p.x > W + 5 || p.x < -5 || p.y > H) {
//           if (particles.indexOf(p) % 3 > 0) {
//             p.x = Math.random() * W;
//             p.y = -10;
//           } else {
//             if (Math.sin(angle) > 0) {
//               p.x = -5;
//               p.y = Math.random() * H;
//             } else {
//               p.x = W + 5;
//               p.y = Math.random() * H;
//             }
//           }
//         }
//         return p;
//       });
//       setParticles(updatedParticles);
//     }

//     const intervalId = setInterval(draw, 33);

//     return () => clearInterval(intervalId);
//   }, []); // Empty dependency array ensures this effect runs only once after initial render

//   return <canvas id="canvas" />;
// }

// export default Snowfall;

// 預設長寬
// import React, { useEffect, useRef } from "react";

// const Snowfall = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");

//     let W = window.innerWidth;
//     let H = window.innerHeight;
//     canvas.width = W;
//     canvas.height = H;

//     const mp = 240;
//     const particles = [];
//     for (let i = 0; i < mp; i++) {
//       particles.push({
//         x: Math.random() * W,
//         y: Math.random() * H,
//         r: Math.random() * 4 + 1,
//         d: Math.random() * mp,
//       });
//     }

//     let angle = 0;

//     const draw = () => {
//       ctx.clearRect(0, 0, W, H);

//       ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
//       ctx.beginPath();
//       for (let i = 0; i < mp; i++) {
//         const p = particles[i];
//         ctx.moveTo(p.x, p.y);
//         ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
//       }
//       ctx.fill();
//       update();
//     };

//     const update = () => {
//       angle += 0.01;
//       for (let i = 0; i < mp; i++) {
//         const p = particles[i];
//         p.y += Math.cos(angle + p.d) + 1 + p.r / 2;
//         p.x += Math.sin(angle) * 2;

//         if (p.x > W + 5 || p.x < -5 || p.y > H) {
//           if (i % 3 > 0) {
//             particles[i] = { x: Math.random() * W, y: -10, r: p.r, d: p.d };
//           } else {
//             if (Math.sin(angle) > 0) {
//               particles[i] = { x: -5, y: Math.random() * H, r: p.r, d: p.d };
//             } else {
//               particles[i] = { x: W + 5, y: Math.random() * H, r: p.r, d: p.d };
//             }
//           }
//         }
//       }
//     };

//     const animationLoop = setInterval(draw, 33);

//     return () => clearInterval(animationLoop);
//   }, []);

//   return <canvas ref={canvasRef} id="canvas"></canvas>;
// };

// export default Snowfall;

import React, { useEffect, useRef } from "react";

const Snowfall = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const canvasWidth = 2599;
    const canvasHeight = 500;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    const mp = 240;
    const particles = [];
    for (let i = 0; i < mp; i++) {
      particles.push({
        x: Math.random() * canvasWidth,
        y: Math.random() * canvasHeight,
        r: Math.random() * 4 + 1,
        d: Math.random() * mp,
      });
    }

    let angle = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
      ctx.beginPath();
      for (let i = 0; i < mp; i++) {
        const p = particles[i];
        ctx.moveTo(p.x, p.y);
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
      }
      ctx.fill();
      update();
    };

    const update = () => {
      angle += 0.01;
      for (let i = 0; i < mp; i++) {
        const p = particles[i];
        p.y += Math.cos(angle + p.d) + 1 + p.r / 2;
        p.x += Math.sin(angle) * 2;

        if (p.x > canvasWidth + 5 || p.x < -5 || p.y > canvasHeight) {
          if (i % 3 > 0) {
            particles[i] = {
              x: Math.random() * canvasWidth,
              y: -10,
              r: p.r,
              d: p.d,
            };
          } else {
            if (Math.sin(angle) > 0) {
              particles[i] = {
                x: -5,
                y: Math.random() * canvasHeight,
                r: p.r,
                d: p.d,
              };
            } else {
              particles[i] = {
                x: canvasWidth + 5,
                y: Math.random() * canvasHeight,
                r: p.r,
                d: p.d,
              };
            }
          }
        }
      }
    };

    const animationLoop = setInterval(draw, 33);

    return () => clearInterval(animationLoop);
  }, []);

  return (
    <canvas
      style={{
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1,
      }}
      ref={canvasRef}
      id="canvas"
    ></canvas>
  );
};

export default Snowfall;
