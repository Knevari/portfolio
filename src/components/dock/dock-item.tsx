import React, { useRef } from "react";
import { MotionValue, motion, useSpring, useTransform } from "framer-motion";

import Magnetic from "../common/magnetic";

import { cx } from "../../utils";

export interface DockItemProps extends React.ComponentPropsWithoutRef<"a"> {
  mouseX: MotionValue;
  unmagnetized?: boolean;
  children: React.ReactElement;
}

export default function DockItem({
  mouseX,
  children,
  className = "",
  title,
  unmagnetized = false,
  ...props
}: DockItemProps) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div
      aria-label={title}
      ref={ref}
      style={{ width }}
      className="dock-item group relative aspect-square rounded-full from-[#7B1FA2] to-[#673AB7] p-px transition hover:bg-gradient-to-br"
    >
      <Magnetic off={unmagnetized}>
        {React.createElement(
          props.href ? "a" : "div",
          {
            className: cx("link h-full w-full", className),
            target: "_blank",
            ...props,
          },
          React.cloneElement(children, {
            className: "group-hover:fill-[url(#purple-gradient)] transition",
          }),
        )}
      </Magnetic>
    </motion.div>
  );
}
