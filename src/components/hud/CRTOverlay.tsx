"use client";

import React from "react";

export default function CRTOverlay() {
    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
            {/* Static Noise Texture - Subdued */}
            <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-100" />

            {/* Scanlines layer - Fainter and tighter */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0)_50%,rgba(50,192,240,0.04)_50%)] bg-[length:100%_3px] animate-scanline pointer-events-none" />

            {/* Vignette layer - Softer transition */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] pointer-events-none" />

            {/* Screen Flicker - Minimal pulse */}
            <div className="absolute inset-0 bg-cyan/[0.01] animate-flicker pointer-events-none" />

            {/* RGB Aberration Shadow */}
            <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.3)] pointer-events-none" />
        </div>
    );
}
