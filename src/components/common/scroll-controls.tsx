import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const buttonVariants = {
  visible: {
    scale: 1,
    opacity: 1,
  },
  hidden: {
    scale: 0,
    opacity: 0,
  },
};

export default function ScrollControls({
  elementRef,
}: {
  elementRef: React.RefObject<HTMLElement>;
}) {
  const [canScrollLeft, setCanScrollLeft] = useState(true);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scrollLeft = useCallback(() => {
    const container = elementRef.current;

    if (!container) return;

    container.scroll({
      left: container.scrollLeft - 800,
      behavior: "smooth",
    });
  }, []);

  const scrollRight = useCallback(() => {
    const container = elementRef.current;

    if (!container) return;

    container.scroll({
      left: container.scrollLeft + 800,
      behavior: "smooth",
    });
  }, []);

  const onScroll = useCallback(() => {
    const container = elementRef.current;

    if (!container) return;

    const isStart = container.scrollLeft === 0;

    const isEnd =
      Math.abs(container.scrollLeft) ===
      container.scrollWidth - container.clientWidth;

    setCanScrollLeft(!isStart);
    setCanScrollRight(!isEnd);
  }, []);

  useEffect(() => {
    const container = elementRef.current;
    if (!container) return;

    onScroll();

    container.addEventListener("scroll", onScroll);
    return () => container.removeEventListener("scroll", onScroll);
  }, [onScroll]);
  return (
    <>
      <motion.div
        animate={canScrollLeft ? "visible" : "hidden"}
        variants={buttonVariants}
        className="absolute -left-[25px] top-1/2 hidden origin-center -translate-y-1/2 rounded-full bg-[#30333A] p-px md:block"
        onClick={scrollLeft}
      >
        <button
          aria-label="Scroll Left"
          aria-description="Scrolls the projects container to the left"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-gray to-grayer"
        >
          <FaArrowLeft size="22px" color="white" />
        </button>
      </motion.div>
      <motion.div
        animate={canScrollRight ? "visible" : "hidden"}
        variants={buttonVariants}
        className="absolute -right-[25px] top-1/2 hidden origin-center -translate-y-1/2 rounded-full bg-[#30333A] p-px md:block"
        onClick={scrollRight}
      >
        <button
          aria-label="Scroll Right"
          aria-description="Scrolls the projects container to the right"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-gray to-grayer"
        >
          <FaArrowRight size="22px" color="white" />
        </button>
      </motion.div>
    </>
  );
}
