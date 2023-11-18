import { motion } from "framer-motion";
import { cx } from "../utils";

export default function Tooltip({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      role="tooltip"
      className={cx(
        "before:border-3 pointer-events-none absolute bottom-[calc(100%+20px)] -translate-x-8 rounded-full bg-violet px-8 before:absolute before:left-1/2 before:top-full before:h-0 before:w-0 before:-translate-x-1/2 before:border before:border-transparent before:border-b-violet before:content-['']",
      )}
    >
      {children}
    </motion.div>
  );
}
