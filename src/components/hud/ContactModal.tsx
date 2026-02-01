"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageSquare, Send, Disc, Mail, ExternalLink } from "lucide-react";
import useAudio from "@/hooks/useAudio";

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const CONTACTS = [
    { name: "WhatsApp", value: "+55 81 9 99292711", link: "https://wa.me/5581999292711", icon: MessageSquare, color: "text-green" },
    { name: "Telegram", value: "@Knevari", link: "https://t.me/Knevari", icon: Send, color: "text-cyan" },
    { name: "Discord", value: "knevari", link: "#", icon: Disc, color: "text-purple-400" },
    { name: "Email", value: "mateus7319@gmail.com", link: "mailto:mateus7319@gmail.com", icon: Mail, color: "text-white" },
];

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const { playStatic } = useAudio();

    useEffect(() => {
        if (isOpen) {
            playStatic();
        }
    }, [isOpen, playStatic]);

    const handleClose = () => {
        playStatic();
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-lg bg-[#151515] border border-cyan/30 rounded-sm overflow-hidden shadow-[0_0_50px_rgba(50,192,240,0.1)]"
                    >
                        {/* HUD Scanline Effect */}
                        <div className="absolute inset-x-0 top-0 h-[2px] bg-cyan/20 animate-[shimmer_3s_infinite]" />

                        {/* Header */}
                        <div className="flex items-center justify-between p-4 border-b border-cyan/20 bg-[#1a1a1a]">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
                                <h2 className="font-mono text-xs font-bold tracking-[0.2em] text-cyan uppercase">Communication Channel // Secure</h2>
                            </div>
                            <button
                                onClick={onClose}
                                className="text-white/40 hover:text-white transition-colors"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-6 grid gap-4">
                            <p className="font-mono text-[10px] text-white/50 uppercase tracking-widest mb-2">Select protocol to initiate contact:</p>

                            <div className="grid gap-3">
                                {CONTACTS.map((contact) => (
                                    <motion.a
                                        key={contact.name}
                                        href={contact.link}
                                        target={contact.link !== "#" ? "_blank" : undefined}
                                        rel="noopener noreferrer"
                                        whileHover={{ x: 5, backgroundColor: "rgba(50, 192, 240, 0.05)" }}
                                        className="flex items-center justify-between p-4 bg-[#1a1a1a] border border-white/5 group transition-all"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={`p-2 rounded-sm bg-black/50 ${contact.color}`}>
                                                <contact.icon size={20} />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="font-mono text-[10px] text-white/40 uppercase tracking-tighter">{contact.name}</span>
                                                <span className="font-bold text-white tracking-wide">{contact.value}</span>
                                            </div>
                                        </div>
                                        {contact.link !== "#" && (
                                            <ExternalLink size={14} className="text-white/20 group-hover:text-cyan transition-colors" />
                                        )}
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Footer / Status */}
                        <div className="p-3 bg-[#1a1a1a] border-t border-cyan/10 flex items-center justify-between font-mono text-[8px] uppercase tracking-widest text-white/30">
                            <div className="flex gap-4">
                                <span>Signal: Strong</span>
                                <span>Latency: 12ms</span>
                            </div>
                            <span className="text-cyan opacity-60">Status: Connection Waiting</span>
                        </div>

                        {/* Decorative Corner */}
                        <div className="absolute bottom-0 right-0 w-8 h-8 pointer-events-none">
                            <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-cyan" />
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
