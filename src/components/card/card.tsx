import { cx } from "../../utils";
import CardSubtitle from "./card-subtitle";
import CardTitle from "./card-title";

export interface CardProps extends React.ComponentPropsWithRef<"div"> {
  isActive?: boolean;
}

export default function Card({
  children,
  isActive = false,
  className = "",
  ...props
}: CardProps) {
  return (
    <div className={cx("card", className, { active: isActive })} {...props}>
      <div className="card-content">{children}</div>
    </div>
  );
}

Card.Title = CardTitle;
Card.Subtitle = CardSubtitle;
