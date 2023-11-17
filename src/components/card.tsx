import { cx } from "../utils";

export const CardTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="card-title text-5xl leading-tight">{children}</h3>
);

export const CardSubtitle = ({ children }: { children: React.ReactNode }) => (
  <p className="card-subtitle text-xl md:text-2xl">{children}</p>
);

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
