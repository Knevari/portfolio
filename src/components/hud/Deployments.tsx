"use client";

import { Box, Code2, Globe } from "lucide-react";
import clsx from "clsx";

const DEPLOYMENTS = [
    { name: "N3MUS", role: "Founding Partner / Architect", status: "Active", url: "n3mus.com", color: "text-green" },
    { name: "BLK BIRDS", role: "Software Engineer", status: "Deprecated", url: "blkbirds.com", color: "text-red-500" },
    { name: "BIT X", role: "Software Engineer", status: "Deprecated", url: "bitx.fi", color: "text-red-500" },
];

export default function Deployments() {
    return (
        <div className="flex flex-col gap-3 font-mono text-[10px] uppercase tracking-wider text-green/80">
            <div className="flex items-center gap-2">
                <Box size={14} className="text-green" />
                <span className="font-bold text-green">Active Deployments</span>
            </div>
            <div className="grid gap-2 pr-6 border-r border-green/20 text-right">
                {DEPLOYMENTS.map((dep) => (
                    <div key={dep.name} className="flex flex-col group">
                        <span className="text-white group-hover:text-green transition-colors">{dep.name} // {dep.url}</span>
                        <span className="text-[8px] opacity-60 italic">{dep.role}</span>
                        <div className="flex items-center justify-end gap-1 mt-0.5">
                            <span className={clsx("h-1 w-1 rounded-full animate-pulse", dep.color === "text-red-500" ? "bg-red-500" : "bg-green")} />
                            <span className={clsx("text-[8px]", dep.color)}>{dep.status}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

