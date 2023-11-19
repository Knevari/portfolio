import { motion } from "framer-motion";
import { cx } from "../../utils";

const variants = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};

export interface StackTooltipProps
  extends React.ComponentPropsWithoutRef<"div"> {
  position?: "top" | "bottom" | "left" | "right";
  delay: number;
  isActive?: boolean;
}

export default function StackTooltip({
  delay,
  children,
  position = "top",
  className = "",
  isActive = false,
}: StackTooltipProps) {
  const positions = {
    top: "bottom-[calc(100%+5px)] left-1/2 -translate-x-1/2",
    bottom: "top-[calc(100%+10px)] left-1/2 -translate-x-1/2",
    left: "top-1/2 -translate-y-1/2 right-[calc(100%+10px)]",
    right: "top-1/2 -translate-y-1/2 left-[calc(100%+10px)]",
  };
  return (
    <motion.div
      animate={isActive ? "visible" : "hidden"}
      variants={variants}
      tabIndex={-1}
      transition={{ delay }}
      role="tooltip"
      className={cx(
        "border-3 absolute z-50 rounded-full bg-[#0D0D0D] px-8 py-1 text-sm text-pink",
        positions[position],
        className,
      )}
    >
      {children}
      {position === "top" && (
        <div
          role="presentation"
          className="absolute inset-1/2 top-full h-0 w-0 -translate-x-1/2 border-[7px] border-transparent border-t-[#0D0D0D]"
        />
      )}
      {position === "right" && (
        <div
          role="presentation"
          className="absolute inset-1/2 -left-[4px] top-[50%] h-0 w-0 -translate-x-1/2 -translate-y-1/2 border-[8px] border-transparent border-r-[#0D0D0D]"
        />
      )}
      {position === "bottom" && (
        <div
          role="presentation"
          className="absolute inset-1/2 -top-[13px] h-0 w-0 -translate-x-1/2 border-[7px] border-transparent border-b-[#0D0D0D]"
        />
      )}
      {position === "left" && (
        <div
          role="presentation"
          className="absolute inset-1/2 -right-[4px] top-[50%] h-0 w-0 -translate-x-1/2 -translate-y-1/2 border-[8px] border-transparent border-r-[#0D0D0D]"
        />
      )}
    </motion.div>
  );
}
