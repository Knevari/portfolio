import React, { useRef } from "react";
import { LuLanguages } from "react-icons/lu";
import {
  FaGithub,
  FaLinkedin,
  FaDiscord,
  FaCodepen,
  FaMoon,
} from "react-icons/fa";
import { cx } from "../utils";
import {
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Magnetic from "./magnetic";

export interface DockItemProps extends React.ComponentPropsWithoutRef<"a"> {
  mouseX: MotionValue;
  children: React.ReactElement;
}

export function DockItem({
  mouseX,
  children,
  className = "",
  ...props
}: DockItemProps) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="aspect-square dock-item rounded-full p-px hover:bg-gradient-to-br from-[#7B1FA2] to-[#673AB7] transition group"
    >
      <Magnetic>
        <a
          className={cx("link w-full h-full", className)}
          target="_blank"
          {...props}
        >
          {React.cloneElement(children, {
            className: "group-hover:fill-[url(#purple-gradient)] transition",
          })}
        </a>
      </Magnetic>
    </motion.div>
  );
}

export default function Dock() {
  const dockRef = useRef<HTMLDivElement>(null);
  let mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      ref={dockRef}
      id="links"
      className="flex flex-row z-[99999] gap-1 md:gap-2 text-white/40 h-14 items-center px-2 rounded-full border border-[#30333A] transition metal-gradient"
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
        className="h-3/5 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent rounded-full"
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
