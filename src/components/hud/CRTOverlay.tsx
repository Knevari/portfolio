"use client";

import React from "react";

export default function CRTOverlay() {
    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
            {/* Static Noise Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150" />

            {/* Scanlines layer - Using light color for visibility on dark background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0)_50%,rgba(50,192,240,0.08)_50%)] bg-[length:100%_4px] animate-scanline pointer-events-none" />

            {/* Vignette layer - Stronger edges for focus */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)] pointer-events-none" />

            {/* Screen Flicker - Targeted brightness pulses */}
            <div className="absolute inset-0 bg-cyan/[0.02] animate-flicker pointer-events-none" />

            {/* RGB Aberration Shadow */}
            <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.3)] pointer-events-none" />
        </div>
    );
}
