"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import ProjectCard from "./ProjectCard";

import { useTranslations } from "next-intl";

export default function MissionArchives() {
    const t = useTranslations("Missions");
    const tp = useTranslations("Projects");

    const missions = [
        {
            id: "n3mus",
            title: "N3MUS // GAMING HUB",
            role: tp("n3mus.role"),
            brief: tp("n3mus.brief"),
            impact: tp.raw("n3mus.impact") as string[],
            stack: ["Next.js", "NestJS", "Prisma", "Ethers.js", "Redis", "PostgreSQL", "Thirdweb", "Azure", "Tailwind", "Framer Motion"],
            status: "ACTIVE PROTOCOL"
        },
        {
            id: "blkbirds",
            title: "BLKBIRDS // NFT ECOSYSTEM",
            role: tp("blkbirds.role"),
            brief: tp("blkbirds.brief"),
            impact: tp.raw("blkbirds.impact") as string[],
            stack: ["React", "Ethers.js", "Solidity", "Node.js", "Framer Motion", "Tailwind"],
            status: "DEPRECATED // ARCHIVED"
        },
        {
            id: "bitx",
            title: "BITX // SOFTWARE FACTORY",
            role: tp("bitx.role"),
            brief: tp("bitx.brief"),
            impact: tp.raw("bitx.impact") as string[],
            stack: ["React", "React Native Web", "Node.js", "TypeScript", "Redux", "Jest"],
            status: "DEPRECATED // LEGACY"
        }
    ];

    return (
        <section className="relative w-full py-32 px-6 md:px-12 bg-transparent overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 flex flex-col gap-2"
                >
                    <div className="flex items-center gap-4">
                        <div className="h-px w-12 bg-cyan/50" />
                        <span className="font-mono text-cyan text-xs tracking-[0.4em] uppercase">{t("title")}</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">
                        {t("subtitle_1")} <span className="text-green">{t("subtitle_2")}</span>
                    </h2>
                    <p className="text-white/40 font-mono text-xs max-w-md mt-4 leading-relaxed">
                        {t("description")} <br />
                        {t("sub_description")}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {missions.map((mission, index) => (
                            <ProjectCard key={mission.id} mission={mission} index={index} />
                        ))}
                    </div>

                    {/* Technical Side Stream */}
                    <div className="hidden lg:flex flex-col gap-6 p-6 border-l border-white/5 font-mono text-[9px] text-cyan/40 h-full max-h-[800px] overflow-hidden relative">
                        <div className="flex items-center gap-2 mb-4 text-cyan/60 font-bold tracking-tighter text-xs">
                            <Shield size={14} />
                            <span>ARCHITECTURE_DEFENSE_LOG.EXE</span>
                        </div>
                        <div className="flex flex-col gap-4 animate-[scanline_20s_linear_infinite]">
                            <div className="flex flex-col gap-1">
                                <span className="text-white/20">[08:44:12] INITIALIZING LOAD_BALANCER_V2</span>
                                <span>{" > "} SCALING NODES: SUCCESS</span>
                                <span>{" > "} LATENCY: 12ms</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-white/20">[09:12:05] SECURITY_AUDIT_ONGOING</span>
                                <span className="text-green/40">{" > "} NO VULNERABILITIES DETECTED IN SMART_CONTRACT_04</span>
                                <span>{" > "} ENCRYPTION_STRENGTH: RSA-4096</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-white/20">[10:05:40] SHARD_SYNC_COMPLETE</span>
                                <span>{" > "} CONSENSUS_ACHIEVED: 99.8%</span>
                                <span>{" > "} BLOCKS_VERIFIED: 12,400,211</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-white/20">[11:59:59] DEPLOYMENT_CYCLE_CLEANUP</span>
                                <span>{" > "} LOGS_ARCHIVED</span>
                                <span>{" > "} SYSTEM_STATUS: STABLE</span>
                            </div>
                            {/* Repeat for visual length */}
                            <div className="flex flex-col gap-1 opacity-50">
                                <span className="text-white/20">[12:44:12] INITIALIZING LOAD_BALANCER_V2</span>
                                <span>{" > "} SCALING NODES: SUCCESS</span>
                                <span>{" > "} LATENCY: 10ms</span>
                            </div>
                        </div>
                        {/* Faders */}
                        <div className="absolute inset-0 bg-gradient-to-b from-[#101010] via-transparent to-[#101010] pointer-events-none" />
                    </div>
                </div>
            </div>

            {/* Background "Schematic" Watermark */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none -rotate-12 hidden lg:block">
                <pre className="font-mono text-[10px] leading-tight text-cyan">
                    {`
                      ________________________________________________
                     /                                                \\
                    |    SYSTEM ARCHITECTURE // PROTOCOL V.1.0.4       |
                    |    LOAD BALANCER <---> MICROSERVICES             |
                    |    [SHARD_01] [SHARD_02] [SHARD_03]              |
                    |    REDIS_CACHE [HIGH_PRIORITY]                   |
                     \\________________________________________________/
                    `}
                </pre>
            </div>
        </section>
    );
}
