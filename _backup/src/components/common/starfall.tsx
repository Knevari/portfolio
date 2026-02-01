import React, { useCallback, useEffect, useRef } from "react";
import { rand } from "../../utils";

let count = 10;
let stars = [] as { x: number; y: number; size: number }[];

export default function Starfall() {
  const starImageRef = useRef<HTMLImageElement | null>(null);
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const ctxRef = React.useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const starImageElement = document.querySelector(
      "#star-white",
    ) as HTMLImageElement;

    starImageElement.onload = () => {
      starImageRef.current = starImageElement;
    };

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

    // Create some stars
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

  const render = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;

    if (!ctx) {
      return;
    }

    if (!canvas) {
      return;
    }

    const trailCoverSize = 20;
    const trailCoverColor = "rgba(13, 13, 13, 1)";
    const clearColor = "rgba(17, 17, 17, 0.2)";
    const imageStarSizeRatio = 1.5;

    ctx.fillStyle = clearColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < count; i++) {
      const star = stars[i];

      if (
        star.x < -star.size * trailCoverSize * 3 ||
        star.y > window.innerHeight + star.size * trailCoverSize * 3
      ) {
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

      const starImage = starImageRef.current;

      if (starImage) {
        // ctx.save();
        // ctx.globalAlpha = visibility;
        ctx.drawImage(
          starImage,
          star.x - star.size * imageStarSizeRatio,
          star.y - star.size * imageStarSizeRatio,
          star.size * imageStarSizeRatio * 2,
          star.size * imageStarSizeRatio * 2,
        );
        // ctx.restore();
      }

      // Cover up trail
      star.x -= star.size;
      star.y += star.size;

      ctx.fillStyle = trailCoverColor;

      ctx.fillRect(
        star.x + star.size * trailCoverSize - (star.size * trailCoverSize) / 4,
        star.y - star.size * trailCoverSize - (star.size * trailCoverSize) / 4,
        (star.size * trailCoverSize) / 2,
        (star.size * trailCoverSize) / 2,
      );
    }

    window.requestAnimationFrame(render);
  }, []);

  return (
    <>
      <img src="/star-fill.svg" alt="" id="star-white" className="hidden" />
      <canvas id="canvas" className="absolute h-full w-full">
        You should have javacript on to see this
      </canvas>
    </>
  );
}
