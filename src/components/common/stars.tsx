import React, { useEffect } from "react";
import { rand } from "../../utils";

let count = 10;
let stars = [] as { x: number; y: number; size: number }[];

export default function Stars() {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const ctxRef = React.useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    canvasRef.current = canvas;

    const ctx = canvas.getContext("2d");
    ctxRef.current = ctx;

    const onResize = () => {
      const ratio = window.devicePixelRatio || 1;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      canvas.style.width = canvas.width + "px";
      canvas.style.height = canvas.height + "px";

      canvas.width *= ratio;
      canvas.height *= ratio;

      ctx?.scale(ratio, ratio);
    };

    window.requestAnimationFrame(render);

    window.addEventListener("resize", onResize);
    onResize();

    stars = [];
    for (let i = 0; i < count; i++) {
      stars.push({
        x: rand(
          window.innerWidth / 2,
          window.innerWidth + window.innerWidth / 2,
        ),
        y: -rand(window.innerHeight),
        size: rand(1),
      });
    }

    return () => window.removeEventListener("resize", onResize);
  }, []);

  function render() {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;

    if (!ctx) {
      return;
    }

    if (!canvas) {
      return;
    }

    ctx.fillStyle = "rgba(17, 17, 17, 0.2)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < count; i++) {
      const star = stars[i];

      if (star.x < 0 || star.y > window.innerHeight) {
        star.x = rand(
          window.innerWidth / 2,
          window.innerWidth + window.innerWidth / 2,
        );
        star.y = -rand(window.innerHeight);
        star.size = rand(4);
      }

      const visibility = 1 - (1 - star.size / 4 + star.y / canvas.height);

      ctx.fillStyle = `rgba(255, 255, 255, ${visibility})`;
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      ctx.fill();

      star.x -= star.size;
      star.y += star.size;

      ctx.fillStyle = "rgba(13, 13, 13, 1)";
      const scaleFactor = 30;

      ctx.fillRect(
        star.x + star.size * scaleFactor - (star.size * scaleFactor) / 4,
        star.y - star.size * scaleFactor - (star.size * scaleFactor) / 4,
        (star.size * scaleFactor) / 2,
        (star.size * scaleFactor) / 2,
      );
    }

    window.requestAnimationFrame(render);
  }

  return (
    <>
      <img src="/star-white.svg" alt="" id="star-white" />
      <canvas id="canvas" className="absolute h-full w-full">
        You should have javacript on to see this
      </canvas>
    </>
  );
}
