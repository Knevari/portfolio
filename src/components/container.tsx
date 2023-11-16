import { cx } from "../utils";

export interface ContainerProps extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
}

export default function Container({
  children,
  className = "",
  ...props
}: ContainerProps) {
  return (
    <div
      className={cx(
        "container mx-auto z-10 translate-x-0 relative min-h-screen",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
