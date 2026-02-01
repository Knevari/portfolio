import KUTE from "kute.js";
import { useEffect, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";

const trailerRoot = document.querySelector("#trailer") as HTMLElement;

export default function Trailer() {
  const elRef = useRef<HTMLDivElement | null>(null);
  const blobRef = useRef<SVGSVGElement | null>(null);

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  if (!elRef.current) elRef.current = document.createElement("div");

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const tween = KUTE.fromTo(
      "#blob-1",
      { path: "#blob-1" },
      { path: "#blob-2" },
      { repeat: 999, duration: 1000, yoyo: true },
    );

    tween.start();

    const onMouseMove = (e: MouseEvent) => {
      const blob = blobRef.current;
      if (!blob) return;

      const { clientX, clientY } = e;
      mouse.x.set(clientX - blob.clientWidth / 2);
      mouse.y.set(clientY - blob.clientHeight / 2);
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  });

  useEffect(() => {
    const el = elRef.current!;
    trailerRoot.appendChild(el);
    return () => {
      trailerRoot.removeChild(el);
    };
  }, []);

  return (
    <motion.svg
      ref={blobRef}
      id="blob-container"
      viewBox="0 0 900 600"
      width="75"
      height="50"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      role="presentation"
      className="pointer-events-none fixed z-0 hidden opacity-50 xl:block"
      style={{ left: mouse.x, top: mouse.y }}
    >
      <g transform="translate(432.6929216106889 319.4196667890774)">
        <path
          id="blob-1"
          d="M113 -119.9C155.4 -70.7 204.7 -35.4 222 17.3C239.3 70 224.7 140 182.3 176C140 212 70 214 -0.4 214.4C-70.7 214.7 -141.4 213.4 -172.1 177.4C-202.8 141.4 -193.4 70.7 -192.3 1.1C-191.3 -68.6 -198.5 -137.2 -167.8 -186.3C-137.2 -235.5 -68.6 -265.3 -16.6 -248.6C35.4 -232 70.7 -169 113 -119.9"
          fill="#FFFFFF"
        ></path>
      </g>
      <g
        transform="translate(429.3128590756683 306.2584961997546)"
        style={{ visibility: "hidden" }}
      >
        <path
          id="blob-2"
          d="M180.9 -174.9C220.4 -141.4 228.7 -70.7 222 -6.7C215.3 57.3 193.6 114.6 154.1 148.2C114.6 181.9 57.3 191.9 5.7 186.3C-46 180.6 -91.9 159.3 -127.3 125.6C-162.6 91.9 -187.3 46 -182 5.3C-176.7 -35.4 -141.4 -70.7 -106 -104.2C-70.7 -137.7 -35.4 -169.4 17.7 -187C70.7 -204.7 141.4 -208.4 180.9 -174.9"
          fill="#FFFFFF"
        ></path>
      </g>
    </motion.svg>
  );
}
