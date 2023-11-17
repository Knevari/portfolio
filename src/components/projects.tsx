import { motion } from "framer-motion";
import { cx } from "../utils";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

export interface ProjectProps extends React.ComponentPropsWithoutRef<"a"> {
  children: React.ReactNode;
}

const Project = ({
  children,
  href,
  className = "",
  ...props
}: ProjectProps) => {
  return (
    <a
      href={href}
      target="_blank"
      className={cx(
        "p p-px bg-gray bg-colorful-gradient bg-3x bg-[0%_0%] hover:bg-[100%_100%] transition-bg-pos-transform duration-500 ease",
        className
      )}
      {...props}
    >
      <div className="bg-[#30333A90] backdrop-blur-2xl w-full h-full overflow-hidden">
        {children}
      </div>
    </a>
  );
};

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

export default function Projects() {
  const [canScrollLeft, setCanScrollLeft] = useState(true);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const projectsContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    const container = projectsContainerRef.current;

    if (!container) return;

    container.scroll({
      left: container.scrollLeft - 800,
      behavior: "smooth",
    });
  };
  const scrollRight = () => {
    const container = projectsContainerRef.current;

    if (!container) return;

    container.scroll({
      left: container.scrollLeft + 800,
      behavior: "smooth",
    });
  };

  const onScroll = () => {
    const container = projectsContainerRef.current;

    if (!container) return;

    const isStart = container.scrollLeft === 0;

    const isEnd =
      Math.abs(container.scrollLeft) ===
      container.scrollWidth - container.clientWidth;

    setCanScrollLeft(!isStart);
    setCanScrollRight(!isEnd);
  };

  useEffect(() => {
    const container = projectsContainerRef.current;

    if (!container) return;

    onScroll();

    container.addEventListener("scroll", onScroll);
    return () => container.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return (
    <div className="flex flex-col justify-stretch h-[90vh] max-h-[972px] max-w-[70%] relative">
      <h2 className="text-white font-bold text-5xl text-left mb-4">Projects</h2>
      <div
        ref={projectsContainerRef}
        id="projects"
        className="flex md:grid grid-rows-2 grid-flow-col gap-4 overflow-x-auto scrollbar-hide h-full"
      >
        <Project
          href="https://github.com/Knevari/advanced-lane-lines"
          className="min-w-[350px] group"
        >
          <img
            src="/projects/all.png"
            alt="Transit lane lines detector"
            className="object-contain transition grayscale group-hover:grayscale-0 duration-500 relatiive w-full h-full"
          />
          <div className="absolute w-full py-2 px-4 bottom-0 bg-gradient-to-br from-gray to-grayer">
            <h5 className="font-semibold text-white">Lane Lines Detector</h5>
          </div>
        </Project>
        <Project
          href="https://github.com/Knevari/overfall"
          className="min-w-[350px] group"
        >
          <img
            src="/projects/overfall.png"
            alt=""
            className="object-contain w-full h-full grayscale group-hover:grayscale-0 duration-500"
          />
          <div className="absolute w-full py-2 px-4 bottom-0 bg-gradient-to-br from-gray to-grayer">
            <h5 className="font-semibold text-white">Overfall</h5>
          </div>
        </Project>
        <Project
          href="https://github.com/Knevari/overfall"
          className="min-w-[350px] group"
        >
          <img
            src="/projects/portfolio.png"
            alt=""
            className="object-contain w-full h-full grayscale group-hover:grayscale-0 duration-500"
          />
          <div className="absolute w-full py-2 px-4 bottom-0 bg-gradient-to-br from-gray to-grayer">
            <h5 className="font-semibold text-white">This Portfolio</h5>
          </div>
        </Project>
      </div>
      <motion.div
        animate={canScrollLeft ? "visible" : "hidden"}
        variants={buttonVariants}
        className="hidden md:block p-px bg-[#30333A] absolute top-1/2 left-0 -translate-y-1/2 -translate-x-full rounded-full origin-center"
        onClick={scrollLeft}
      >
        <button className="flex items-center justify-center rounded-full w-14 h-14 bg-gradient-to-tr from-gray to-grayer">
          <FaArrowLeft size="22px" color="white" />
        </button>
      </motion.div>
      <motion.div
        animate={canScrollRight ? "visible" : "hidden"}
        variants={buttonVariants}
        className="hidden md:block p-px bg-[#30333A] absolute top-1/2 right-0 -translate-y-1/2 translate-x-[20px] rounded-full origin-center"
        onClick={scrollRight}
      >
        <button className="flex items-center justify-center rounded-full w-14 h-14 bg-gradient-to-tr from-gray to-grayer">
          <FaArrowRight size="22px" color="white" />
        </button>
      </motion.div>
    </div>
  );
}
