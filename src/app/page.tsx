"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Hero from "@/components/hero/Hero";
import Galaxy from "@/components/canvas/Galaxy";
import Starfall from "@/components/canvas/Starfall";
import CRTOverlay from "@/components/hud/CRTOverlay";
import MissionArchives from "@/components/sections/MissionArchives";
import BootSequence from "@/components/hud/BootSequence";

export default function Home() {
  const [isBooting, setIsBooting] = useState(true);

  return (
    <main className="relative">

      <AnimatePresence mode="wait">
        {isBooting ? (
          <BootSequence key="boot" onComplete={() => setIsBooting(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <Hero />
            <MissionArchives />
            <CRTOverlay />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
