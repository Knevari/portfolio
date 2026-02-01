"use client";

import { useCallback, useEffect, useRef } from "react";

export default function useAudio() {
    const audioCtx = useRef<AudioContext | null>(null);

    useEffect(() => {
        // Initialize AudioContext only on user interaction if possible, 
        // but here we just prepare it.
        return () => {
            if (audioCtx.current) {
                audioCtx.current.close();
            }
        };
    }, []);

    const getCtx = () => {
        if (!audioCtx.current) {
            audioCtx.current = new (window.AudioContext || (window as any).webkitAudioContext)();
        }
        if (audioCtx.current.state === "suspended") {
            audioCtx.current.resume();
        }
        return audioCtx.current;
    };

    const playBlip = useCallback(() => {
        try {
            const ctx = getCtx();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.type = "square";
            osc.frequency.setValueAtTime(880, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(110, ctx.currentTime + 0.1);

            gain.gain.setValueAtTime(0.02, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.start();
            osc.stop(ctx.currentTime + 0.1);
        } catch (e) {
            // Silently fail if audio blocked
        }
    }, []);

    const playStatic = useCallback(() => {
        try {
            const ctx = getCtx();
            const bufferSize = ctx.sampleRate * 0.1;
            const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
            const data = buffer.getChannelData(0);

            for (let i = 0; i < bufferSize; i++) {
                data[i] = Math.random() * 2 - 1;
            }

            const noise = ctx.createBufferSource();
            noise.buffer = buffer;

            const gain = ctx.createGain();
            gain.gain.setValueAtTime(0.01, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);

            noise.connect(gain);
            gain.connect(ctx.destination);

            noise.start();
        } catch (e) {
            // Silently fail
        }
    }, []);

    const humOsc = useRef<OscillatorNode | null>(null);
    const humGain = useRef<GainNode | null>(null);

    const playHum = useCallback(() => {
        try {
            const ctx = getCtx();
            if (humOsc.current) return;

            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.type = "sine";
            osc.frequency.setValueAtTime(40, ctx.currentTime); // Low hum

            gain.gain.setValueAtTime(0, ctx.currentTime);
            gain.gain.linearRampToValueAtTime(0.015, ctx.currentTime + 2); // Fade in

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.start();
            humOsc.current = osc;
            humGain.current = gain;
        } catch (e) { }
    }, []);

    const stopHum = useCallback(() => {
        if (humOsc.current && humGain.current) {
            const ctx = getCtx();
            humGain.current.gain.linearRampToValueAtTime(0, ctx.currentTime + 1);
            humOsc.current.stop(ctx.currentTime + 1.1);
            humOsc.current = null;
            humGain.current = null;
        }
    }, []);

    return { playBlip, playStatic, playHum, stopHum };
}
