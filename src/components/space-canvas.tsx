import React, { useEffect, useRef } from "react";

const SpaceCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const config = {
      perspective: 3,
      star_color: "255, 255, 255",
      speed: 0.2,
      stars_count: 2,
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let stars: any[] = [];
    let canvasCenterX: number;
    let canvasCenterY: number;
    let focalLength: number;
    let speed: number;
    let starsCount: number;
    const cow = new Image();

    const start = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      canvasCenterX = canvas.width / 2;
      canvasCenterY = canvas.height / 2;
      starsCount = canvas.width / config.stars_count;
      focalLength = canvas.width / config.perspective;
      speed = (config.speed * canvas.width) / 2000;
      stars = [];

      for (let i = 0; i < starsCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * canvas.width,
        });
      }

      canvas.style.opacity = "1";

      cow.src =
        "https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Fast-Food-PNG-Clipart/Hamburger_PNG_Vector_Picture.png?m=1507172108";
      cow.onload = () => {
        render();
      };
    };

    const render = () => {
      if (!canvas || !context) return;

      animationFrameRef.current = requestAnimationFrame(render);
      context.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        star.z -= speed;

        if (star.z <= 0) {
          stars[i] = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            z: canvas.width,
          };
        }

        const starX =
          (star.x - canvasCenterX) * (focalLength / star.z) + canvasCenterX;
        const starY =
          (star.y - canvasCenterY) * (focalLength / star.z) + canvasCenterY;
        const starRadius = Math.max(0, (1.4 * (focalLength / star.z)) / 2);
        const starOpacity = 1.2 - star.z / canvas.width;
        const cowWidth = Math.max(0.1, (100 * (focalLength / star.z)) / 2);

        if (star.cow) {
          context.save();
          context.translate(
            starX - cowWidth + cowWidth / 2,
            starY - cowWidth + cowWidth / 2
          );
          context.rotate(star.z / (star.rotation_speed || 50));
          context.translate(
            -(starX - cowWidth + cowWidth / 2),
            -(starY - cowWidth + cowWidth / 2)
          );
          context.globalAlpha = starOpacity;
          context.drawImage(
            cow,
            0,
            0,
            cow.width,
            cow.width,
            starX - cowWidth,
            starY - cowWidth,
            cowWidth,
            cowWidth
          );
          context.restore();
        } else {
          context.fillStyle = `rgba(${config.star_color},${starOpacity})`;
          context.beginPath();
          context.arc(starX, starY, starRadius, 0, Math.PI * 2);
          context.fill();
        }
      }
    };

    start();
    window.addEventListener("resize", start);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener("resize", start);
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      <canvas
        ref={canvasRef}
        id="canvas"
        style={{ width: "100%", height: "100%", display: "block" }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0) 40%, rgba(0,0,0,0.5) 100%)",
        }}
      />
    </div>
  );
};

export default SpaceCanvas;
