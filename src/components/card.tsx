import { cx } from "../utils";

export interface CardProps extends React.ComponentPropsWithRef<"div"> {
  title: string;
  subtitle: string;
}

// I know I can make a compound component,
// it also bothers me a little ;)
export default function Card({
  title,
  subtitle,
  className = "",
  ...props
}: CardProps) {
  return (
    <div className={cx("card", className)} {...props}>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <h4 className="card-subtitle">{subtitle}</h4>
      </div>
    </div>
  );
}
