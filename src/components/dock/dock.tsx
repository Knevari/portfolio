import { useRef } from "react";
import { motion, useMotionValue } from "framer-motion";

import { LuLanguages } from "react-icons/lu";
import {
  FaGithub,
  FaLinkedin,
  FaDiscord,
  FaCodepen,
  FaMoon,
} from "react-icons/fa";

import DockItem from "./dock-item";

export default function Dock() {
  const dockRef = useRef<HTMLDivElement>(null);
  let mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      ref={dockRef}
      id="links"
      className="metal-gradient z-[99999] flex h-14 flex-row items-center gap-1 rounded-full border border-[#30333A] px-2 text-white/40 transition md:gap-2"
      style={{ background: "hsl(0 0% 8.5%)" }}
    >
      <svg width="0" height="0">
        <linearGradient
          id="purple-gradient"
          x1="100%"
          y1="100%"
          x2="0%"
          y2="0%"
        >
          <stop stopColor="#7B1FA2" offset="0%" />
          <stop stopColor="#673AB7" offset="100%" />
        </linearGradient>
      </svg>
      <DockItem
        mouseX={mouseX}
        href="https://github.com/Knevari"
        title="Github"
      >
        <FaGithub size="24px" />
      </DockItem>
      <DockItem
        mouseX={mouseX}
        href="https://www.linkedin.com/in/knevari/"
        title="LinkedIn"
      >
        <FaLinkedin size="24px" />
      </DockItem>
      <DockItem mouseX={mouseX} href="" title="Discord">
        <FaDiscord size="24px" />
      </DockItem>
      <DockItem
        mouseX={mouseX}
        href="https://codepen.io/_Common/"
        title="Codepen"
      >
        <FaCodepen size="24px" />
      </DockItem>
      <div
        tabIndex={-1}
        className="h-3/5 w-px rounded-full bg-gradient-to-b from-transparent via-white/30 to-transparent"
        role="presentation"
      />
      <DockItem mouseX={mouseX}>
        <LuLanguages />
      </DockItem>
      <DockItem mouseX={mouseX}>
        <FaMoon />
      </DockItem>
    </motion.div>
  );
}
