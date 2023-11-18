import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Magnetic({
  children,
}: {
  children: React.ReactElement;
}) {
  const magnetic = useRef<HTMLElement>(null);

  useEffect(() => {
    console.log(children);
    const xTo = gsap.quickTo(magnetic.current, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
    const yTo = gsap.quickTo(magnetic.current, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });

    const onMouseMove = (e: MouseEvent) => {
      if (!magnetic.current) return;
      const { clientX, clientY } = e;
      const { height, width, left, top } =
        magnetic.current.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x * 0.35);
      yTo(y * 0.35);
    };

    const onMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    magnetic.current?.addEventListener("mousemove", onMouseMove);
    magnetic.current?.addEventListener("mouseleave", onMouseLeave);
  }, []);

  return React.cloneElement(children, { ref: magnetic });
}
