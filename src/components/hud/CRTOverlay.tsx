"use client";

import React from "react";

export default function CRTOverlay() {
    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
            {/* Scanlines layer - Increased opacity for visibility */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] animate-scanline opacity-[0.3]" />

            {/* Vignette layer - Stronger edges */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] pointer-events-none" />

            {/* Subtle Screen Flicker - Slightly more intense */}
            <div className="absolute inset-0 bg-white/[0.015] animate-flicker pointer-events-none" />

            {/* RGB Aberration Shadow */}
            <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.3)] pointer-events-none" />
        </div>
    );
}
