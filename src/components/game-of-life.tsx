"use client";

import { motion } from "framer-motion";
import debounce from "lodash.debounce";
import { useCallback, useEffect, useRef, useState } from "react";
import { FaRandom } from "react-icons/fa";

const DEAD = 0;
const ALIVE = 1;
const CELL_SIZE_PIXELS = 16;
const FPS = 10;
const FPS_INTERVAL = 1000 / FPS;

const containerVariants = {
  visible: {
    opacity: 1,
  },
  hidden: {
    display: "none",
  },
};

const buildGoLGrid = (
  rows: number,
  cols: number,
  sparsity: number = 0.5
): number[][] => {
  const grid = [];

  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      row.push(Number(Math.random() < sparsity));
    }
    grid.push(row);
  }

  return grid;
};

const countNeighbors = (grid: number[][], i: number, j: number) => {
  let neighbors = 0;

  const rows = grid.length;
  const cols = grid[0].length;

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
    [-1, -1],
    [-1, 1],
    [1, -1],
    [1, 1],
  ];

  for (const [dx, dy] of directions) {
    const nx = i + dx;
    const ny = j + dy;

    if (nx < 0 || nx >= rows || ny < 0 || ny >= cols) continue;

    if (grid[nx][ny]) neighbors++;
  }

  return neighbors;
};

const copyGrid = (grid: number[][]) => {
  const copy = [];
  const rows = grid.length;
  for (let i = 0; i < rows; i++) copy.push(grid[i].slice());
  return copy;
};

const getNextGridState = (grid: number[][]) => {
  const gridCopy = copyGrid(grid);

  const rows = grid.length;
  const cols = grid[0].length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const cell = grid[i][j];
      const neighbors = countNeighbors(grid, i, j);

      if (cell === ALIVE) {
        if (neighbors < 2 || neighbors > 3) gridCopy[i][j] = DEAD;
        else gridCopy[i][j] = ALIVE;
      } else if (cell === DEAD) {
        if (neighbors === 3) gridCopy[i][j] = ALIVE;
      }
    }
  }

  return gridCopy;
};

export function GameOfLife({ children }: { children: React.ReactNode }) {
  const grid = useRef<number[][]>([]);
  const startTime = useRef<number>();
  const now = useRef<number>();
  const then = useRef<number>();
  const elapsed = useRef<number>();
  const [reruns, setReruns] = useState(0);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const setupCanvas = (canvas: HTMLCanvasElement) => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const rowsLength = Math.ceil(window.innerHeight / CELL_SIZE_PIXELS);
    const colsLength = Math.ceil(window.innerWidth / CELL_SIZE_PIXELS);

    grid.current = buildGoLGrid(rowsLength, colsLength, 0.5);
  };

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    if (!context) return;

    setupCanvas(canvas);

    let animationFrame: number;

    then.current = Date.now();
    startTime.current = then.current;

    const draw = () => {
      const rowsLength = grid.current.length;
      const colsLength = grid.current[0].length;

      animationFrame = requestAnimationFrame(draw);

      now.current = Date.now();
      elapsed.current = now.current - (then.current || 0);

      if (elapsed.current > FPS_INTERVAL) {
        then.current = now.current - (elapsed.current - FPS_INTERVAL);

        context.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < rowsLength - 1; i++) {
          for (let j = 0; j < colsLength - 1; j++) {
            const cell = grid.current[i][j];
            if (cell === ALIVE) {
              context.fillStyle = "rgba(255, 255, 255, 0.08)";
            } else {
              context.fillStyle = "transparent";
            }
            context.fillRect(
              j * CELL_SIZE_PIXELS,
              i * CELL_SIZE_PIXELS,
              CELL_SIZE_PIXELS,
              CELL_SIZE_PIXELS
            );
          }
        }

        grid.current = getNextGridState(grid.current);
      }
    };

    draw();

    return () => cancelAnimationFrame(animationFrame);
  }, [reruns]);

  const debouncedResizeEvent = useCallback(
    debounce(() => {
      const canvas = canvasRef.current as HTMLCanvasElement;
      setupCanvas(canvas);
    }, 200),
    []
  );

  useEffect(() => {
    window.addEventListener("resize", debouncedResizeEvent);
    return () => window.removeEventListener("resize", debouncedResizeEvent);
  }, [debouncedResizeEvent]);

  return (
    <motion.div
      className="absolute inset-0 top-0 z-0 h-full max-h-[100vh] w-full"
      variants={containerVariants}
      animate={"visible"}
      transition={{ duration: 2000, ease: "easeInOut" }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 h-full w-full"
      ></canvas>
      <div className="absolute top-0 z-0 h-[30%] w-full bg-gradient-to-b from-[#111111] to-transparent" />
      {children}
      <div className="absolute bottom-0 z-0 h-[30%] w-full bg-gradient-to-b from-transparent to-[#111111]" />
      <div className="container mx-auto relative">
        <button
          className="grid place-items-center absolute w-12 h-12 bottom-0 right-0 rounded-full bg border border-[#30333A] opacity-50 cursor-pointer z-50"
          onClick={() => setReruns((p) => p + 1)}
        >
          <FaRandom className="text-white/50" size="18px" />
        </button>
      </div>
    </motion.div>
  );
}
