import { useRef } from "react";
import { motion, useMotionValue } from "framer-motion";

import DockItem from "./dock-item";
import DockLanguageSwitch from "./dock-language-switch";

import links from "./personal-links";

export default function Dock() {
  const dockRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      ref={dockRef}
      id="links"
      className="metal-gradient z-[99999] flex h-14 flex-row items-center gap-1 rounded-full border border-[#30333A] px-2 text-white/40 transition md:gap-2"
      style={{ background: "hsl(0 0% 8.5%)" }}
    >
      {/* This SVG is necessary for giving a gradient to react-icons */}
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
      {links.map(({ title, href, Icon }) => (
        <DockItem key={title} mouseX={mouseX} href={href} title={title}>
          <Icon />
        </DockItem>
      ))}
      <div
        tabIndex={-1}
        className="h-3/5 w-px rounded-full bg-gradient-to-b from-transparent via-white/30 to-transparent"
        role="presentation"
      />

      <DockLanguageSwitch mouseX={mouseX} />
    </motion.div>
  );
}
