"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useAudio from "@/hooks/useAudio";

import { useTranslations } from "next-intl";

export default function BootSequence({ onComplete }: { onComplete: () => void }) {
    const t = useTranslations("Boot");
    const [logs, setLogs] = useState<string[]>([]);
    const { playBlip } = useAudio();

    const BOOT_LOGS = [
        { text: t("initializing"), delay: 200 },
        { text: t("loading"), delay: 600 },
        { text: t("syncing"), delay: 1000 },
        { text: t("verifying"), delay: 1400 },
        { text: t("establishing"), delay: 1800 },
        { text: t("authenticated"), delay: 2200 },
    ];

    useEffect(() => {
        const timeouts: NodeJS.Timeout[] = [];

        BOOT_LOGS.forEach((log, index) => {
            const timeoutId = setTimeout(() => {
                setLogs((prev) => {
                    if (prev.includes(log.text)) return prev;
                    return [...prev, log.text];
                });
                playBlip();

                if (index === BOOT_LOGS.length - 1) {
                    const finalTimeoutId = setTimeout(onComplete, 800);
                    timeouts.push(finalTimeoutId);
                }
            }, log.delay);
            timeouts.push(timeoutId);
        });

        return () => timeouts.forEach(clearTimeout);
    }, [onComplete, playBlip]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{
                scaleY: 0,
                scaleX: 1.1,
                opacity: 0,
                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
            }}
            className="fixed inset-0 z-[30000] bg-[#101010] flex items-center justify-center font-mono"
        >
            <div className="max-w-md w-full px-8">
                <div className="flex flex-col gap-2">
                    {logs.map((log, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-xs tracking-widest uppercase flex items-center gap-3"
                        >
                            <span className={`h-1.5 w-1.5 rounded-full ${log.includes("[OK]") ? "bg-green" : "bg-cyan"} shadow-[0_0_8px_rgba(50,255,95,0.5)]`} />
                            <span className={log.includes("[OK]") ? "text-green" : "text-white/70"}>
                                {log}
                            </span>
                        </motion.div>
                    ))}
                    <motion.div
                        animate={{ opacity: [1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        className="h-4 w-1 bg-cyan ml-4"
                    />
                </div>
            </div>

            {/* Retro CRT Scanline for the preloader */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px]" />
        </motion.div>
    );
}
