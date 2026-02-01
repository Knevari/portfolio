"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import ProjectCard from "./ProjectCard";

const missions = [
    {
        id: "n3mus",
        title: "N3MUS // GAMING HUB",
        role: "FOUNDING PARTNER & ARCHITECT",
        brief: "Architected the core financial and social infrastructure for a Web3 Gaming Hub, scaling from 0 to 26,000+ registered users and 4M+ transactions.",
        impact: [
            "Built non-custodial multi-chain wallet system from scratch via Thirdweb & Squid Router",
            "Engineered high-throughput Leaderboard engine normalizing real-time blockchain data",
            "Designed N3mesis Engine: a competitive Elo-based rivalry system with dynamic modifiers",
            "Implemented ISO-compliant Activity Tracker & Referral engines for 26k+ users"
        ],
        stack: ["Next.js", "NestJS", "Prisma", "Ethers.js", "Redis", "PostgreSQL", "Thirdweb", "Azure", "Tailwind", "Framer Motion"],
        status: "ACTIVE PROTOCOL"
    },
    {
        id: "blkbirds",
        title: "BLKBIRDS // NFT ECOSYSTEM",
        role: "Lead Frontend Engineer",
        brief: "Designed and owned a high-traffic dApp ecosystem specializing in gamified NFT mechanics and real-time on-chain interactions.",
        impact: [
            "Engineered 'Mystery Chest' drop mechanic recognized by BSC News for its on-chain RNG logic",
            "Implemeted foundational Ethers.js wallet architecture with robust user feedback",
            "Optimized legacy components reducing bundle size and improving TTI for global users",
            "Led frontend strategy and execution for multiple successful staking projects and secondary marketplaces"
        ],
        stack: ["React", "Ethers.js", "Solidity", "Node.js", "Framer Motion", "Tailwind"],
        status: "DEPRECATED // ARCHIVED"
    },
    {
        id: "bitx",
        title: "BITX // SOFTWARE FACTORY",
        role: "Software Engineer",
        brief: "Engineered internal tooling and modernized mission-critical fintech monitoring dashboards.",
        impact: [
            "Built resilient dashboards for monitoring mobile fleet transactions in real-time",
            "Led the migration to react-native-web enabling rapid cross-platform deployment",
            "Refactored legacy class components to modern React Hooks architecture",
            "Established new team standards for code quality and incident response"
        ],
        stack: ["React", "React Native Web", "Node.js", "TypeScript", "Redux", "Jest"],
        status: "DEPRECATED // LEGACY"
    }
];

export default function MissionArchives() {
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
                        <span className="font-mono text-cyan text-xs tracking-[0.4em] uppercase">Tactical Archives</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">
                        Mission <span className="text-green">Logs</span>
                    </h2>
                    <p className="text-white/40 font-mono text-xs max-w-md mt-4 leading-relaxed">
                        Accessing encrypted mission data... <br />
                        Retrieving architectural schematics for primary deployments.
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
