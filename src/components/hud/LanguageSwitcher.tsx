"use client";

import { useLocale, useTranslations } from "next-intl";
import { routing, usePathname, useRouter } from "@/i18n/routing";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Cpu, ChevronRight } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";

const LOCALES = [
    { code: "en", label: "EN // US", flag: "🇺🇸" },
    { code: "ja", label: "JP // JP", flag: "🇯🇵" },
    { code: "pt-br", label: "PT // BR", flag: "🇧🇷" },
];

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const switchLocale = (newLocale: string) => {
        router.replace(pathname, { locale: newLocale });
        setIsOpen(false);
    };

    const currentLocaleData = LOCALES.find((l) => l.code === locale) || LOCALES[0];

    return (
        <div className="relative font-mono">
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-3 px-4 py-2 border border-cyan/30 bg-black/40 hover:bg-cyan/10 transition-colors rounded-sm group relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                <div className="absolute top-0 left-0 w-1 h-1 border-t border-l border-cyan" />
                <div className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-cyan" />

                <Globe size={14} className="text-cyan animate-pulse" />
                <div className="flex flex-col items-start leading-none">
                    <span className="text-[8px] text-cyan/50 tracking-widest uppercase mb-1">Comm_Link // Locale</span>
                    <span className="text-[10px] text-white font-bold tracking-tighter">{currentLocaleData.label}</span>
                </div>
                <div className={clsx("ml-2 transition-transform duration-300", isOpen ? "rotate-90" : "rotate-0")}>
                    <ChevronRight size={12} className="text-cyan/60" />
                </div>

                {/* Visual Glitch Bar */}
                <div className="absolute bottom-0 left-0 h-[1px] bg-cyan/40 w-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform" />
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 5, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        className="absolute right-0 top-full z-[1000] w-48 mt-2 bg-[#101010] border border-cyan/40 shadow-[0_10px_30px_rgba(50,192,240,0.2)] p-1 backdrop-blur-md"
                    >
                        {/* Scanline pattern overlay */}
                        <div className="absolute inset-0 pointer-events-none opacity-5 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px]" />

                        <div className="flex flex-col gap-1 relative z-10">
                            <div className="px-3 py-2 text-[8px] text-cyan/40 border-b border-cyan/20 flex items-center gap-2 mb-1">
                                <Cpu size={10} />
                                <span>SELECT_NEURAL_INTERFACE</span>
                            </div>

                            {LOCALES.map((l) => (
                                <button
                                    key={l.code}
                                    onClick={() => switchLocale(l.code)}
                                    className={clsx(
                                        "flex items-center justify-between px-3 py-2 text-[10px] tracking-widest uppercase transition-all group/item",
                                        locale === l.code
                                            ? "bg-cyan/20 text-cyan border-l-2 border-cyan"
                                            : "text-white/60 hover:bg-white/5 hover:text-white"
                                    )}
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="opacity-60">{l.flag}</span>
                                        <span>{l.label}</span>
                                    </div>
                                    {locale === l.code && (
                                        <div className="h-1.5 w-1.5 bg-cyan rounded-full animate-pulse shadow-[0_0_8px_rgba(50,192,240,0.8)]" />
                                    )}
                                    <div className="absolute right-2 opacity-0 group-hover/item:opacity-100 transition-opacity">
                                        <ChevronRight size={10} className="text-cyan" />
                                    </div>
                                </button>
                            ))}

                            <div className="mt-2 px-3 pb-1 flex justify-between items-center border-t border-cyan/10 pt-2">
                                <span className="text-[6px] text-cyan/30 animate-pulse font-mono tracking-tighter">SIGNAL_LOCKED: 100%</span>
                                <div className="flex gap-0.5">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="w-1 h-3 bg-cyan/20" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
