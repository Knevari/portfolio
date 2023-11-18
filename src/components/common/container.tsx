import { cx } from "../../utils";

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
        "container relative z-10 mx-auto min-h-screen translate-x-0",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
