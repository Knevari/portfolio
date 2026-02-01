"use client";

import React, { useCallback, useEffect, useRef } from "react";

const rand = (min: number, max?: number) => {
    if (max === undefined) {
        max = min;
        min = 0;
    }
    return Math.random() * (max - min) + min;
};

interface Star {
    x: number;
    y: number;
    size: number;
    speed: number;
}

export default function Starfall() {
    const starImageRef = useRef<HTMLImageElement | null>(null);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
    const starsRef = useRef<Star[]>([]);
    const requestRef = useRef<number>(0);
    const count = 12;

    const initStars = (width: number, height: number) => {
        const stars: Star[] = [];
        for (let i = 0; i < count; i++) {
            stars.push({
                x: rand(width / 2, width + width / 2),
                y: -rand(height),
                size: rand(0.5, 2.5),
                speed: rand(1, 3),
            });
        }
        starsRef.current = stars;
    };

    const render = useCallback(() => {
        const canvas = canvasRef.current;
        const ctx = ctxRef.current;
        if (!ctx || !canvas) return;

        // Subtle fade trail
        ctx.fillStyle = "rgba(16, 16, 16, 0.15)";
        ctx.fillRect(0, 0, canvas.width / (window.devicePixelRatio || 1), canvas.height / (window.devicePixelRatio || 1));

        for (let i = 0; i < count; i++) {
            const star = starsRef.current[i];

            // Reset star if it goes off screen
            if (star.x < -100 || star.y > window.innerHeight + 100) {
                star.x = rand(window.innerWidth / 2, window.innerWidth + window.innerWidth / 2);
                star.y = -rand(window.innerHeight);
                star.size = rand(0.5, 2.5);
                star.speed = rand(1, 3);
            }

            const visibility = 1 - (star.y / window.innerHeight);
            ctx.fillStyle = `rgba(50, 192, 240, ${visibility * 0.5})`; // Using Cyan hue

            ctx.beginPath();
            ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
            ctx.fill();

            if (starImageRef.current) {
                ctx.globalAlpha = visibility * 0.3;
                ctx.drawImage(
                    starImageRef.current,
                    star.x - star.size * 2,
                    star.y - star.size * 2,
                    star.size * 4,
                    star.size * 4
                );
                ctx.globalAlpha = 1;
            }

            // Move star (diagonally down-left as in original)
            star.x -= star.speed * 2;
            star.y += star.speed * 2;
        }

        requestRef.current = window.requestAnimationFrame(render);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        ctxRef.current = ctx;

        const onResize = () => {
            const ratio = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * ratio;
            canvas.height = window.innerHeight * ratio;
            canvas.style.width = window.innerWidth + "px";
            canvas.style.height = window.innerHeight + "px";
            ctx?.scale(ratio, ratio);
            initStars(window.innerWidth, window.innerHeight);
        };

        window.addEventListener("resize", onResize);
        onResize();

        const starImage = new Image();
        starImage.src = "/star-fill.svg";
        starImage.onload = () => {
            starImageRef.current = starImage;
        };

        requestRef.current = window.requestAnimationFrame(render);

        return () => {
            window.removeEventListener("resize", onResize);
            window.cancelAnimationFrame(requestRef.current);
        };
    }, [render]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 -z-20 pointer-events-none opacity-40"
        />
    );
}
