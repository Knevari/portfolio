"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SystemStatus from "../hud/SystemStatus";
import Deployments from "../hud/Deployments";
import ContactModal from "../hud/ContactModal";
import Magnetic from "../hud/Magnetic";

export default function Hero() {
    const [isContactOpen, setIsContactOpen] = useState(false);

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden p-6 md:p-12">
            {/* Top Left HUD */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute top-8 left-8 hidden md:block"
            >
                <SystemStatus />
            </motion.div>

            {/* Bottom Right HUD */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="absolute bottom-8 right-8 hidden md:block"
            >
                <Deployments />
            </motion.div>

            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-32 h-32 border-t border-l border-cyan/20 rounded-tl-3xl pointer-events-none" />
            <div className="absolute top-0 right-0 w-32 h-32 border-t border-r border-cyan/20 rounded-tr-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 border-b border-l border-green/20 rounded-bl-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-32 h-32 border-b border-r border-green/20 rounded-br-3xl pointer-events-none" />

            {/* Main Content - Elevation for clarity */}
            <div className="z-[10001] flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="font-mono text-cyan text-sm tracking-[0.3em] uppercase mb-4 block">Event Horizon // Protocol</span>
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white mb-2 filter drop-shadow-[0_0_15px_rgba(50,192,240,0.3)]">
                        KNEVARI
                    </h1>
                    <p className="text-xl md:text-2xl font-bold text-white tracking-tight max-w-2xl mx-auto uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                        Senior Product Architect <span className="text-green mx-2">|</span>
                        <span className="text-green"> Web3 & FinTech</span>
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="mt-12 flex flex-col md:flex-row gap-6 items-center"
                >
                    <Magnetic>
                        <a
                            href="/cv.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative px-10 py-4 bg-cyan text-[#101010] font-black uppercase tracking-[0.2em] text-xs transition-all duration-300 rounded-sm text-center group overflow-hidden block"
                        >
                            <span className="relative z-10">SEE MY RESUME</span>
                            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            <div className="absolute -inset-1 bg-cyan/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                    </Magnetic>

                    <Magnetic>
                        <button
                            onClick={() => setIsContactOpen(true)}
                            className="relative px-10 py-4 border border-green text-green font-black uppercase tracking-[0.2em] text-xs transition-all duration-300 rounded-sm group overflow-hidden"
                        >
                            <span className="relative z-10">Initiate Contact</span>
                            <div className="absolute inset-0 bg-green/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                            <div className="absolute -inset-1 bg-green/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                    </Magnetic>
                </motion.div>
            </div>

            {/* Background Subtle Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(50,192,240,0.05)_0%,transparent_70%)] pointer-events-none" />

            {/* Contact Modal */}
            <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        </div>
    );
}
