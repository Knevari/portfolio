import { useRef } from "react";
import { cx } from "../../utils";
import CardSubtitle from "./card-subtitle";
import CardTitle from "./card-title";
import { useInView } from "framer-motion";

export interface CardProps extends React.ComponentPropsWithRef<"div"> {
  isActive?: boolean;
}

export default function Card({
  children,
  isActive = false,
  className = "",
  ...props
}: CardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.5 });

  return (
    <div
      ref={ref}
      className={cx("card", className, { active: isInView })}
      {...props}
    >
      <div className="card-content">{children}</div>
    </div>
  );
}

Card.Title = CardTitle;
Card.Subtitle = CardSubtitle;
