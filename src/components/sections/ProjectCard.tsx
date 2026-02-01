"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Zap, Database, Terminal, ChevronRight } from "lucide-react";
import Magnetic from "../hud/Magnetic";

interface Mission {
    id: string;
    title: string;
    role: string;
    brief: string;
    impact: string[];
    stack: string[];
    status: string;
}

import { useTranslations } from "next-intl";

export default function ProjectCard({ mission, index }: { mission: Mission; index: number }) {
    const t = useTranslations("Missions");
    return (
        <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="group relative flex flex-col gap-6 p-8 border border-white/5 bg-white/[0.02] backdrop-blur-sm rounded-sm hover:border-cyan/30 transition-colors"
        >
            {/* Status Indicator */}
            <div className="flex items-center justify-between font-mono text-[10px] tracking-widest uppercase">
                <div className="flex items-center gap-2 text-white/40">
                    <div className={`h-1.5 w-1.5 rounded-full ${mission.status.includes('ACTIVE') ? 'bg-green animate-pulse' : 'bg-red-500/50'}`} />
                    <span>{t("status")}: {mission.status}</span>
                </div>
                <span className="text-cyan/60">{t("deployment_id")}: {mission.id.toUpperCase()}</span>
            </div>

            {/* Header */}
            <div>
                <h3 className="text-2xl font-black text-white tracking-tight mb-1 group-hover:text-cyan transition-colors">
                    {mission.title}
                </h3>
                <p className="text-green text-[10px] font-bold tracking-widest uppercase">
                    {mission.role}
                </p>
            </div>

            {/* Brief */}
            <p className="text-white/60 text-sm leading-relaxed max-w-lg italic">
                "{mission.brief}"
            </p>

            {/* Impact Logs */}
            <div className="bg-black/20 p-4 border-l-2 border-cyan/40 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-[10px] font-mono text-cyan/80">
                    <Terminal size={12} />
                    <span>{t("mission_results")}</span>
                </div>
                <ul className="flex flex-col gap-2">
                    {mission.impact.map((point, i) => (
                        <li key={i} className="flex gap-3 text-xs text-white/80 leading-snug">
                            <ChevronRight size={14} className="text-green shrink-0 mt-0.5" />
                            <span>{point}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Tech Stack Chips */}
            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                {mission.stack.map(tech => (
                    <span key={tech} className="px-2 py-1 bg-white/[0.05] text-white/40 text-[9px] font-mono tracking-wider rounded-sm">
                        {tech}
                    </span>
                ))}
            </div>

            {/* Visual Accents */}
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-cyan/0 group-hover:border-cyan/40 transition-all rounded-tr-sm" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-green/0 group-hover:border-green/40 transition-all rounded-bl-sm" />
        </motion.div>
    );
}
