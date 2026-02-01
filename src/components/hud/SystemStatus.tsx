"use client";

import { useEffect, useState } from "react";
import { Terminal, Volume2, VolumeX } from "lucide-react";
import useAudio from "@/hooks/useAudio";

export default function SystemStatus() {
    const [uptime, setUptime] = useState("00:00:00");
    const [isAudioEnabled, setIsAudioEnabled] = useState(false);
    const { playHum, stopHum } = useAudio();

    useEffect(() => {
        if (isAudioEnabled) {
            playHum();
        } else {
            stopHum();
        }
    }, [isAudioEnabled, playHum, stopHum]);

    useEffect(() => {
        const start = Date.now();
        const interval = setInterval(() => {
            const diff = Date.now() - start;
            const hours = Math.floor(diff / 3600000).toString().padStart(2, '0');
            const mins = Math.floor((diff % 3600000) / 60000).toString().padStart(2, '0');
            const secs = Math.floor((diff % 60000) / 1000).toString().padStart(2, '0');
            setUptime(`${hours}:${mins}:${secs}`);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col gap-1 font-mono text-[10px] uppercase tracking-wider text-cyan/80">
            <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    <Terminal size={14} className="text-cyan animate-pulse" />
                    <span className="font-bold text-cyan">System Status: Online</span>
                </div>
                <button
                    onClick={() => setIsAudioEnabled(!isAudioEnabled)}
                    className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
                >
                    {isAudioEnabled ? <Volume2 size={12} /> : <VolumeX size={12} />}
                    <span className="opacity-60">{isAudioEnabled ? "Audio Online" : "Audio Muted"}</span>
                </button>
            </div>
            <div className="pl-6 border-l border-cyan/20 flex flex-col gap-0.5">
                <span>Uptime: {uptime}</span>
                <span>Environment: Production</span>
                <span>Core: Next.js v16.1.6</span>
                <div className="mt-1 h-1 w-24 bg-cyan/10 overflow-hidden">
                    <div className="h-full bg-cyan animate-[shimmer_2s_infinite]" style={{ width: '65%' }}></div>
                </div>
            </div>
        </div>
    );
}
